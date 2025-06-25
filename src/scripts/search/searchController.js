import * as searchView from './searchView.js';
import * as model from '../todos/model.js';
import * as formView from '../form/formView.js';
import * as filterView from '../filter/filterView.js';
import debounce from 'lodash.debounce';

const DEBOUNCE_INTERVAL_MS = 300;

function handleSearchTasks() {
  const inputValue = searchView.searchInput.value.toLowerCase().trim();
  const searchTodos = model.searchTasks(inputValue);

  if (inputValue === "") {
    formView.renderList(model.getFilteredTasks());
  } else {
    model.setCurrentFilterValue(model.FILTER.all);
    filterView.setValueForFilterSelect(model.getCurrentFilterValue());
    formView.renderList(searchTodos);
  };
};

searchView.searchInput.addEventListener("input",
  debounce(handleSearchTasks, DEBOUNCE_INTERVAL_MS));
