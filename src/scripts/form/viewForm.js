export const dialogWindow = document.querySelector(".dialog");
export const dialogForm = dialogWindow.querySelector(".dialog__form");
export const errorMessage = document.querySelector(".dialog__error");
export const inputDialog = dialogForm.querySelector(".dialog__input");
export const heroList = document.querySelector(".hero__list");
export const taskTemplate = document.querySelector("#task-template").content;
export const itemTemplate = taskTemplate.querySelector(".hero__item");

export function createNewTask() {
  const taskTextInput = inputDialog.value.trim();
  const newTaskItem = itemTemplate.cloneNode(true);
  const taskDescription = newTaskItem.querySelector(".hero__input-text");

  if (taskTextInput === "") {
    errorMessage.classList.remove("dialog__error--hidden");
    return false;
  };

  errorMessage.classList.add("dialog__error--hidden");

  taskDescription.textContent = taskTextInput;
  heroList.appendChild(newTaskItem);
  inputDialog.value = "";

  return true;
};
