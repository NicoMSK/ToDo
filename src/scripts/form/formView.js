export const dialogWindow = document.querySelector(".dialog");
export const dialogForm = dialogWindow.querySelector(".dialog__form");
export const errorMessage = document.querySelector(".dialog__error");
export const inputDialog = dialogForm.querySelector(".dialog__input");
export const heroList = document.querySelector(".hero__list");
export const taskTemplate = document.querySelector("#task-template").content;
export const itemTemplate = taskTemplate.querySelector(".hero__item");
const heroImg = document.querySelector(".hero__img-wrapper");

export function getNewTaskTitle() {
  const taskTextInput = inputDialog.value.trim();

  if (taskTextInput === "") {
    errorMessage.classList.remove("dialog__error--hidden");
    return null;
  };

  errorMessage.classList.add("dialog__error--hidden");
  return taskTextInput;
};

export function addsPictureWhenNoTasks(tasksAmount) {
  if (tasksAmount === 0) {
    heroImg.classList.remove('hero__img-wrapper--hidden');
  } else {
    heroImg.classList.add('hero__img-wrapper--hidden');
  };
};

export function renderList(tasksArray) {
  heroList.innerHTML = "";

  addsPictureWhenNoTasks(tasksArray.length); /// можно оптимизировать, чтоб не делать лишние ремувы

  for (let i = 0; i < tasksArray.length; i++) {
    const newTaskItem = itemTemplate.cloneNode(true);
    const taskDescription = newTaskItem.querySelector(".hero__input-text");
    const checkboxInput = newTaskItem.querySelector(".hero__input");

    if (tasksArray[i].isComplete) {
      taskDescription.classList.add("hero__input-text--checked");
      checkboxInput.checked = true;
    };

    newTaskItem.dataset.id = tasksArray[i].id;
    taskDescription.textContent = tasksArray[i].title;
    heroList.appendChild(newTaskItem);
  };

  inputDialog.value = "";
};

export function validateStringNotEmpty() {
  if (inputDialog.value.trim() !== "") {
    errorMessage.classList.add("dialog__error--hidden");
  };
};
