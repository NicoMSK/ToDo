import * as taskView from '../task/taskView.js';

export const listHero = document.querySelector(".hero__list");

function getClickedButton(event) {
  return event.target.closest('[data-type]');
};

function getTodoItems(event) {
  const clickedButton = getClickedButton(event);

  const todoItem = clickedButton.closest('.hero__item');
  const spanText = todoItem.querySelector('.hero__input-text');
  const editInputText = todoItem.querySelector('.hero__input-edit');

  return { todoItem, spanText, editInputText }
}

function switchTodoItemToEditMode(event) {
  const { todoItem, spanText, editInputText } = getTodoItems(event); /// использую диструктуризацию

  todoItem.classList.add('hero__item--edit');
  editInputText.value = spanText.innerText;
  editInputText.focus();
}

function saveEditedTaskText(event) {
  const { todoItem, spanText, editInputText } = getTodoItems(event);

  spanText.innerText = editInputText.value;
  todoItem.classList.remove('hero__item--edit');

  return spanText.innerText
};

export function keyEnterSaveEditedTaskText(event) {
  if (event.target.closest('.hero__input-edit')) {
    const itemHero = event.target.closest('.hero__item');
    const spanTextEnter = itemHero.querySelector('.hero__input-text');
    const editInputTextEnter = itemHero.querySelector('.hero__input-edit');

    spanTextEnter.innerText = editInputTextEnter.value;
    itemHero.classList.remove('hero__item--edit');

    return spanTextEnter.innerText
  };
};

function cancelEditMode(event) {
  const { todoItem } = getTodoItems(event);

  todoItem.classList.remove('hero__item--edit');
};

export function cancelEditEsc(event) {
  if (event.target.closest('.hero__input-edit')) {
    const itemHero = event.target.closest('.hero__item');
    itemHero.classList.remove('hero__item--edit');
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

export function handleEditButtons(event) {
  const clickedButton = getClickedButton(event);
  if (!clickedButton) return;

  const btnType = event.target.dataset.type;
  // const todoItem = clickedButton.closest('.hero__item');

  switch (btnType) {
    case 'edit':
      switchTodoItemToEditMode(event);
      // todoItem.classList.add('hero__item--edit');
      break;
    case 'done':
      return saveEditedTaskText(event);
    // todoItem.classList.remove('hero__item--edit');
    case 'cancel':
      cancelEditMode(event);
      // todoItem.classList.remove('hero__item--edit');
      break;
    case 'delete':
      break;
    default:
      throw new Error('Ошибка, кнопка не найдена')
  }
};
