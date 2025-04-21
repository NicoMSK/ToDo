const todoList = document.querySelector(".hero__list");
const itemsHero = todoList.children;
const imgHero = document.querySelector(".hero__img-wrapper");
const cancelTaskDeletion = document.querySelector('.hero__btn-cancel-del');

function addsPictureWhenNoTasks() {
  if (itemsHero.length === 0) {
    imgHero.classList.remove("hero__img-wrapper--hidden");
  } else {
    imgHero.classList.add("hero__img-wrapper--hidden");
  }
};

/// таймер для исчезания кнопки возврата уадлёной задачи
let count = 5;
let startingTimer = null;

function timerForRemoteTaskReturnButton() {
  const countButton = document.querySelector('.hero__btn-count');

  countButton.textContent = count;

  if (count <= 0) {
    cancelTaskDeletion.classList.add('hero__btn-cancel-del--hidden');
  }
  count--;

  startingTimer = setTimeout(timerForRemoteTaskReturnButton, 1000);
};


function deleteTask(event) {
  const deleteButton = event.target;
  if (deleteButton.dataset.type === 'delete') {
    deleteButton.closest('.hero__item').remove();
    cancelTaskDeletion.classList.remove('hero__btn-cancel-del--hidden');

    clearTimeout(startingTimer);
    count = 5;
    timerForRemoteTaskReturnButton();

    addsPictureWhenNoTasks();
    setTimeout(returnsDeletedTask, 5000);
  }
};

function returnsDeletedTask() {
  cancelTaskDeletion.classList.add('hero__btn-cancel-del--hidden');
};

todoList.addEventListener('click', deleteTask);
cancelTaskDeletion.addEventListener('click', returnsDeletedTask);

export { addsPictureWhenNoTasks };
