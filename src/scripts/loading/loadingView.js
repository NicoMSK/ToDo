const renderLoading = document.querySelector(".hero__loading");
const listHero = document.querySelector(".hero__list");

function hideRenderLoading() {
  renderLoading.classList.add('hero__loading--hidden');
  listHero.classList.remove('hero__list--hidden');
};

function showRenderLoading() {
  renderLoading.classList.remove('hero__loading--hidden');
  listHero.classList.add('hero__list--hidden');
};

export async function loadWithLoader(promise) {
  showRenderLoading();
  const result = await promise;
  hideRenderLoading();

  return result;
};
