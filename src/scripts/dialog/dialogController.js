import * as dialogView from "./dialogView.js";

dialogView.buttonOpenDialog.addEventListener("click", () => {
  dialogView.openDialog();
});

dialogView.buttonCloseDialog.addEventListener("click", (event) => {
  event.stopPropagation();
  dialogView.closeDialog();
});

dialogView.dialogWindow.addEventListener("click", (event) => {
  dialogView.closeOnBackDropClick(event);
});

dialogView.dialogWindow.addEventListener("keydown", (event) => {
  const keyCode = event.keyCode;
  const ESC = 27;

  if (keyCode === ESC) {
    dialogView.closeDialog();
  }
});
