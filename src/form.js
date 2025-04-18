import { initDialog } from "./dialog.js";
import { addsPictureWhenNoTasks } from "./deleteTask.js";

const closeDialog = initDialog();

function initForm(closeDialog) {

  const dialogWindow = document.querySelector(".dialog");
  const formDialog = dialogWindow.querySelector(".dialog__form");
  const errorMessage = document.querySelector(".dialog__error");
  const inputDialog = formDialog.querySelector(".dialog__input");

  formDialog.addEventListener("submit", function (event) {
    event.preventDefault();

    const listHero = document.querySelector(".hero__list");
    const taskTemplate = document.querySelector("#task-template").content;
    const itemTemplate = taskTemplate.querySelector(".hero__item");
    const newTaskItem = itemTemplate.cloneNode(true);
    const taskTextInput = inputDialog.value.trim();

    if (taskTextInput === "") {
      errorMessage.classList.remove("dialog__error--hidden");
      return;
    }

    errorMessage.classList.add("dialog__error--hidden");

    const taskDescription = newTaskItem.querySelector(".hero__input-text");

    taskDescription.textContent = taskTextInput;
    listHero.appendChild(newTaskItem);
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
