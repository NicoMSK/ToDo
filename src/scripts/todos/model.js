import * as LocalStorage from '../utils/localStorage.js';

const FILTER = {
  all: "all",
  complete: "complete",
  incomplete: "incomplete"
};

const FILTER_LABELS = {
  all: "Все задачи",
  complete: "Завершены",
  incomplete: "В работе"
};

const todos = LocalStorage.todosLocalStorageService.getLocalStorage();

function addTodo(newTaskTitle) {
  todos.push({
    id: new Date().getTime(),
    isComplete: false,
    title: newTaskTitle
  });

  LocalStorage.todosLocalStorageService.setLocalStorage(todos);
};

function getTaskIndex(itemId) {
  return todos.findIndex((todoInArray) => todoInArray.id === itemId);
};

let lastDeletedTask = null;
let lastDeletedTaskIndex = -1;

function deleteTodo(itemId) {
  lastDeletedTaskIndex = getTaskIndex(itemId);

  if (lastDeletedTaskIndex !== -1) {
    lastDeletedTask = todos.splice(lastDeletedTaskIndex, 1)[0];
    LocalStorage.todosLocalStorageService.setLocalStorage(todos);
  };
};

function returnLastDeletedTask() {
  if (lastDeletedTask && lastDeletedTaskIndex !== -1) {
    todos.splice(lastDeletedTaskIndex, 0, lastDeletedTask);
    LocalStorage.todosLocalStorageService.setLocalStorage(todos);
  };
};

function getTaskById(itemId) {
  const task = todos.find((item) => item.id === itemId);

  return task
};

function updateTaskProperty({ itemId, property, title }) {
  const task = getTaskById(itemId);

  switch (property) {
    case "isComlete":
      task.isComplete = !task.isComplete;
      break;
    case "title":
      task.title = title;
      break;
  };

  LocalStorage.todosLocalStorageService.setLocalStorage(todos);
};

export let currentFilterValue = LocalStorage.filterLocalStorageService.getLocalStorage();

function setCurrentFilterValue(value) {
  if (value in FILTER) {
    currentFilterValue = value;

    LocalStorage.filterLocalStorageService.setLocalStorage(currentFilterValue);
  };
};

function getCurrentFilterValue() {
  return currentFilterValue;
};

function doesTaskMatchFilter(task) {
  switch (currentFilterValue) {
    case FILTER.complete:
      return task.isComplete === true;
    case FILTER.incomplete:
      return task.isComplete === false;
    case FILTER.all:
      return true;
    default:
      throw new Error("Получен фильтр, которого нет")
  };
};

let currentSearchText = "";

function setCurrentSearchText(searchText) {
  currentSearchText = searchText.toLowerCase().trim();
};

function filterTaskByTitle(task) {
  return task.title.toLocaleLowerCase().includes(currentSearchText);
};

function isStringNotEmpty() {
  return currentSearchText.trim() !== "";
};

function getTasks() {
  return todos.filter(task => {
    const isComleteFilterResult = doesTaskMatchFilter(task);
    let titleFilterResult = true;

    if (isStringNotEmpty()) {
      titleFilterResult = filterTaskByTitle(task)
    };

    return titleFilterResult && isComleteFilterResult;
  }
  );
};

function validateTitle(title) {
  return title.trim() !== "";
};

export { todos, addTodo, deleteTodo, getTaskById, doesTaskMatchFilter, setCurrentFilterValue, getCurrentFilterValue, FILTER, FILTER_LABELS, updateTaskProperty, validateTitle, returnLastDeletedTask, setCurrentSearchText, getTasks };


