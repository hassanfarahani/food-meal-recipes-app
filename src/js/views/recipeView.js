import { elements } from './base';

// Parse ingredient & measure properties of Recipe class
const createIngredients = recipe => {
 let markup = '';
      for (let i = 1; i <= 20; i++) {
        let ingredient = `ingredient${i}`;
        let measure = `measure${i}`;
        
        // if there is no value for this i, go to the next i
        if (recipe[ingredient] === '' && recipe[measure] === '' || recipe[ingredient] === null && recipe[measure] === null) {
          continue;
        }
            
        markup +=  `
              <li class="d-flex">
                <div class="p-1 align-self-start">
                      <i class="fas fa-check"></i>
                </div>
                <div class="p-1 recipe-ingredient">${recipe[ingredient]}: ${recipe[measure]}</div> 
              </li>
            `;        
      }
  return markup;    
}

// Parse instruction property of Recipe class
const createInstruction = recipe => {
  let recipeInstruction = recipe.instruction;
  if (recipeInstruction.includes('\r\n')) {
    recipeInstruction = recipeInstruction.replace('\r\n', ' ');  
  }
  return recipeInstruction;
}


// Display recipe ingredients and instruction on UI
export const renderRecipe = (recipe, isLiked) => {
  const html = `
  
        <h4 class="recipe-name">${recipe.title}</h4>
        <img src="${recipe.image}" alt="">

        <button class="recipe-love">
           <i class="${isLiked ? 'fas' : 'far'} fa-heart"></i>
        </button>

        <h5 class="ingredients-title">Ingredients</h5> 
        <ul class="recipe-ingredient-list">
          ${createIngredients(recipe)}
        </ul> 
        

        <h5 class="ingredients-title">Instruction</h5>
        <ul class="recipe-instructions-list">
        
            <div class="recipe-instruction">
              <div class="d-flex recipe-icon">
                    <div class="recipe-steps">
                      <p>${createInstruction(recipe)}</p>
                   </div>                     
              </div>
           </div>
                       
        </ul>
        <div class="wrapper-link">
           <a href="${recipe.video}" class="button-link" target="_blank">Watch on Youtube</a>       
        </div>
  `;

  elements.recipe.insertAdjacentHTML('afterbegin', html);

}



// Clear recipe
export const clearRecipe = () => {
  elements.recipe.innerHTML = '';
}





















