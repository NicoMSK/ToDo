import * as modelDialog from "../dialog/modelDialog.js";
import * as viewForm from "./viewForm.js";
import * as modelForm from "./modelForm.js";
import * as modelDelete from "../delete/modelDelete.js";
import * as viewDelete from '../delete/viewDelete.js';
import * as viewDialog from "../dialog/viewDialog.js";

viewForm.dialogForm.addEventListener("submit", function (event) {
  event.preventDefault();
  const isSuccesfullAdded = viewForm.createNewTask();
  if (isSuccesfullAdded) {
    modelDelete.addsPictureWhenNoTasks(viewDelete.heroItems, viewDelete.heroImg, "hero__img-wrapper--hidden");
    modelDialog.closeDialog(viewDialog.dialogWindow, viewDialog.pageBody, "page__body-no-scroll");
  }
});

viewForm.inputDialog.addEventListener("input", () => {
  modelForm.validateStringNotEmpty(viewForm.inputDialog, viewForm.errorMessage, "dialog__error--hidden");
});
