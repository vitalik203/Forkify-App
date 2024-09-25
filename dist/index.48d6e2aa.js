function e(e){return e&&e.__esModule?e.default:e}var i=globalThis,s={},n={},t=i.parcelRequire3a11;null==t&&((t=function(e){if(e in s)return s[e].exports;if(e in n){var i=n[e];delete n[e];var t={id:e,exports:{}};return s[e]=t,i.call(t.exports,t,t.exports),t.exports}var r=Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r}).register=function(e,i){n[e]=i},i.parcelRequire3a11=t),(0,t.register)("6KuVT",function(e,i){Object.defineProperty(e.exports,"register",{get:()=>s,set:e=>s=e,enumerable:!0,configurable:!0});var s,n=new Map;s=function(e,i){for(var s=0;s<i.length-1;s+=2)n.set(i[s],{baseUrl:e,path:i[s+1]})}}),t("6KuVT").register(new URL("",import.meta.url).toString(),JSON.parse('["f9fpV","index.48d6e2aa.js","hfd23","icons.c14567a0.svg"]'));var r={};r=new URL("icons.c14567a0.svg",import.meta.url).toString(),document.addEventListener("DOMContentLoaded",function(){let i;let s=document.querySelector(".recipe"),n=document.querySelector(".search__field"),t=document.querySelector(".search__btn"),c=document.querySelector(".results"),a="5bcaa7a8-fde0-4c7f-9a2b-64a03594b754";function o(e,i,s){e.forEach(e=>{i.insertAdjacentHTML("afterbegin",`<li class="preview">
            <a class="preview__link ${s===e.id?"preview__link--active":""}" href="#${e.id}">
              <figure class="preview__fig">
                <img src="${e.image_url}" alt="Test" />
              </figure>
              <div class="preview__data">
                <h4 class="preview__title">${e.title}</h4>
                <p class="preview__publisher">${e.publisher}</p>
                
              </div>
            </a>
          </li>`,i)})}let l=async function(e,i){try{return p(s),(await fetch(`https://forkify-api.herokuapp.com/api/v2/recipes?search=${e}&key=${i}`)).json()}catch{}finally{(function(){let e=document.querySelector(".spinner");e&&e.remove()})()}};function p(i){let s=`
    <div class="spinner">
    <svg>
    <use href="${/*@__PURE__*/e(r)}.svg#icon-loader"></use>
    </svg>
    </div>`;i.innerHTML="",i.insertAdjacentHTML("afterbegin",s),document.querySelector(".spinner")}async function u(e){try{return(await fetch(`https://forkify-api.herokuapp.com/api/v2/recipes/${e}?key=${a}`)).json()}catch(e){console.error(e)}}async function d(){try{let n=window.location.hash;console.log(n),console.log(i),i.forEach(t=>{n===`#${t.id}`&&u(t.id).then(n=>{console.log(n),c.innerHTML="",o(i,c,t.id),s.innerHTML="",function(i,s){let n=`<figure class="recipe__fig">
          <img src="${i.data.recipe.image_url}" alt="Tomato" class="recipe__img" />
          <h1 class="recipe__title">
            <span>${i.data.recipe.title}</span>
          </h1>
        </figure>

        <div class="recipe__details">
          <div class="recipe__info">
            <svg class="recipe__info-icon">
              <use href="${/*@__PURE__*/e(r)}#icon-clock"></use>
            </svg>
            <span class="recipe__info-data recipe__info-data--minutes">${i.data.recipe.cooking_time}</span>
            <span class="recipe__info-text">minutes</span>
          </div>
          <div class="recipe__info">
            <svg class="recipe__info-icon">
              <use href="${/*@__PURE__*/e(r)}#icon-users"></use>
            </svg>
            <span class="recipe__info-data recipe__info-data--people">${i.data.recipe.servings}</span>
            <span class="recipe__info-text">servings</span>

            <div class="recipe__info-buttons">
              <button class="btn--tiny btn--increase-servings">
                <svg>
                  <use href="${/*@__PURE__*/e(r)}#icon-minus-circle"></use>
                </svg>
              </button>
              <button class="btn--tiny btn--increase-servings">
                <svg>
                  <use href="${/*@__PURE__*/e(r)}#icon-plus-circle"></use>
                </svg>
              </button>
            </div>
          </div>

          <div class="recipe__user-generated">
            <svg>
              <use href="${/*@__PURE__*/e(r)}#icon-user"></use>
            </svg>
          </div>
          <button class="btn--round">
            <svg class="">
              <use href="${/*@__PURE__*/e(r)}#icon-bookmark-fill"></use>
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
              <use href="${/*@__PURE__*/e(r)}#icon-arrow-right"></use>
            </svg>
          </a>
        </div>`;s.insertAdjacentHTML("afterbegin",n);let t=document.querySelector(".recipe__ingredient-list");i.data.recipe.ingredients.forEach(i=>{let s=`<li class="recipe__ingredient">
              <svg class="recipe__icon">
                <use href="${/*@__PURE__*/e(r)}#icon-check"></use>
              </svg>
              <div class="recipe__quantity">${null===i.quantity?"":i.quantity}</div>
              <div class="recipe__description">
                <span class="recipe__unit">${null===i.unit?"":i.unit}</span>
                ${i.description}
              </div>
            </li>`;t.insertAdjacentHTML("afterbegin",s)})}(n,s)})})}catch(e){console.error(e)}finally{p(s)}}t.addEventListener("click",function(e){e.preventDefault(),l(n.value,a).then(e=>{i=e.data.recipes,o(e.data.recipes,c)}).catch(e=>console.log(e))}),window.addEventListener("hashchange",d)});
//# sourceMappingURL=index.48d6e2aa.js.map
