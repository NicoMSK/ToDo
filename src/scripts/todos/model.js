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
    item.id === itemId
  );
  if (task) {
    task.isComplete = !task.isComplete;
    console.log("Статус задачи обновлён:", task);
  } else {
    console.error("Задача не найдена");
  };
};

export { todos, addTodo, deleteTodo, statusChange };

