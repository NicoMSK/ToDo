import * as LocalStorage from '../utils/localStorage.js';
import * as api from '../api/todosApi.js';

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

let serverTodos = [];

async function getTasksFromServer() {
  serverTodos = await api.getTodos();
};

async function addTodo(newTaskTitle) {
  const newTask = {
    isComplete: false,
    title: newTaskTitle
  };

  const taskServer = await api.createNewTodo(newTask);
  serverTodos.push(taskServer);
};

function getTaskIndex(itemId) {
  return serverTodos.findIndex((todoInArray) => todoInArray.id === itemId);
};

let lastDeletedTask = null;
let lastDeletedTaskIndex = -1;

async function deleteTask(itemId) {
  lastDeletedTaskIndex = getTaskIndex(itemId);

  if (lastDeletedTaskIndex !== -1) {
    lastDeletedTask = serverTodos[lastDeletedTaskIndex];
    await api.deleteTodo(String(itemId));
    serverTodos.splice(lastDeletedTaskIndex, 1);
  };
};

async function returnLastDeletedTask() {
  if (lastDeletedTask && lastDeletedTaskIndex !== -1) {
    await api.createNewTodo(lastDeletedTask);
    serverTodos.push(lastDeletedTask);
  };
};

function getTaskById(itemId) {
  const task = serverTodos.find((item) => item.id === itemId);

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

  api.editTodo(String(itemId), task)
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
  return serverTodos.filter(task => {
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

export { serverTodos, getTasksFromServer, addTodo, deleteTask, getTaskById, doesTaskMatchFilter, setCurrentFilterValue, getCurrentFilterValue, FILTER, FILTER_LABELS, updateTaskProperty, validateTitle, returnLastDeletedTask, setCurrentSearchText, getTasks };


