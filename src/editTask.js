const todoList = document.querySelector(".hero__list");

function getClickedButton(event) {
  return event.target.closest('[data-type]');
}

function switchTodoItemToEditMode(event) {
  const clickedButton = getClickedButton(event);

  const todoItem = clickedButton.closest('.hero__item');
  const spanText = todoItem.querySelector('.hero__input-text');
  const editInputText = todoItem.querySelector('.hero__input-edit');
  editInputText.value = spanText.innerText;
  spanText.classList.add('hero__input-text--hidden');
  editInputText.classList.remove('hero__input-edit--hidden');
  editInputText.focus();
}

// делаем функцию, которая обрабатывает события
// и эта фукнкция уже в зависимости от того была ли нажата кнопка и какая запускает соответствующую функцию

// function handleClick(event) {
//   const clickedButton = event.target.closest('[data-type]');
//   if (!clickedButton) return;

//   const buttonType = clickedButton.dataset.type

//   if ()
//   switch(buttonType)
//     saveEditedTaskText(clickedButton)
// }

// function getNodes(button) {
//   const todoItem = button.closest('.hero__item');
//   const spanText = todoItem.querySelector('.hero__input-text');
//   const editInputText = todoItem.querySelector('.hero__input-edit');

//   return
// }

function saveEditedTaskText(event) {
  const clickedButton = getClickedButton(event);
  // const result = getNodes(clickedButton)

  const todoItem = clickedButton.closest('.hero__item');
  const spanText = todoItem.querySelector('.hero__input-text');
  const editInputText = todoItem.querySelector('.hero__input-edit');
  spanText.innerText = editInputText.value;
  spanText.classList.remove('hero__input-text--hidden');
  editInputText.classList.add('hero__input-edit--hidden');
}

// .hero__item.edit - mode.hero__btn - edit {
//   display: block;
// }

function cancelsInput(event) {
  const clickedButton = getClickedButton(event);

  const todoItem = clickedButton.closest('.hero__item');
  const spanText = todoItem.querySelector('.hero__input-text');
  const editInputText = todoItem.querySelector('.hero__input-edit');
  spanText.classList.remove('hero__input-text--hidden');
  editInputText.classList.add('hero__input-edit--hidden');
}

function checksIfElementHasClass(event) {
  const clickedButton = getClickedButton(event);
  if (!clickedButton) return;
  const btnType = event.target.dataset.type;
  const todoItem = clickedButton.closest('.hero__item');
  const editButton = todoItem.querySelector('.hero__btn-edit');
  const doneButton = todoItem.querySelector('.hero__btn-done');
  const cancelButton = todoItem.querySelector('.hero__btn-cancel');
  const deleteButton = todoItem.querySelector('.hero__btn-delete');

  switch (btnType) {
    case 'edit':
      switchTodoItemToEditMode(event);
      editButton.classList.add('hero__btn-hidden');
      deleteButton.classList.add('hero__btn-hidden');
      doneButton.classList.remove('hero__btn-hidden');
      cancelButton.classList.remove('hero__btn-hidden');
      break;
    case 'done':
      saveEditedTaskText(event);
      doneButton.classList.add('hero__btn-hidden');
      cancelButton.classList.add('hero__btn-hidden');
      editButton.classList.remove('hero__btn-hidden');
      deleteButton.classList.remove('hero__btn-hidden');
      break;
    case 'cancel':
      cancelsInput(event);
      doneButton.classList.add('hero__btn-hidden');
      cancelButton.classList.add('hero__btn-hidden');
      editButton.classList.remove('hero__btn-hidden');
      deleteButton.classList.remove('hero__btn-hidden');
      break;
  }
}

todoList.addEventListener('click', checksIfElementHasClass);


