import * as model from './model.js';
import recipeView from './views/recipeView.js';

import 'core-js/stable';
import 'regenerator-runtime/runtime';

const recipeContainer = document.querySelector('.recipe');

const controlRecipes = async function() {
  try {
    const id = window.location.hash.slice(1);
    if (!id) return;

    recipeView.renderSpinner();

    // Load Recipe
    await model.loadRecipe(id);

    // Rendering Recipe 
    recipeView.render(model.state.recipe);
  } catch(err) {
    alert(err);
  }
}

const init = function() {
  recipeView.addHandlerRender(controlRecipes);
}
init();