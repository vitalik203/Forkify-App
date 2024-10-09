import * as state from '../state';
import * as model from '../model';
import * as pagination from './paginationView';
import icons from 'url:../../img/icons.svg';
import * as elements from './elementsView';
let resArr = [];
let localStorageData;
let page = 2;
export function getListInitial() {
  return (localStorageData = JSON.parse(localStorage.getItem('ownRecipes'))
    ? JSON.parse(localStorage.getItem('ownRecipes'))
    : []);
}

export function renderList(arr, page) {
  state.results.innerHTML = '';
  let start, end;
  start = (page - 1) * state.itemAtList;
  end = page * state.itemAtList - 1;
  console.log(start, end);

  arr.forEach((el, i) => {
    if (i > start - 1 && i <= end) {
      const html = `<li class="preview">
      <a class="preview__link" href="#${el.id}">
        <figure class="preview__fig">
          <img src="${el.image_url}" alt="${el.title}" />
        </figure>
        <div class="preview__data">
          <h4 class="preview__title">${el.title}</h4>
          <p class="preview__publisher">${el.publisher}</p>
        </div>
      </a>
    </li>`;
      state.results.insertAdjacentHTML('afterbegin', html);
    }
  });
}

//Get list from api local storage
function getListFromLocalStorage() {
  model.renderListFromAPI().then(res => {
    resArr = [];
    res.data.recipes.forEach(el => {
      resArr.push(el);
    });
    getListInitial().forEach(el => {
      resArr.unshift(el);
    });

    console.log(resArr);

    renderList(resArr, page);

    // // Pagination
    // pagination.renderPage(start, end, page, resArr.length);
    // document
    //   .querySelector('.pagination__btn--prev')
    //   .addEventListener('click', function () {
    //     state.pages.innerHTML = '';
    //     page--;
    //     getListFromLocalStorage();
    //   });
    // document
    //   .querySelector('.pagination__btn--next')
    //   .addEventListener('click', function () {
    //     state.pages.innerHTML = '';
    //     page++;
    //     getListFromLocalStorage();
    //   });
  });
}

//Click handle
export function addHundlerForSubmit() {
  state.searchBtn.addEventListener('click', function (e) {
    page = 1;
    state.pages.innerHTML = '';
    e.preventDefault();
    getListFromLocalStorage();
  });
}
