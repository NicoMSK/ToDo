import * as dialogView from "./dialogView.js";
import * as searchView from "../search/searchView.js";
import * as searchController from "../search/searchController.js";
import * as formView from "../form/formView.js";
import * as model from "../todos/model.js";

function renderFilteredTasksOnDialogClose() {
  const inputValue = searchView.searchInput.value;

  if (inputValue === "") {
    formView.renderList(model.getTasks());
  };
};

dialogView.buttonOpenDialog.addEventListener("click", () => {
  searchController.clearSearch();
  dialogView.openDialog();
});

dialogView.buttonCloseDialog.addEventListener("click", (event) => {
  event.stopPropagation();
  renderFilteredTasksOnDialogClose();
  dialogView.closeDialog();
});

dialogView.dialogWindow.addEventListener("click", (event) => {
  const isDialogClosed = dialogView.closeOnBackDropClick(event);

  if (isDialogClosed) {
    renderFilteredTasksOnDialogClose();
  };
});

dialogView.dialogWindow.addEventListener("keydown", (event) => {
  const keyCode = event.keyCode;
  const ESC = 27;

  if (keyCode === ESC) {
    renderFilteredTasksOnDialogClose();
    dialogView.closeDialog();
  }
});
