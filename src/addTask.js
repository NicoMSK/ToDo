const listHero = document.querySelector(".hero__list");
const pageBody = document.querySelector(".page__body");
const buttonOpenDialog = document.querySelector(".hero__btn-add");
const dialogWindow = document.querySelector(".dialog");
const formDialog = dialogWindow.querySelector(".dialog__form");
const inputDialog = formDialog.querySelector(".dialog__input");
const buttonCloseDialog = formDialog.querySelector(".dialog__btn--close");
const taskTemplate = document.querySelector("#task-template").content;
const itemTemplate = taskTemplate.querySelector(".hero__item");

function openDialog() {
  errorMessage.classList.add("dialog__error--hidden");
  dialogWindow.showModal();
  pageBody.classList.add("page__body-no-scroll");
};

function returnScroll() {
  pageBody.classList.remove("page__body-no-scroll");
};

function closeDialog() {
  dialogWindow.close();
  returnScroll();
};
//как работает этот код из доки???
function closeOnBackDropClick({ currentTarget, target }) {
  const dialog = currentTarget;
  const isClickedOnBackDrop = target === dialog;
  if (isClickedOnBackDrop) {
    closeDialog();
  }
}

buttonOpenDialog.addEventListener("click", openDialog);
buttonCloseDialog.addEventListener("click", function (evt) {
  evt.stopPropagation();
  closeDialog();
});
dialogWindow.addEventListener("click", closeOnBackDropClick);
dialogWindow.addEventListener("keydown", function (evt) {
  let keyCode = evt.keyCode;
  if (keyCode === 27) {
    closeDialog();
  }
});

const errorMessage = document.querySelector(".dialog__error");

formDialog.addEventListener("submit", function (event) {
  event.preventDefault();
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
  closeDialog();
});

inputDialog.addEventListener("input", () => {
  if (inputDialog.value.trim() !== "") {
    errorMessage.classList.add("dialog__error--hidden");
  }
});
