import * as LocalStorage from '../utils/localStorage.js';

export let currentTheme = LocalStorage.themeLocalStorageService.getLocalStorage();

export function toggleTheme() {
  if (currentTheme === null || currentTheme.trim().toLowerCase() === "dark") {
    currentTheme = "light";
  } else {
    currentTheme = "dark";
  };

  LocalStorage.themeLocalStorageService.setLocalStorage(currentTheme);

  return currentTheme;
};
