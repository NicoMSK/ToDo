import * as viewDialog from "./viewDialog.js";

export function openDialog(message, body) {
  viewDialog.errorMessage.classList.add(message);
  viewDialog.dialogWindow.showModal();
  viewDialog.pageBody.classList.add(body);
};

function enableScrollOnBody() {
  viewDialog.pageBody.classList.remove("page__body-no-scroll");
};

export function closeDialog() {
  viewDialog.dialogWindow.close();
  enableScrollOnBody();
  return closeDialog
};

export function closeOnBackDropClick(event) {
  const currentTarget = event.currentTarget
  const target = event.target
  const isClickedOnBackDrop = target === currentTarget;
  if (isClickedOnBackDrop) {
    closeDialog();
  }
}
