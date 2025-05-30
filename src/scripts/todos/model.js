const TODO_EXAMPLE = {
  id: 123,
  isComplete: false,
  title: "Купить хлеба"
}

const todos = [{
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
}];

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

function deleteTodo(itemId) {
  const indexOfTodoToDelete = todos.findIndex((todoInArray) => todoInArray.id === itemId);

  if (indexOfTodoToDelete !== -1) {
    todos.splice(indexOfTodoToDelete, 1);
  };
};

function getTaskById(itemId) {
  const task = todos.find((item) => item.id === itemId);

  return task
};

function toggleTaskStatus(itemId) {
  const task = getTaskById(itemId);

  if (task) {
    task.isComplete = !task.isComplete;
  };
};

function updateTitle(itemId, newTitle) {
  const task = getTaskById(itemId);

  if (task) {
    task.title = newTitle;
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



export { todos, addTodo, deleteTodo, getTaskById, getFilteredTasks, setCurrentFilterValue, getCurrentFilterValue, FILTER, FILTER_LABELS, toggleTaskStatus, updateTitle };

