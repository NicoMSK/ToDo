const todoList = document.querySelector(".hero__list");
const heroItems = todoList.children;
const heroImg = document.querySelector(".hero__img-wrapper");
const cancelTaskDeletionButton = document.querySelector('.hero__btn-cancel-del');

function addsPictureWhenNoTasks() {
  if (heroItems.length === 0) {
    heroImg.classList.remove("hero__img-wrapper--hidden");
  } else {
    heroImg.classList.add("hero__img-wrapper--hidden");
  }
};

function getTimerStarter() {

  let startingTimer = null;

  function startTimerForRemoteTaskReturnButton() {
    clearTimeout(startingTimer);

    let count = 5;
    const countButton = document.querySelector('.hero__btn-count');

    function decreaseCounter() {
      countButton.textContent = count;

      if (count <= 0) {
        cancelTaskDeletionButton.classList.add('hero__btn-cancel-del--hidden');
      }
      count--;

      if (count >= 0) {
        startingTimer = setTimeout(decreaseCounter, 1000);
      }
    }
    decreaseCounter();
  };

  return startTimerForRemoteTaskReturnButton;
};

const startTimerButton = getTimerStarter();

function deleteTask(event) {
  const deleteButton = event.target;
  if (deleteButton.dataset.type === 'delete') {
    deleteButton.closest('.hero__item').remove();
    cancelTaskDeletionButton.classList.remove('hero__btn-cancel-del--hidden');

    startTimerButton();
    addsPictureWhenNoTasks();
  }
};

function returnsDeletedTask() {
  cancelTaskDeletionButton.classList.add('hero__btn-cancel-del--hidden');
};

todoList.addEventListener('click', deleteTask);
cancelTaskDeletionButton.addEventListener('click', returnsDeletedTask);

export { addsPictureWhenNoTasks };
