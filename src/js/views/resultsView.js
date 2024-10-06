import * as state from '../state';
import * as model from '../model';
import * as pagination from './paginationView';
import icons from 'url:../../img/icons.svg';
import * as elements from './elementsView';

let page;
export async function renderListInitial() {
  const response = JSON.parse(localStorage.getItem('ownRecipes'))
    ? JSON.parse(localStorage.getItem('ownRecipes'))
    : [];
  console.log(response);
  renderList(response, 1);
}

export function renderList(arr, my) {
  // renderListInitial();
  state.results.innerHTML = '';
  arr.forEach(el => {
    const html = `<li class="preview">
              <a class="preview__link" href="#${el.id}">
                <figure class="preview__fig">
                  <img src="${el.image_url}" alt="${el.title}" />
                </figure>
                <div class="preview__data">
                  <h4 class="preview__title">${el.title}</h4>
                  <p class="preview__publisher">${el.publisher}</p>
                </div>
                ${
                  my === 1
                    ? `<div class="preview__user-generated">
                    <svg>
                      <use href="${icons}#icon-user"></use>
                    </svg>
                  </div>`
                    : ''
                }
              </a>
              
            </li>`;
    state.results.insertAdjacentHTML('afterbegin', html);
  });
}

//Get list from api local storage
function getListFromLocalStorage() {
  model.renderListFromAPI().then(res => {
    let start, end;
    start = JSON.parse(localStorage.getItem('ownRecipes'))
      ? Number(page - 1 + '1') +
        JSON.parse(localStorage.getItem('ownRecipes')).length
      : Number(page - 1 + '1');
    end = Number(page - 1 + '9');
    renderList(res.data.recipes.slice(start, end + 2));
    // Pagination
    pagination.renderPage(
      start,
      end,
      page,
      JSON.parse(localStorage.getItem('ownRecipes')).length +
        res.data.recipes.length
    );
    document
      .querySelector('.pagination__btn--prev')
      .addEventListener('click', function () {
        state.pages.innerHTML = '';
        page--;
        getListFromLocalStorage();
      });
    document
      .querySelector('.pagination__btn--next')
      .addEventListener('click', function () {
        state.pages.innerHTML = '';
        page++;
        getListFromLocalStorage();
      });
  });
}

//Click handle
export function addHundlerForSubmit() {
  state.searchBtn.addEventListener('click', function (e) {
    page = 1;
    state.pages.innerHTML = '';
    e.preventDefault();
    getListFromLocalStorage();
    renderListInitial();
  });
}
