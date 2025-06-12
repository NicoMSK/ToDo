export function getTodoItems(event) {
  const todoItem = event.target.closest('.hero__item');
  const spanText = todoItem.querySelector('.hero__input-text');
  const editInputText = todoItem.querySelector('.hero__input-edit');
  const errorMessage = todoItem.querySelector(".hero__input-error");

  return { todoItem, spanText, editInputText, errorMessage }
}

export function switchTodoItemToEditMode(event) {
  const { todoItem, spanText, editInputText } = getTodoItems(event);

  todoItem.classList.add('hero__item--edit');
  editInputText.value = spanText.innerText;
  editInputText.focus();
};

export function showEditValidationError(event) {
  const { todoItem, errorMessage } = getTodoItems(event);

  errorMessage.classList.remove("hero__input-error--hidden");
  todoItem.classList.add("hero__item--edit");
};

export function handleEditEvent({ event }) {
  const { todoItem, editInputText } = getTodoItems(event);

  todoItem.classList.remove("hero__item--edit");
  return editInputText.value
};

export function cancelEditMode({ event }) {
  const { todoItem, errorMessage } = getTodoItems(event);

  errorMessage.classList.add('hero__input-error--hidden');
  todoItem.classList.remove('hero__item--edit');
};

