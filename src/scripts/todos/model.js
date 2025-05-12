const TODO_EXAMPLE = {
  id: 123,
  isComplete: false,
  title: "Купить хлеба"
}

const todos = [];

function addTodo(newTaskTitle) {
  todos.push({ id: new Date(), isComplete: false, title: newTaskTitle });
};

export { todos, addTodo }
