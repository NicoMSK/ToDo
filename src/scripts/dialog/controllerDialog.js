import * as modelDialog from "./modelDialog.js";
import * as viewDialog from "./viewDialog.js";

export const closeDialog = modelDialog.closeDialog();

viewDialog.buttonOpenDialog.addEventListener("click", () => {
  modelDialog.openDialog("dialog__error--hidden", "page__body-no-scroll");
});

viewDialog.buttonCloseDialog.addEventListener("click", function (event) {
  event.stopPropagation();
  modelDialog.closeDialog();
});

viewDialog.dialogWindow.addEventListener("click", modelDialog.closeOnBackDropClick);

viewDialog.dialogWindow.addEventListener("keydown", function (event) {
  const keyCode = event.keyCode;
  const ESC = 27;

  if (keyCode === ESC) {
    modelDialog.closeDialog();
  }
});
