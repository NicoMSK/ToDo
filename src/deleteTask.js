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
let time = 5;
const timerForRemoteTaskReturnButton = setInterval(() => {
  const countButton = document.querySelector('.hero__btn-count');
  countButton.textContent = time;
  if (time <= 0) {
    clearInterval(timerForRemoteTaskReturnButton)
  } time--;

  setTimeout(returnsDeletedTask, 5000);
}, 1000);

function deleteTask(event) {
  const deleteButton = event.target;
  if (event.target.dataset.type === 'delete') {
    deleteButton.closest('.hero__item').remove();
    cancelTaskDeletion.classList.remove('hero__btn-cancel-del--hidden');
    addsPictureWhenNoTasks();
  }
};

function returnsDeletedTask() {
  cancelTaskDeletion.classList.add('hero__btn-cancel-del--hidden');

};

todoList.addEventListener('click', deleteTask);
cancelTaskDeletion.addEventListener('click', returnsDeletedTask);

export { addsPictureWhenNoTasks };
