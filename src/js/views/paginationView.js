import * as state from '../state';
import icons from 'url:../../img/icons.svg';

export function renderPage(start, end, page, allAmount) {
  console.log(allAmount);
  const finalPage = Math.round(allAmount / 10);
  console.log(finalPage);

  const html = `<button class="btn--inline pagination__btn--prev ${
    page === 1 ? 'hidden' : ''
  }">
            <svg class="search__icon">
              <use href="${icons}#icon-arrow-left"></use>
            </svg>
            <span>Page ${page - 1}</span>
          </button>
          <button class="btn--inline pagination__btn--next ${
            page >= finalPage ? 'hidden' : ''
          }">
            <span>Page ${page + 1}</span>
            <svg class="search__icon">
              <use href="${icons}#icon-arrow-right"></use>
            </svg>
          </button>`;
  state.pages.insertAdjacentHTML('afterbegin', html);
}
