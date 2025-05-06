export function addsPictureWhenNoTasks(items, image, toggleClass) {
  if (items.length === 0) {
    image.classList.remove(toggleClass);
  } else {
    image.classList.add(toggleClass);
  }
};

function getTimerStarter() {

  let startingTimer = null;

  function startTimerForRemoteTaskReturnButton(button, classButton, addClass) {
    clearTimeout(startingTimer);

    let count = 5;
    const countButton = button;

    function decreaseCounter() {
      countButton.textContent = count;

      if (count <= 0) {
        classButton.classList.add(addClass);
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

export function deleteTask(event, datasetType, item, button, removeClass) {
  const deleteButton = event.target;
  if (deleteButton.dataset.type === datasetType) {
    deleteButton.closest(item).remove();
    button.classList.remove(removeClass);
  }
};

export function returnsDeletedTask(button, addClass) {
  button.classList.add(addClass);
};
