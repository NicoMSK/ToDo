const TODO_EXAMPLE = {
  id: 123,
  isComplete: false,
  title: "Купить хлеба"
}

const todos = [];

const FILTER = {
  all: "all",
  complete: "complete",
  incomplete: "incomplete"
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

function changeStatus(itemId) {
  const task = todos.find((item) =>
    item.id === itemId);

  if (task) {
    task.isComplete = !task.isComplete;
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

export { todos, addTodo, deleteTodo, changeStatus, getFilteredTasks, setCurrentFilterValue, getCurrentFilterValue, FILTER };

