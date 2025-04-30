import * as controllerDialog from "./dialog/controllerDialog.js";
import { addsPictureWhenNoTasks } from "./deleteTask.js";

const closeDialog = controllerDialog.closeDialog;

function initForm(closeDialog) {

  const dialogWindow = document.querySelector(".dialog");
  const dialogForm = dialogWindow.querySelector(".dialog__form");
  const errorMessage = document.querySelector(".dialog__error");
  const inputDialog = dialogForm.querySelector(".dialog__input");

  dialogForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const taskTextInput = inputDialog.value.trim();

    if (taskTextInput === "") {
      errorMessage.classList.remove("dialog__error--hidden");
      return;
    }

    const heroList = document.querySelector(".hero__list");
    const taskTemplate = document.querySelector("#task-template").content;
    const itemTemplate = taskTemplate.querySelector(".hero__item");
    const newTaskItem = itemTemplate.cloneNode(true);

    errorMessage.classList.add("dialog__error--hidden");

    const taskDescription = newTaskItem.querySelector(".hero__input-text");

    taskDescription.textContent = taskTextInput;
    heroList.appendChild(newTaskItem);
    inputDialog.value = "";

    addsPictureWhenNoTasks();
    closeDialog();
  });

  inputDialog.addEventListener("input", () => {
    if (inputDialog.value.trim() !== "") {
      errorMessage.classList.add("dialog__error--hidden");
    }
  });
}

initForm(closeDialog);
