import * as filterView from "./filterView.js";
import * as model from "../todos/model.js";
import * as formView from "../form/formView.js";

filterView.createCustomSelectList(model.FILTER, model.FILTER_LABELS);

function setsCurrentFilterValue() {
  if (model.currentFilterValue === null) {
    filterView.setValueForFilterSelect(model.FILTER.all);
  } else {
    filterView.setValueForFilterSelect(model.currentFilterValue);
  };
};

setsCurrentFilterValue();

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

  formView.renderList(model.getTasks());

  filterView.toggleTaskFilterList();
});
