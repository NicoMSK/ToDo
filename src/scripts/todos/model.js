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
    id: 124,
    isComplete: false,
    title: "Купить "
  },
  {
    id: 125,
    isComplete: false,
    title: " хлеба"
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

function getIndexTask(itemId) {
  return todos.findIndex((todoInArray) => todoInArray.id === itemId);
};

let lastDeletedTask;
let lastDeletedTaskIndex

function deleteTodo(itemId) {
  lastDeletedTaskIndex = getIndexTask(itemId);

  if (lastDeletedTaskIndex !== -1) {
    lastDeletedTask = todos.splice(lastDeletedTaskIndex, 1)[0];
  };

  return { lastDeletedTask, lastDeletedTaskIndex }
};

function returnDeletedTask() {
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

function getFilteredTasks() {
  switch (currentFilterValue) {
    case FILTER.complete:
      return todos.filter((task) => task.isComplete === true);
    case FILTER.incomplete:
      return todos.filter((task) => task.isComplete === false);
    case FILTER.all:
      return todos;
    default:
      throw new Error("Получен фильтр, которого нет")
  };
};

function validateTitle(title) {
  return title.trim() !== "";
};

export { todos, addTodo, deleteTodo, getFilteredTasks, setCurrentFilterValue, getCurrentFilterValue, FILTER, FILTER_LABELS, updateTaskProperty, validateTitle, returnDeletedTask };


