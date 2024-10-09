import * as model from './model';
import * as bookMarks from './views/bookmarksView';
import * as elements from './views/elementsView';
import * as pagination from './views/paginationView';
import * as recipe from './views/recipeView';
import * as results from './views/resultsView';
import * as state from './state';

addEventListener('DOMContentLoaded', app);

function app() {
  // console.log(state.allInitialElements);
  // Handle results from input
  results.addHundlerForSubmit(model.renderListFromAPI());
  //Render initial

  recipe.addRecipe();
}
