import icons from 'url:../../img/icons.svg';

export function renderSpinner(place) {
  const html = `<div class="spinner">
          <svg>
            <use href="src/img/icons.svg#icon-loader"></use>
          </svg>
        </div>`;
  place.insertAdjacentHTML('afterbegin', html);
}
