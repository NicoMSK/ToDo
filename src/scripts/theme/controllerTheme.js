import * as viewTheme from './viewTheme.js';
import * as modelTheme from './modelTheme.js';

viewTheme.themeButton.addEventListener('click', () => {
  modelTheme.switchingThemes(viewTheme.bodyTheme, 'dark__theme');
});
