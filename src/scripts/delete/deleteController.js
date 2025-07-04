import * as deleteView from './deleteView.js';
import * as model from '../todos/model.js';
import * as formView from '../form/formView.js';
import * as taskView from "../task/taskView.js";
import * as searchController from "../search/searchController.js";

export function deleteTask(event) {
  const taskId = taskView.getTaskIdFromClickEvent(event);
  if (!taskId) return;

  model.deleteTodo(Number(taskId));

  searchController.clearSearch();
  formView.renderList(model.getTasks());

  deleteView.startTimerButton();
};

deleteView.cancelTaskDeletionButton.addEventListener('click', () => {
  model.returnLastDeletedTask();

  deleteView.showCancelTaskDeleteButton();

  formView.renderList(model.getTasks());
});

