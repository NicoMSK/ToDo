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

function changeStatus(itemId) {
  const task = todos.find((item) =>
    item.id === itemId);

  if (task) {
    task.isComplete = !task.isComplete;
  };
};

let currentStatusFilter = "all";

function setCurrentStatus(status) {
  currentStatusFilter = status;
};

function getCurrentStatus() {
  return currentStatusFilter;
}

function filterTasksByStatus(status = currentStatusFilter) {
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

export { todos, addTodo, deleteTodo, changeStatus, filterTasksByStatus as filterTasksByStatus, setCurrentStatus, getCurrentStatus };

