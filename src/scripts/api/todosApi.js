const API_HOST = "http://localhost:3000";

async function request({ url, objectValues, errorAction, shouldReturn = false }) {
  try {
    const response = await fetch(url, objectValues);
    if (!response.ok) {
      console.warn(`ошибка при ${errorAction} TODO`);
      if (shouldReturn) return [];
    };
    if (shouldReturn) {
      return await response.json();
    };
  } catch (error) {
    console.error(error);
    if (shouldReturn) return [];
  };
};

export async function getTodos() {
  return await request({ url: `${API_HOST}/todos`, errorAction: "получении списка", shouldReturn: true });
};

export async function createNewTodo(newTodo) {
  return await request({
    url: `${API_HOST}/todos`, objectValues: {
      method: "POST",
      body: JSON.stringify(newTodo)
    }, errorAction: "создании нового", shouldReturn: true
  });
};

export async function deleteTodo(idTodo) {
  await request({
    url: `${API_HOST}/todos/${idTodo}`, objectValues: {
      method: "DELETE"
    }, errorAction: "удалении"
  });
};

export async function editTodo(idTodo, editTodo) {
  await request({
    url: `${API_HOST}/todos/${idTodo}`, objectValues: {
      method: 'PUT',
      body: JSON.stringify(editTodo)
    }, errorAction: "редактировании"
  });
};

