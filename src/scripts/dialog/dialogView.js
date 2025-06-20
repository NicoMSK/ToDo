export const pageBody = document.body;
export const buttonOpenDialog = document.querySelector(".hero__btn-add");
export const dialogWindow = document.querySelector(".dialog");
export const buttonCloseDialog = dialogWindow.querySelector(".dialog__btn--close");
export const errorMessage = document.querySelector(".dialog__error");

export function openDialog() {
  errorMessage.classList.add("dialog__error--hidden");
  dialogWindow.showModal();
  pageBody.classList.add("page__body-no-scroll");
};

function enableScrollOnBody() {
  pageBody.classList.remove("page__body-no-scroll");
};

export function closeDialog() {
  dialogWindow.close();
  enableScrollOnBody();
};

export function closeOnBackDropClick(event) {
  const currentTarget = event.currentTarget
  const target = event.target
  const isClickedOnBackDrop = target === currentTarget;
  if (isClickedOnBackDrop) {
    closeDialog();
    return true;
  };
};
