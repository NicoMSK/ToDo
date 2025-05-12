import * as dialogView from "./dialogView.js";

dialogView.buttonOpenDialog.addEventListener("click", () => {
  dialogView.openDialog();
});

dialogView.buttonCloseDialog.addEventListener("click", function (event) {
  event.stopPropagation();
  dialogView.closeDialog();
});

dialogView.dialogWindow.addEventListener("click", (event) => {
  dialogView.closeOnBackDropClick(event);
});

dialogView.dialogWindow.addEventListener("keydown", function (event) {
  const keyCode = event.keyCode;
  const ESC = 27;

  if (keyCode === ESC) {
    dialogView.closeDialog(dialogView.dialogWindow, dialogView.pageBody, "page__body-no-scroll");
  }
});
