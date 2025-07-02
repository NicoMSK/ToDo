import * as dialogView from "./dialogView.js";
import * as searchController from "../search/searchController.js";

dialogView.buttonOpenDialog.addEventListener("click", () => {
  searchController.clearSearch();
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
  };
});
