export const elements = {
  searchInput: document.querySelector('.input'),
  searchButton: document.querySelector('.button-lg'),
  categoriesList: document.querySelector('.categories'),
  mealsList: document.querySelector('.meals-list'),
  categoryTitle: document.querySelector('.category-meals-title'),
  searchResPages: document.querySelector('.results-pages'),
  recipe: document.querySelector('.recipe'),
  mealsResults: document.querySelector('.meals-results'),
  likesMenu: document.querySelector('.likes-field'),
  likesList: document.querySelector('.likes-list') 
}

export const renderLoader = parent => {
  const loader = `
    <div class="loader">
        <svg class="icon-spinner4">
           <use xlink:href="img/icons.svg#icon-spinner4"></use>
        </svg>
    </div>
  `;

  parent.insertAdjacentHTML('afterend', loader);
}


export const clearLoader = () => {
  const loader = document.querySelector('.loader');

  if (loader) {
    loader.remove();
  }
}


