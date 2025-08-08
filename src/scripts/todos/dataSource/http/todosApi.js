const API_HOST = "http://localhost:3000";

async function request({ url, fetchOptions, defaultValue = null }) {
  try {
    const response = await fetch(url, fetchOptions);
    if (!response.ok) {
      throw new Error(`ошибка при запросе [${fetchOptions?.method || 'GET'}] ${url}`)
    };

    return await response.json();

  } catch (error) {
    console.error(error);
    return defaultValue;
  };
};

export async function getTodos() {
  return await request({ url: `${API_HOST}/todos`, defaultValue: [] });
};

export async function createNewTodo(newTodo) {
  return await request({
    url: `${API_HOST}/todos`, fetchOptions: {
      method: "POST",
      body: JSON.stringify(newTodo)
    }, defaultValue: []
  });
};

export async function deleteTodo(idTodo) {
  await request({
    url: `${API_HOST}/todos/${idTodo}`, fetchOptions: {
      method: "DELETE"
    }
  });
};

export async function editTodo(idTodo, editTodo) {
  await request({
    url: `${API_HOST}/todos/${idTodo}`, fetchOptions: {
      method: 'PUT',
      body: JSON.stringify(editTodo)
    }
  });
};

