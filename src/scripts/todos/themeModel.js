import * as LocalStorage from '../utils/localStorage.js';

export let currentTheme = LocalStorage.themeLocalStorageService.getLocalStorage();

export function setCurrentThemeValue(value) {
  currentTheme = value;

  LocalStorage.themeLocalStorageService.setLocalStorage(currentTheme);
};

