import * as LocalStorage from "../utils/localStorage.js";
import { getTodostSourceClient } from "./dataSource";

const FILTER = {
  all: "all",
  complete: "complete",
  incomplete: "incomplete",
};

const FILTER_LABELS = {
  all: "Все задачи",
  complete: "Завершены",
  incomplete: "В работе",
};

const todosSourceClient = getTodostSourceClient();

let serverTodos = [];

async function loadAllTasks() {
  serverTodos = await todosSourceClient.getAll();
}

async function addTodo(newTaskTitle) {
  const newTask = {
    isComplete: false,
    title: newTaskTitle,
  };

  const serverTask = await todosSourceClient.create(newTask);
  serverTodos.push(serverTask);
}

function getTaskIndex(itemId) {
  return serverTodos.findIndex(
    (todoInArray) => todoInArray.id === itemId
  );
}

let lastDeletedTask = null;
let lastDeletedTaskIndex = -1;
let deleteTimeoutId = null;

function stopTimer() {
  if (deleteTimeoutId) {
    clearTimeout(deleteTimeoutId);
    deleteTimeoutId = null;
  }
}

function deleteTaskByTimer(promise) {
  return setTimeout(async () => {
    await promise();
  }, 5000);
}

async function deleteTask(itemId) {
  lastDeletedTaskIndex = getTaskIndex(itemId);

  if (lastDeletedTaskIndex === -1) return;

  lastDeletedTask = serverTodos.splice(lastDeletedTaskIndex, 1)[0];

  deleteTimeoutId = deleteTaskByTimer(() =>
    todosSourceClient.delete(String(itemId))
  );
}

async function returnLastDeletedTask() {
  if (lastDeletedTask && lastDeletedTaskIndex !== -1) {
    stopTimer();
    serverTodos.splice(lastDeletedTaskIndex, 0, lastDeletedTask);
  }
}

function isEmptyTodos() {
  return serverTodos.length === 0;
}

function getTaskById(itemId) {
  return serverTodos.find((item) => item.id === itemId);
}

async function updateTaskProperty({ itemId, property, title }) {
  const task = getTaskById(itemId);

  switch (property) {
    case "isComlete":
      task.isComplete = !task.isComplete;
      break;
    case "title":
      task.title = title;
      break;
  }

  await todosSourceClient.edit(String(itemId), task);
}

let currentFilterValue =
  LocalStorage.filterLocalStorageService.getLocalStorage();

function setCurrentFilterValue(value) {
  if (value in FILTER) {
    currentFilterValue = value;

    LocalStorage.filterLocalStorageService.setLocalStorage(currentFilterValue);
  }
}

function getCurrentFilterValue() {
  return currentFilterValue;
}

function doesTaskMatchFilter(task) {
  switch (currentFilterValue) {
    case FILTER.complete:
      return task.isComplete === true;
    case FILTER.incomplete:
      return task.isComplete === false;
    case FILTER.all:
      return true;
    default:
      throw new Error("Получен фильтр, которого нет");
  }
}

let currentSearchText = "";

function setCurrentSearchText(searchText) {
  currentSearchText = searchText.toLowerCase().trim();
}

function filterTaskByTitle(task) {
  return task.title.toLocaleLowerCase().includes(currentSearchText);
}

function isStringNotEmpty() {
  return currentSearchText.trim() !== "";
}

function getTasks() {
  return serverTodos.filter((task) => {
    const isComleteFilterResult = doesTaskMatchFilter(task);
    let titleFilterResult = true;

    if (isStringNotEmpty()) {
      titleFilterResult = filterTaskByTitle(task);
    }

    return titleFilterResult && isComleteFilterResult;
  });
}

function validateTitle(title) {
  return title.trim() !== "";
}

export {
  isEmptyTodos,
  loadAllTasks,
  addTodo,
  deleteTask,
  getTaskById,
  doesTaskMatchFilter,
  setCurrentFilterValue,
  getCurrentFilterValue,
  currentFilterValue,
  FILTER,
  FILTER_LABELS,
  updateTaskProperty,
  validateTitle,
  returnLastDeletedTask,
  setCurrentSearchText,
  getTasks,
};
