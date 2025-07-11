const bodyTheme = document.querySelector('.page__body');
export const themeButton = document.querySelector('.nav__theme-btn');

export function applySavedTheme(currentTheme) {
  if (currentTheme && currentTheme === "dark") {
    bodyTheme.classList.add("dark__theme");
  };
};

export function switchTheme(themeValue) {
  if (themeValue === "dark") {
    bodyTheme.classList.add("dark__theme");
  } else {
    bodyTheme.classList.remove("dark__theme");
  };
};

