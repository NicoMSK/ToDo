const bodyTheme = document.querySelector('.page__body');
export const themeButton = document.querySelector('.nav__theme-btn');

export function applySavedTheme(currentTheme) {
  if (currentTheme && currentTheme.toLowerCase() === "dark") {
    bodyTheme.classList.add("dark__theme");
  };
};

export function switchTheme() {
  let theme = "light";
  bodyTheme.classList.toggle("dark__theme");

  const isThereClassOnBody = bodyTheme.classList.contains("dark__theme");

  if (isThereClassOnBody) {
    theme = "dark";
  };

  return theme;
};

