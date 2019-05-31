// Global App Controller
import { SearchCateg } from './models/Search';
import { SearchMeals } from './models/Search';
import { Recipe } from './models/Recipe';
import { elements, renderLoader, clearLoader } from './views/base';
import * as searchView from './views/searchView';
import * as recipeView from './views/recipeView';
import * as likesView from './views/likesView';
import { Likes } from './models/Likes';

/* Global state of the app
 * SearchCateg object
 * SearchRecipe object
 * Current Recipe object
*/

const state = {};

//--------------------------------- Event Listeners -------------------------------
//---------------------------------------------------------------------------------

// Event listener for loading the window
window.onload = e => {
  controlSearchCateg();
};

// Event listener for clicking on meal categories
elements.categoriesList.addEventListener('click', e => {
  e.preventDefault();
  controlSearchMeals(e);
});

// Event listener for search button
elements.searchButton.addEventListener('click', e => {
  e.preventDefault();
  controlSearchMeals(e);
})

// Event listeners for pagination buttons (event delegation)
elements.searchResPages.addEventListener('click', e => {  
  const btn = e.target.closest('.button-sm')
  if (btn) {
    const goToPage = parseInt(btn.dataset.goto);
    searchView.clearResults();
    searchView.renderMealsResults(state.searchMeals.listOfMeals, goToPage);
  }
})


// Event listeners for a special recipe (Assigning same evenet listener to differenet event)
// ['hashchange','load'].forEach(event => window.addEventListener(event, controlRecipe));
window.addEventListener('hashchange', () => {
  controlRecipe();
});

window.addEventListener('load', () => {
  controlRecipe();
});


// Event listener for Like button
elements.recipe.addEventListener('click', e => {
  // if it matches the class and its children (true or false) (another method for event delegation) => (matches) method 
  // returns the closest ancestor of the current element (or the current element itself)  (another method for event delegation) => (closest) method
  if (e.target.closest('.recipe-love')) {
    controlLike();   
  }

});

// Restore liked recipes on page load
window.addEventListener('load', () => {
  state.likes = new Likes();
  // Restore likes
  state.likes.getLikesFromLS();
  // Toggle like menu button
  likesView.toggleLikeMenu(state.likes.getNumLikes());
  // Render the existing likes
  state.likes.likes.forEach(like => likesView.renderLike(like));
});







// ---------------------------------------------------Search Controllers Functions -----------------------------------------------------------
// ------------------------------------------------------------------------------- -----------------------------------------------------------
// Categories function
const controlSearchCateg = async () => {
  // new searchCateg object and add to the state
  state.searchCateg = new SearchCateg();

  // Prepare UI for category results

  // Search for meal categories
  await state.searchCateg.getCategories();

  // render results on UI
  searchView.renderCategResults(state.searchCateg.mealCategories);
}


// function for searching meals for a special categories
const controlSearchMeals = async (e) => {
  let query;

  if (e.target.parentElement.parentElement.classList.contains('categories')) {
      // Get search query 
      query = e.target.textContent;
    } else if (e.target.className === 'button-lg') {
      if (elements.searchInput.value !== '') {
        query = elements.searchInput.value;
      }      
    }
      // new searchCateg object and add to the state
      state.searchMeals = new SearchMeals(query);

      // Prepare UI for category results
      searchView.clearInput();
      searchView.clearResults();

      renderLoader(elements.categoryTitle);
      try {
          // Search for meals
          await state.searchMeals.getMealsList();
          // render results on UI
          clearLoader();
          searchView.renderMealsResults(state.searchMeals.listOfMeals);
      } catch (error) {
        alert('Something wrong with the search!');
        clearLoader();
      }  
}



// ---------------------------------------------------Recipe Controllers Functions -----------------------------------------------------------
// ------------------------------------------------------------------------------- -----------------------------------------------------------
const controlRecipe = async () => {

  const id = window.location.hash.replace('#', '');

    if (id) {
      // Prepare UI for changes
      recipeView.clearRecipe();
      renderLoader(elements.mealsResults);

      if (state.searchMeals) searchView.highlightSelected(id);
      
      // Create new recipe object
      state.recipe = new Recipe(id);
      
      try {
          // Get recipe data
          await state.recipe.getRecipe();

          // Render recipe
          clearLoader();
          recipeView.renderRecipe(state.recipe, state.likes.isLiked(id));
      } catch (error) {
        alert('Error processing recipe!');
        console.log(error);
      }
    }
}

// ---------------------------------------------------Likes Controller Functions -----------------------------------------------------------
// ------------------------------------------------------------------------------- -----------------------------------------------------------


const controlLike = () => {

  if (!state.likes) state.likes = new Likes();
  const currentID = state.recipe.id;
  
  // User has NOT liked the current recipe
  if (!state.likes.isLiked(currentID)) {
    // Add like to the state
    const newLike = state.likes.addLike(currentID, state.recipe.title, state.recipe.area, state.recipe.image);       

    // Toggle the like button
    likesView.toggleLikeBtn(true);
    
    // Add like to the UI list
    likesView.renderLike(newLike);

  // User HAS liked the current recipe
  } else {
    // Remove like from the state
    state.likes.deleteLike(currentID);

    // Toggle the like button
    likesView.toggleLikeBtn(false);
    // Remove like from the UI list
    likesView.deleteLike(currentID);

  }

  likesView.toggleLikeMenu(state.likes.getNumLikes());  
  

};























