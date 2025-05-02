import * as viewTheme from './viewTheme.js';

export function switchingThemes() {
  viewTheme.bodyTheme.classList.toggle('dark__theme');
}
