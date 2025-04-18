export function initDialog() {

  const pageBody = document.querySelector(".page__body");
  const buttonOpenDialog = document.querySelector(".hero__btn-add");
  const dialogWindow = document.querySelector(".dialog");
  const buttonCloseDialog = dialogWindow.querySelector(".dialog__btn--close");
  const errorMessage = document.querySelector(".dialog__error");

  function openDialog() {
    errorMessage.classList.add("dialog__error--hidden");
    dialogWindow.showModal();
    pageBody.classList.add("page__body-no-scroll");
  };

  function enableScrollOnBody() {
    pageBody.classList.remove("page__body-no-scroll");
  };

  function closeDialog() {
    dialogWindow.close();
    enableScrollOnBody();
  };

  function closeOnBackDropClick(event) {
    // const { currentTarget, target } = event  ---- это тоже самое, что и две строчки ниже, только более компактная запись.
    const currentTarget = event.currentTarget
    const target = event.target
    const isClickedOnBackDrop = target === currentTarget;
    if (isClickedOnBackDrop) {
      closeDialog();
    }
  }

  buttonOpenDialog.addEventListener("click", openDialog);

  buttonCloseDialog.addEventListener("click", function (event) {
    event.stopPropagation();
    closeDialog();
  });

  dialogWindow.addEventListener("click", closeOnBackDropClick);

  dialogWindow.addEventListener("keydown", function (event) {
    const keyCode = event.keyCode;
    const ESC = 27;

    if (keyCode === ESC) {
      closeDialog();
    }
  });

  return closeDialog
}
