import * as editView from './editView.js';
import * as formView from '../form/formView.js';
import * as model from '../todos/model.js';
import * as taskView from "../task/taskView.js";
import * as searchView from "../search/searchView.js";

function renderSearchResults() {
  const inputValue = searchView.searchInput.value.toLowerCase();
  const searchTodos = model.searchTasks(inputValue);

  if (inputValue !== "") {
    formView.renderList(searchTodos);
    return true;
  };
};

export function editHandler(event) {
  editView.switchTodoItemToEditMode(event);
};

function saveAndUpdateTaskTitle(taskId, newTitle) {
  if (!taskId || newTitle === null) {
    return;
  };
  model.updateTaskProperty({ itemId: Number(taskId), property: "title", title: newTitle });

  const renderSearch = renderSearchResults();
  if (renderSearch) {
    return;
  };

  formView.renderList(model.getFilteredTasks());
};

export function saveEditedTaskText(event) {
  const taskId = taskView.getTaskIdFromClickEvent(event);
  const newTitle = editView.handleEditEvent({ event });

  saveAndUpdateTaskTitle(taskId, newTitle);
};

export function cancelEditTask(event) {
  editView.cancelEditMode({ event });
};

export function handleEditKeyDown(event) {
  const keyCode = event.keyCode;
  const ESC = 27;
  const ENTER = 13;

  if (keyCode === ESC) {
    editView.cancelEditMode({ event });
  };

  if (keyCode === ENTER) {
    event.preventDefault();

    const taskId = taskView.getTaskIdFromClickEvent(event);
    const newTitle = editView.handleEditEvent({ event });

    saveAndUpdateTaskTitle(taskId, newTitle);
  };
};

export function toggleTaskCompletion(event) {
  const taskId = taskView.getTaskIdFromClickEvent(event);
  if (!taskId) {
    return;
  };

  model.updateTaskProperty({ itemId: Number(taskId), property: "isComlete" });

  const renderSearch = renderSearchResults();
  if (renderSearch) {
    return;
  };
  /// нужен совет как лучше сделать, оба варианта мне нравятся и оба работают

  // searchView.searchInput.value = "";

  formView.renderList(model.getFilteredTasks());
};
