document.addEventListener("DOMContentLoaded", app);
function app() {
    const recipeContainer = document.querySelector(".recipe");
    const inputData = document.querySelector(".search__field");
    const searchBtn = document.querySelector(".search__btn");
    const searchBox = document.querySelector(".search");
    const logo = document.querySelector(".header__logo");
    console.log(logo);
    // const timeout = function (s) {
    //   return new Promise(function (_, reject) {
    //     setTimeout(function () {
    //       reject(new Error(`Request took too long! Timeout after ${s} second`));
    //     }, s * 1000);
    //   });
    // };
    const requestFromAPI = async function(name, api) {
        renderSpinner(recipeContainer);
        const asnwer = await fetch(`https://forkify-api.herokuapp.com/api/v2/recipes?search=${name}&key=${api}`);
        return asnwer.json();
    };
    searchBtn.addEventListener("click", function(e) {
        e.preventDefault();
        let dataAnswer;
        const inputValue = inputData.value;
        requestFromAPI(inputValue, "5bcaa7a8-fde0-4c7f-9a2b-64a03594b754").then((data)=>dataAnswer = data.data.recipes);
    // renderSpinner(recipeContainer);
    });
    function renderSpinner(container) {
        const html = `
    <div class="spinner">
      <svg>
        <use href="${icons}.svg#icon-loader"></use>
      </svg>
    </div>`;
        container.innerHTML = "";
        container.insertAdjacentHTML("afterbegin", html);
    }
    console.log(5);
}

