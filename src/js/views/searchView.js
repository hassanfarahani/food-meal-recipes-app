import { elements } from './base';

// render meals categories
export const renderCategResults = categories => {
  let html = '';
  categories.forEach(category => {
    html +=`
       <li class="list-group-item food-category btn-outline-warning">
                <a href="">${category.strCategory}</a>
       </li>
    `;
  });

  elements.categoriesList.insertAdjacentHTML('afterbegin', html);
}

// --------------------------------------------------------------------------
// --------------------------------------------------------------------------

// type: 'next' or 'prev'
const createButton = (type, page) => `
      <button class="button-sm results__btn--${type}" data-goto=${type === 'next' ? page + 1 : page - 1}>
        <span>${type}</span>
        <i class="far fa-arrow-alt-circle-${type === 'next' ? 'right' : 'left'}"></i>
      </button>
`;


const renderButtons = (page, mealsNum, resPerPage) => {
  // Number of pages required to display the results
  const pages = Math.ceil(mealsNum / resPerPage);

  // Creating buttons
  let button;
  if (page === 1 && pages > 1) {
    // display next button
    button = createButton('next', page);
  } else if (page < pages) {
    // display both buttons
    button = `${createButton('next', page)}
              ${createButton('prev', page)}`;
  } else if (page === pages && pages > 1) {
    // diaplay prev button
    button = createButton('prev', page);
  }
  
  // Inserting the button into the DOM
  elements.searchResPages.insertAdjacentHTML('afterbegin', button);
}

// Render meal
const renderMeal = meal => {
  const html = `
      <li>
        <a href="#${meal.idMeal}" class="d-flex results-link mb-4 ml-3">
          <img src="${meal.strMealThumb}" alt="${meal.strMeal}">                 
          <div class="results-data">
              <h6>${meal.strMeal}</h6>
              <p><em>${meal.strArea}</em></p>
          </div>                    
        </a>
      </li>
  `;
  elements.mealsList.insertAdjacentHTML('beforeend', html);
}



// render meals list
export const renderMealsResults = (meals, page = 1, resPerPage) => {
  if (meals.length > 4) {
      // Render the results of current page
      resPerPage = 4;
      const start = (page - 1) * resPerPage;
      const end  = page * resPerPage;
      meals.slice(start, end).forEach(renderMeal);      

      // Render pagination buttons
      renderButtons(page, meals.length, resPerPage);
  } else {
      meals.forEach(renderMeal);
  }
}


// Clear meals results from UI
export const clearResults = () => {
  elements.mealsList.innerHTML = '';
  elements.searchResPages.innerHTML = '';
}

// Clear the input search value entered by user
export const clearInput = () => {
  elements.searchInput.value = '';
}

// Highlight the selected recipe
export const highlightSelected = id => {
  const listArr = document.querySelectorAll('.results-link');
  if (listArr) {
    listArr.forEach(el => el.classList.remove('results-link--active'));
    document.querySelector(`.results-link[href="#${id}"]`).classList.add('results-link--active');
  }
}




