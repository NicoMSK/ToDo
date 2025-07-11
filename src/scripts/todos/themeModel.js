import * as LocalStorage from '../utils/localStorage.js';

const DARK = "dark";
const LIGHT = "light";

export let currentTheme = LocalStorage.themeLocalStorageService.getLocalStorage();

export function toggleTheme() {
  if (currentTheme === null || currentTheme === DARK) {
    currentTheme = LIGHT;
  } else {
    currentTheme = DARK;
  };

  LocalStorage.themeLocalStorageService.setLocalStorage(currentTheme);

  return currentTheme;
};
