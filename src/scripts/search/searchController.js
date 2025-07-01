import * as searchView from './searchView.js';
import * as model from '../todos/model.js';
import * as formView from '../form/formView.js';
import * as filterView from '../filter/filterView.js';
import debounce from 'lodash.debounce';

const DEBOUNCE_INTERVAL_MS = 300;

export function clearSearch() {
  searchView.searchInput.value = "";
  model.setCurrentSearchText("");
};

function handleSearchTasks() {
  const inputValue = searchView.searchInput.value;
  model.setCurrentSearchText(inputValue)

  model.setCurrentFilterValue(model.FILTER.all);
  filterView.setValueForFilterSelect(model.getCurrentFilterValue());

  formView.renderList(model.getTasks());
};

searchView.searchInput.addEventListener("input",
  debounce(handleSearchTasks, DEBOUNCE_INTERVAL_MS));

