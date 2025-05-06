import * as modelDialog from "./modelDialog.js";
import * as viewDialog from "./viewDialog.js";

viewDialog.buttonOpenDialog.addEventListener("click", () => {
  modelDialog.openDialog(viewDialog.errorMessage, viewDialog.dialogWindow, viewDialog.pageBody, "dialog__error--hidden", "page__body-no-scroll");
});

viewDialog.buttonCloseDialog.addEventListener("click", function (event) {
  event.stopPropagation();
  modelDialog.closeDialog(viewDialog.dialogWindow, viewDialog.pageBody, "page__body-no-scroll");
});

viewDialog.dialogWindow.addEventListener("click", (event) => {
  modelDialog.closeOnBackDropClick(event, viewDialog.dialogWindow, viewDialog.pageBody);
});

viewDialog.dialogWindow.addEventListener("keydown", function (event) {
  const keyCode = event.keyCode;
  const ESC = 27;

  if (keyCode === ESC) {
    modelDialog.closeDialog(viewDialog.dialogWindow, viewDialog.pageBody, "page__body-no-scroll");
  }
});
