import * as statusView from "./statusView.js";
import * as model from "../todos/model.js";
import * as formView from "../form/formView.js";
import * as deleteView from '../delete/deleteView.js';

statusView.createCustomSelectList(model.FILTER, model.FILTER_LABELS);

statusView.setValueForFilterSelect(model.FILTER.all);

statusView.buttonSelect.addEventListener('click', () => {
  statusView.toggleTaskStatusList();
});

statusView.listSelect.addEventListener('click', (event) => {
  const status = statusView.getFilterValueFromClickEvent(event);
  model.setCurrentFilterValue(status);

  statusView.setValueForFilterSelect(status);

  formView.renderList(model.getFilteredTasks());

  deleteView.addsPictureWhenNoTasks();
  statusView.toggleTaskStatusList();
});

statusView.listHero.addEventListener('change', (event) => {
  const taskId = statusView.getTaskId(event);
  if (!taskId) {
    return;
  };

  model.toggleTaskStatus(Number(taskId));
  formView.renderList(model.getFilteredTasks());
});
