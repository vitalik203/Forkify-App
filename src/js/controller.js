import icons from '../img/icons.svg';
document.addEventListener('DOMContentLoaded', app);

function app() {
  const recipeContainer = document.querySelector('.recipe');
  const inputData = document.querySelector('.search__field');
  const searchBtn = document.querySelector('.search__btn');
  const results = document.querySelector('.results');
  const API = '5bcaa7a8-fde0-4c7f-9a2b-64a03594b754';
  let resultArr;

  function insertList(arr, pastHere, id) {
    arr.forEach(el => {
      pastHere.insertAdjacentHTML(
        'afterbegin',
        `<li class="preview">
            <a class="preview__link ${
              id === el.id ? 'preview__link--active' : ''
            }" href="#${el.id}">
              <figure class="preview__fig">
                <img src="${el.image_url}" alt="Test" />
              </figure>
              <div class="preview__data">
                <h4 class="preview__title">${el.title}</h4>
                <p class="preview__publisher">${el.publisher}</p>
                
              </div>
            </a>
          </li>`,
        pastHere
      );
    });
  }

  const requestFromAPI = async function (name, api) {
    try {
      renderSpinner(recipeContainer);
      const asnwer = await fetch(
        `https://forkify-api.herokuapp.com/api/v2/recipes?search=${name}&key=${api}`
      );
      return asnwer.json();
    } catch {
    } finally {
      removeSpinner();
    }
  };
  function removeSpinner() {
    const spinner = document.querySelector('.spinner');
    if (spinner) {
      spinner.remove();
    }
  }
  searchBtn.addEventListener('click', function (e) {
    e.preventDefault();
    const inputValue = inputData.value;
    requestFromAPI(inputValue, API)
      .then(data => {
        resultArr = data.data.recipes;
        insertList(data.data.recipes, results);
      })
      .catch(err => console.log(err));
  });

  function renderSpinner(container) {
    const html = `
    <div class="spinner">
    <svg>
    <use href="${icons}.svg#icon-loader"></use>
    </svg>
    </div>`;
    container.innerHTML = '';
    container.insertAdjacentHTML('afterbegin', html);
    const spinner = document.querySelector('.spinner');
  }

  async function getRecipeFromApi(id) {
    try {
      const request = await fetch(
        `https://forkify-api.herokuapp.com/api/v2/recipes/${id}?key=${API}`
      );
      return request.json();
    } catch (err) {
      console.error(err);
    }
  }

  function renderRecipe(obj, wherePut) {
    const html = `<figure class="recipe__fig">
          <img src="${obj.data.recipe.image_url}" alt="Tomato" class="recipe__img" />
          <h1 class="recipe__title">
            <span>${obj.data.recipe.title}</span>
          </h1>
        </figure>

        <div class="recipe__details">
          <div class="recipe__info">
            <svg class="recipe__info-icon">
              <use href="${icons}#icon-clock"></use>
            </svg>
            <span class="recipe__info-data recipe__info-data--minutes">${obj.data.recipe.cooking_time}</span>
            <span class="recipe__info-text">minutes</span>
          </div>
          <div class="recipe__info">
            <svg class="recipe__info-icon">
              <use href="${icons}#icon-users"></use>
            </svg>
            <span class="recipe__info-data recipe__info-data--people">${obj.data.recipe.servings}</span>
            <span class="recipe__info-text">servings</span>

            <div class="recipe__info-buttons">
              <button class="btn--tiny btn--increase-servings">
                <svg>
                  <use href="${icons}#icon-minus-circle"></use>
                </svg>
              </button>
              <button class="btn--tiny btn--increase-servings">
                <svg>
                  <use href="${icons}#icon-plus-circle"></use>
                </svg>
              </button>
            </div>
          </div>

          <div class="recipe__user-generated">
            <svg>
              <use href="${icons}#icon-user"></use>
            </svg>
          </div>
          <button class="btn--round">
            <svg class="">
              <use href="${icons}#icon-bookmark-fill"></use>
            </svg>
          </button>
        </div>

        <div class="recipe__ingredients">
          <h2 class="heading--2">Recipe ingredients</h2>
          <ul class="recipe__ingredient-list">
          </ul>
        </div>
        <div class="recipe__directions">
          <h2 class="heading--2">How to cook it</h2>
          <p class="recipe__directions-text">
            This recipe was carefully designed and tested by
            <span class="recipe__publisher">The Pioneer Woman</span>. Please check out
            directions at their website.
          </p>
          <a
            class="btn--small recipe__btn"
            href="http://thepioneerwoman.com/cooking/pasta-with-tomato-cream-sauce/"
            target="_blank"
          >
            <span>Directions</span>
            <svg class="search__icon">
              <use href="${icons}#icon-arrow-right"></use>
            </svg>
          </a>
        </div>`;
    wherePut.insertAdjacentHTML('afterbegin', html);
    const ingridientsList = document.querySelector('.recipe__ingredient-list');
    obj.data.recipe.ingredients.forEach(el => {
      const html = `<li class="recipe__ingredient">
              <svg class="recipe__icon">
                <use href="${icons}#icon-check"></use>
              </svg>
              <div class="recipe__quantity">${
                el.quantity === null ? '' : el.quantity
              }</div>
              <div class="recipe__description">
                <span class="recipe__unit">${
                  el.unit === null ? '' : el.unit
                }</span>
                ${el.description}
              </div>
            </li>`;
      ingridientsList.insertAdjacentHTML('afterbegin', html);
    });
  }

  async function showRecipe() {
    try {
      let id = window.location.hash;
      console.log(id);
      console.log(resultArr);
      resultArr.forEach(e => {
        if (id === `#${e.id}`) {
          getRecipeFromApi(e.id).then(data => {
            console.log(data);
            results.innerHTML = '';
            insertList(resultArr, results, e.id);
            recipeContainer.innerHTML = '';
            renderRecipe(data, recipeContainer);
          });
        }
      });
    } catch (err) {
      console.error(err);
    } finally {
      renderSpinner(recipeContainer);
    }
  }
  window.addEventListener('hashchange', showRecipe);
}
