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

function deleteTodo(itemId, array) {
  const indexOfTodoToDelete = array.findIndex((todoInArray) => todoInArray.id === itemId);
  if (indexOfTodoToDelete !== -1) {
    array.splice(indexOfTodoToDelete, 1);
  };
};

export { todos, addTodo, deleteTodo };

