import * as deleteView from './deleteView.js';
import * as model from '../todos/model.js';
import * as formView from '../form/formView.js';

deleteView.addsPictureWhenNoTasks();

deleteView.todoList.addEventListener('click', (event) => {
  const taskId = deleteView.getClickedTaskId(event);
  if (!taskId) return;

  model.deleteTodo(Number(taskId));

  formView.renderList(model.todos);
  deleteView.deleteTask(event);
  deleteView.addsPictureWhenNoTasks();
});

deleteView.cancelTaskDeletionButton.addEventListener('click', () => {
  deleteView.returnsDeletedTask();
});


