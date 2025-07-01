const TODO_EXAMPLE = {
  id: 123,
  isComplete: false,
  title: "Купить молокА"
}

const todos = [
  {
    id: 123,
    isComplete: false,
    title: "Купить хлеба"
  },
  {
    id: 1233,
    isComplete: false,
    title: "Машина"
  },
  {
    id: 124,
    isComplete: false,
    title: "Купить "
  },
  {
    id: 12422,
    isComplete: false,
    title: "Молоко "
  },
  {
    id: 125,
    isComplete: false,
    title: "хлеба"
  }
];

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

function addTodo(newTaskTitle) {
  todos.push({
    id: new Date().getTime(),
    isComplete: false,
    title: newTaskTitle
  });
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
  };
};

function returnLastDeletedTask() {
  if (lastDeletedTask && lastDeletedTaskIndex !== -1) {
    todos.splice(lastDeletedTaskIndex, 0, lastDeletedTask);
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
};

let currentFilterValue = FILTER.all;

function setCurrentFilterValue(value) {
  if (value in FILTER) {
    currentFilterValue = value;
  };
};

function getCurrentFilterValue() {
  return currentFilterValue;
};

function getFilteredTasks(task) {
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

let normalizedSearchText = null;

export function setCurrentSearchText(searchText) {
  normalizedSearchText = searchText.toLowerCase().trim();
};

/// надо обсудить более точно, как это работает, без функции getCurrentSearchText, редактирование работало некоректно

export function getCurrentSearchText() {
  return normalizedSearchText;
};

function searchTextTask(item) {
  return item.title.toLocaleLowerCase().includes(normalizedSearchText);
};

function isStringNotEmpty() {
  return typeof normalizedSearchText === "string" && normalizedSearchText.trim() !== "";
};

export function getTasks() {
  return todos.filter(task => {
    const matchesStatus = getFilteredTasks(task);
    const matchesText = isStringNotEmpty() ? searchTextTask(task) : true;

    return matchesText && matchesStatus;
  }
  );
};

function validateTitle(title) {
  return title.trim() !== "";
};

export { todos, addTodo, deleteTodo, getTaskById, getFilteredTasks, setCurrentFilterValue, getCurrentFilterValue, FILTER, FILTER_LABELS, updateTaskProperty, validateTitle, returnLastDeletedTask };


