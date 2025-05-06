import * as modelDelete from './modelDelete.js';
import * as viewDelete from './viewDelete.js';

viewDelete.todoList.addEventListener('click', (event) => {
  modelDelete.deleteTask(event, 'delete', '.hero__item', viewDelete.cancelTaskDeletionButton, 'hero__btn-cancel-del--hidden');

  modelDelete.startTimerButton(viewDelete.countButton, viewDelete.cancelTaskDeletionButton, 'hero__btn-cancel-del--hidden');

  modelDelete.addsPictureWhenNoTasks(viewDelete.heroItems, viewDelete.heroImg, 'hero__img-wrapper--hidden');
});

viewDelete.cancelTaskDeletionButton.addEventListener('click', () => {
  modelDelete.returnsDeletedTask(viewDelete.cancelTaskDeletionButton, 'hero__btn-cancel-del--hidden');
});
