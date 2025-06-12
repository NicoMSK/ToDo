export const bodyTheme = document.querySelector('.page__body');
export const themeButton = document.querySelector('.nav__theme-btn');

export function switchTheme() {
  bodyTheme.classList.toggle('dark__theme');
};
