import * as deleteView from './deleteView.js';
import * as model from '../todos/model.js';
import * as formView from '../form/formView.js';
import * as taskView from "../task/taskView.js";
import * as searchController from "../search/searchController.js";
import * as renderLoading from "../loading/loadingView.js";

export async function deleteTask(event) {
  const taskId = taskView.getTaskIdFromClickEvent(event);
  if (!taskId) return;

  searchController.clearSearch();

  await renderLoading.loadWithLoader(model.deleteTask(taskId));
  deleteView.startTimerButton();

  formView.renderList(model.getTasks());
};

deleteView.cancelTaskDeletionButton.addEventListener('click', async () => {
  deleteView.showCancelTaskDeleteButton();

  await renderLoading.loadWithLoader(model.returnLastDeletedTask());
  formView.renderList(model.getTasks());
});

