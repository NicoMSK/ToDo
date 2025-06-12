export const listHero = document.querySelector(".hero__list");

function getClickedButton(event) {
  return event.target.closest('[data-type]');
};

export function getTodoItems(event) {
  const clickedButton = getClickedButton(event);

  const todoItem = clickedButton.closest('.hero__item');
  const spanText = todoItem.querySelector('.hero__input-text');
  const editInputText = todoItem.querySelector('.hero__input-edit');

  return { todoItem, spanText, editInputText }
}

export function switchTodoItemToEditMode(event) {
  const { todoItem, spanText, editInputText } = getTodoItems(event);

  todoItem.classList.add('hero__item--edit');
  editInputText.value = spanText.innerText;
  editInputText.focus();
};

function updateUI(params) {
  errorElement.classList.remove("hero__input-error--hidden");
  taskItem.classList.remove("hero__item--edit");

}

function validateAndCompleteEdit(taskItem, errorElement, inputElement) {
  if (inputElement.value.trim() === "") {
    errorElement.classList.remove("hero__input-error--hidden");
    return null;
  };

  taskItem.classList.remove("hero__item--edit");

  return inputElement.value
};

export function handleEditEvent({ event }) {
  const todoItem = event.target.closest('.hero__item');
  const editInputText = todoItem.querySelector(".hero__input-edit");
  const errorMessage = todoItem.querySelector(".hero__input-error");

  return validateAndCompleteEdit(todoItem, errorMessage, editInputText);
};

export function cancelEditMode({ event }) {
  const todoItem = event.target.closest('.hero__item');
  const errorMessage = todoItem.querySelector(".hero__input-error");

  errorMessage.classList.add('hero__input-error--hidden');
  todoItem.classList.remove('hero__item--edit');
};

