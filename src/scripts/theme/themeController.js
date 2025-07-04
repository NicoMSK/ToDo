import * as themeView from './themeView.js';

themeView.applySavedTheme();

themeView.themeButton.addEventListener('click', () => {
  themeView.switchTheme();
});

