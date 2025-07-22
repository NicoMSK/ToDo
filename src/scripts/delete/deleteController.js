import * as deleteView from './deleteView.js';
import * as model from '../todos/model.js';
import * as formView from '../form/formView.js';
import * as taskView from "../task/taskView.js";
import * as searchController from "../search/searchController.js";

export async function deleteTask(event) {
  const taskId = taskView.getTaskIdFromClickEvent(event);
  if (!taskId) return;

  await model.deleteTask(taskId);

  searchController.clearSearch();
  formView.renderList(model.getTasks());

  deleteView.startTimerButton();
};

deleteView.cancelTaskDeletionButton.addEventListener('click', async () => {
  await model.returnLastDeletedTask();

  formView.renderList(model.getTasks());
  deleteView.showCancelTaskDeleteButton();
});

