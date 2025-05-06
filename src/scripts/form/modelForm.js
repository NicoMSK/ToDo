import * as viewForm from "./viewForm.js";

export function createNewTask() {
  const taskTextInput = viewForm.inputDialog.value.trim();
  const newTaskItem = viewForm.itemTemplate.cloneNode(true);
  const taskDescription = newTaskItem.querySelector(".hero__input-text");

  if (taskTextInput === "") {
    viewForm.errorMessage.classList.remove("dialog__error--hidden");
    return false;
  };

  viewForm.errorMessage.classList.add("dialog__error--hidden");

  taskDescription.textContent = taskTextInput;
  viewForm.heroList.appendChild(newTaskItem);
  viewForm.inputDialog.value = "";

  return true;
};

export function validateStringNotEmpty() {
  if (viewForm.inputDialog.value.trim() !== "") {
    viewForm.errorMessage.classList.add("dialog__error--hidden");
  };
};

