const TODO_EXAMPLE = {
  id: 123,
  isComplete: false,
  title: "Купить хлеба"
}

const todos = [];

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

function statusChange(itemId) {
  const task = todos.find((item) =>
    item.id === itemId);

  if (task) {
    task.isComplete = !task.isComplete;
  };
};

let currentStatus = "all";

function setCurrentStatus(status) {
  currentStatus = status;
};

function getCurrentStatus() {
  return currentStatus;
}

function filterTasks(status = currentStatus) {
  switch (status) {
    case "complete":
      return todos.filter((task) => task.isComplete === true);
    case "incomplete":
      return todos.filter((task) => task.isComplete === false);
    case "all":
    default:
      return todos;
  };
};

export { todos, addTodo, deleteTodo, statusChange, filterTasks, setCurrentStatus, getCurrentStatus };

