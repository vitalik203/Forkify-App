import * as state from './state';

export async function renderListFromAPI() {
  try {
    const inputValue = state.inputData.value;
    const url = `https://forkify-api.herokuapp.com/api/v2/recipes?search=${inputValue}&key=${state.API_key}`;
    const request = (await fetch(url)).json();
    return request;
  } catch (err) {
    console.error(err);
  } finally {
  }
}

export async function renderRecipesFromAPI(hash) {
  const request = await fetch(
    `https://forkify-api.herokuapp.com/api/v2/recipes/${hash}?key=${state.API_key}`
  );
  return request.json();
}
