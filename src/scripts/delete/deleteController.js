import * as deleteView from './deleteView.js';
import * as model from '../todos/model.js';
import * as formView from '../form/formView.js';
import * as taskView from "../task/taskView.js";

export function deleteTask(event) {
  const taskId = taskView.getTaskIdFromClickEvent(event);
  if (!taskId) return;

  model.deleteTodo(Number(taskId));

  const currentValue = model.getCurrentFilterValue();

  formView.renderList(model.getFilteredTasks(currentValue));

  deleteView.startTimerButton();
};


deleteView.cancelTaskDeletionButton.addEventListener('click', () => {
  deleteView.showCancelTaskDeleteButton();
});

