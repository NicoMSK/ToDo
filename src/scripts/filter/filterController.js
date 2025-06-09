import * as filterView from "./filterView.js";
import * as model from "../todos/model.js";
import * as formView from "../form/formView.js";
import * as deleteView from '../delete/deleteView.js';

filterView.createCustomSelectList(model.FILTER, model.FILTER_LABELS);

filterView.setValueForFilterSelect(model.FILTER.all);

filterView.buttonSelect.addEventListener('click', () => {
  filterView.toggleTaskFilterList();
});

filterView.listSelect.addEventListener('click', (event) => {
  const datasetValue = filterView.getFilterValueFromClickEvent(event);
  const filterValue = model.FILTER[datasetValue];

  if (!filterValue) {
    throw new Error(`Неизвестный фильтр: ${datasetValue}`);
  };

  model.setCurrentFilterValue(filterValue);

  filterView.setValueForFilterSelect(filterValue);

  formView.renderList(model.getFilteredTasks());

  deleteView.addsPictureWhenNoTasks();

  filterView.toggleTaskFilterList();
});

export function toggleTaskCompletion(event) {
  const taskId = filterView.getTaskId(event);
  if (!taskId) {
    return;
  };

  model.updateTaskProperty(Number(taskId), "isComlete");

  formView.renderList(model.getFilteredTasks());

  deleteView.addsPictureWhenNoTasks();
};
