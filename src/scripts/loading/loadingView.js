const renderLoading = document.querySelector(".hero__loading");

export function hideRenderLoading() {
  renderLoading.classList.add('hero__loading--hidden');
};

export function showRenderLoading() {
  renderLoading.classList.remove('hero__loading--hidden');
};
