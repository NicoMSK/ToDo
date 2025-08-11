import {
  LocalStorageService,
  TODOS_LOCAL_STORAGE_KEY,
} from "../../utils/localStorage";

export class LocalStorageTodoClient {
  constructor() {
    this.todosLocalStorageService = new LocalStorageService(
      TODOS_LOCAL_STORAGE_KEY,
      []
    );
  }

  async create(newTodoData) {
    const todos = await this.getAll();
    const newTodo = { ...newTodoData, id: String(new Date().getTime()) };

    this.todosLocalStorageService.setLocalStorage([...todos, newTodo]);
    return newTodo;
  }

  async getAll() {
    return this.todosLocalStorageService.getLocalStorage();
  }

  async edit(todoId, editingTodo) {
    const todos = await this.getAll();
    const todosWithEditedTodo = todos.map((todo) => {
      if (todo.id === todoId) {
        return {
          ...todo,
          ...editingTodo,
        };
      }
      return todo;
    });

    this.todosLocalStorageService.setLocalStorage(todosWithEditedTodo);
  }

  async delete(todoId) {
    const todos = await this.getAll();  
    const deletingTodo = todos.find((todo) => todo.id === todoId);

    if (deletingTodo) {
      const todosWithoutDeletingTodo = todos.filter(
        (todo) => todo.id !== todoId
      );

      this.todosLocalStorageService.setLocalStorage(todosWithoutDeletingTodo);
    }
  }
}
