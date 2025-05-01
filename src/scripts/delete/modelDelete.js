import * as viewDelete from './viewDelete.js';

export function addsPictureWhenNoTasks() {
  if (viewDelete.heroItems.length === 0) {
    viewDelete.heroImg.classList.remove("hero__img-wrapper--hidden");
  } else {
    viewDelete.heroImg.classList.add("hero__img-wrapper--hidden");
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
        viewDelete.cancelTaskDeletionButton.classList.add('hero__btn-cancel-del--hidden');
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

export function deleteTask(event) {
  const deleteButton = event.target;
  if (deleteButton.dataset.type === 'delete') {
    deleteButton.closest('.hero__item').remove();
    viewDelete.cancelTaskDeletionButton.classList.remove('hero__btn-cancel-del--hidden');

    startTimerButton();
    addsPictureWhenNoTasks();
  }
};

export function returnsDeletedTask() {
  viewDelete.cancelTaskDeletionButton.classList.add('hero__btn-cancel-del--hidden');
};
