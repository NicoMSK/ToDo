import * as taskView from '../task/taskView.js';

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
  const { todoItem, spanText, editInputText } = getTodoItems(event); /// использую диструктуризацию

  todoItem.classList.add('hero__item--edit');
  editInputText.value = spanText.innerText;
  editInputText.focus();
};

function validateAndCompleteEdit(taskItem, errorElement, inputElement) {
  if (inputElement.value.trim() === "") {
    errorElement.classList.remove("hero__input-error--hidden");
    return null;
  };

  taskItem.classList.remove("hero__item--edit");

  return inputElement.value
};

export function handleEditEvent(event, isEnterKey = false) {
  if (isEnterKey) {
    const todoItem = event.target.closest('.hero__item');
    const editInputText = todoItem.querySelector(".hero__input-edit");
    const errorMessage = todoItem.querySelector(".hero__input-error");

    return validateAndCompleteEdit(todoItem, errorMessage, editInputText);
  } else {
    const { todoItem, editInputText } = getTodoItems(event);
    const errorMessage = todoItem.querySelector(".hero__input-error");

    return validateAndCompleteEdit(todoItem, errorMessage, editInputText);
  };
};

export function cancelEditMode(event, isEcsKey = false) {
  if (isEcsKey) {
    const itemHero = event.target.closest('.hero__item');
    itemHero.classList.remove('hero__item--edit');
  } else {
    const { todoItem } = getTodoItems(event);
    todoItem.classList.remove('hero__item--edit');
  };
};

export function getTaskId(event) {
  if (event.target.closest('.hero__btn-done')) {
    return taskView.getTaskIdFromClickEvent(event);
  };

  if (event.target.closest('.hero__input-edit')) {
    return taskView.getTaskIdFromClickEvent(event);
  };

  return null;
};

