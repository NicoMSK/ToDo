import * as themeView from './themeView.js';
import * as themeModel from '../todos/themeModel.js';

themeView.applySavedTheme(themeModel.currentTheme);

themeView.themeButton.addEventListener('click', () => {
  const themeValue = themeModel.toggleTheme();

  themeView.switchTheme(themeValue);
});
