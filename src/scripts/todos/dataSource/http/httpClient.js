import * as api from './todosApi'

export class HttpTodoClient {
  async create(newTask) {
    return await api.createNewTodo(newTask);
  }

  async getAll() {
      return await api.getTodos();
  }

  async edit(itemId, task) {
    await api.editTodo(itemId, task);
  }

  async delete(todoId) {
    return await api.deleteTodo(todoId);
  }
}
