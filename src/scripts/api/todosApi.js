const API_HOST = "http://localhost:3000";

const todo = {
  title: "car 5555",
  isComplete: false
}

export async function getTodos() {
  let result = [];

  try {
    const response = await fetch(`${API_HOST}/todos`);
    if (response.ok) {
      result = await response.json();
    }
  } catch (error) {
    console.error(error)
  };

  return result;
};

export async function createNewTodo(newTodo) {
  try {
    const response = await fetch(`${API_HOST}/todos`, {
      method: "POST",
      body: JSON.stringify(newTodo)
    });
    if (!response.ok) {
      console.warn("ошибка при создании нового TODO")
    };

    const createdTodo = await response.json();
    return createdTodo;

  } catch (error) {
    console.error(error);
  }
};

export async function deleteTodo(idTodo) {
  try {
    const response = await fetch(`${API_HOST}/todos/${idTodo}`, {
      method: "DELETE"
    });
    if (!response.ok) {
      console.warn("ошибка при удалении TODO")
    }
  } catch (error) {
    console.error(error);
  }
};

export async function editTodo(idTodo, editTodo) {
  try {
    const response = await fetch(`${API_HOST}/todos/${idTodo}`, {
      method: "PUT",
      body: JSON.stringify(editTodo)
    });
    if (!response.ok) {
      console.warn("ошибка при редактировании TODO")
    }
  } catch (error) {
    console.error(error);
  }
};

