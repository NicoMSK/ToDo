import * as taskView from "../task/taskView.js";

export const todoList = document.querySelector(".hero__list");
export const cancelTaskDeletionButton = document.querySelector(".hero__btn-cancel-del");
const countButton = document.querySelector(".hero__btn-count");

function getTimerStarter() {

  let startingTimer = null;

  function startTimerForRemoteTaskReturnButton() {
    clearTimeout(startingTimer);

    cancelTaskDeletionButton.classList.remove("hero__btn-cancel-del--hidden");

    let count = 5;

    function decreaseCounter() {
      countButton.textContent = count;

      if (count <= 0) {
        cancelTaskDeletionButton.classList.add("hero__btn-cancel-del--hidden");
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

export const startTimerButton = getTimerStarter();

export function returnsDeletedTask() {
  cancelTaskDeletionButton.classList.add("hero__btn-cancel-del--hidden");
};
