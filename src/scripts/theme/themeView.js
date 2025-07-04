import * as LocalStorage from '../utils/localStorage.js';

const bodyTheme = document.querySelector('.page__body');
export const themeButton = document.querySelector('.nav__theme-btn');

export function applySavedTheme() {
  let currentTheme = LocalStorage.themeLocalStorageService.getLocalStorage();

  if (currentTheme && currentTheme.toLowerCase() === "dark") {
    bodyTheme.classList.add("dark__theme");
  };
};

export function switchTheme() {
  bodyTheme.classList.toggle("dark__theme");

  let theme = "light";
  const isThereClassOnBody = bodyTheme.classList.contains("dark__theme");

  if (isThereClassOnBody) {
    theme = "dark";
  }

  LocalStorage.themeLocalStorageService.setLocalStorage(theme);
};

