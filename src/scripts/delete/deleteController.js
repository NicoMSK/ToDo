import * as deleteView from './deleteView.js';
import * as model from '../todos/model.js';
import * as formView from '../form/formView.js';
import * as taskView from "../task/taskView.js";

export function deleteTask(event) {
  const taskId = taskView.getTaskIdFromClickEvent(event);
  if (!taskId) return;

  model.deleteTodo(Number(taskId));

  const currentValueFilter = model.getCurrentFilterValue();
  formView.renderList(model.getFilteredTasks(currentValueFilter));

  deleteView.startTimerButton();
};

deleteView.cancelTaskDeletionButton.addEventListener('click', () => {
  model.returnDeletedTask();

  deleteView.showCancelTaskDeleteButton();

  formView.renderList(model.getFilteredTasks());
});

