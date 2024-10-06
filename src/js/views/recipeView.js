import * as state from '../state';
// import * as results from './resultsView';
export function addRecipe() {
  state.recipeBtn.addEventListener('click', function () {
    state.addRecipeWindow.classList.remove('hidden');
  });
  state.btnCloseModal.addEventListener('click', function () {
    state.addRecipeWindow.classList.add('hidden');
  });
  state.uploadBtn.addEventListener('click', function (e) {
    const response = JSON.parse(localStorage.getItem('ownRecipes'))
      ? JSON.parse(localStorage.getItem('ownRecipes'))
      : [];
    let counter = response.length === 0 ? 1 : response.length + 1;
    e.preventDefault();
    const formInputs = {
      id: counter,
      title: state.formTitle.value,
      image_url: state.formImage.value,
      publisher: state.formPublisher.value,
      prepTime: state.formCookingTime.value,
      servings: state.formServings.value,
      //ingridients
      ingridient1: state.ingredient_1.value,
      ingridient2: state.ingredient_2.value,
      ingridient3: state.ingredient_3.value,
      ingridient4: state.ingredient_4.value,
      ingridient5: state.ingredient_5.value,
      ingridient6: state.ingredient_6.value,
    };
    response.push(formInputs);

    localStorage.setItem('ownRecipes', JSON.stringify(response));
    state.addRecipeWindow.classList.add('hidden');
    window.location.reload();
  });
}
