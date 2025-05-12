import * as deleteView from './deleteView.js';

deleteView.addsPictureWhenNoTasks();

deleteView.todoList.addEventListener('click', (event) => {
  deleteView.deleteTask(event, 'delete', '.hero__item', deleteView.cancelTaskDeletionButton, 'hero__btn-cancel-del--hidden');

  deleteView.addsPictureWhenNoTasks();
});

deleteView.cancelTaskDeletionButton.addEventListener('click', () => {
  deleteView.returnsDeletedTask();
});
