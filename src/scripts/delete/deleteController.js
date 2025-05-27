import * as deleteView from './deleteView.js';
import * as model from '../todos/model.js';
import * as formView from '../form/formView.js';

deleteView.addsPictureWhenNoTasks();

deleteView.todoList.addEventListener('click', (event) => {
  const taskId = deleteView.getClickedTaskId(event);
  if (!taskId) return;

  model.deleteTodo(Number(taskId));

  const currentStatus = model.getCurrentStatus();
  formView.renderList(model.filterTasks(currentStatus));
  deleteView.deleteTask(event);
  deleteView.addsPictureWhenNoTasks();
});

deleteView.cancelTaskDeletionButton.addEventListener('click', () => {
  deleteView.returnsDeletedTask();
});


