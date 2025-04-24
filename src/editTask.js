const todoList = document.querySelector(".hero__list");

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
}

function cancelEditMode(event) {
  const { todoItem } = getTodoItems(event);

  todoItem.classList.remove('hero__item--edit');
}

function checkIfElementHasClass(event) {
  const clickedButton = getClickedButton(event);
  if (!clickedButton) return;

  const btnType = event.target.dataset.type;
  const todoItem = clickedButton.closest('.hero__item');

  switch (btnType) {
    case 'edit':
      switchTodoItemToEditMode(event);
      todoItem.classList.add('hero__item--edit');
      break;
    case 'done':
      saveEditedTaskText(event);
      todoItem.classList.remove('hero__item--edit');
      break;
    case 'cancel':
      cancelEditMode(event);
      todoItem.classList.remove('hero__item--edit');
      break;
  }
}

todoList.addEventListener('click', checkIfElementHasClass);


