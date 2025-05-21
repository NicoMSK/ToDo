import * as controllerDialog from "../dialog/controllerDialog.js";
import * as viewForm from "./viewForm.js";
import * as modelForm from "./modelForm.js";
import * as controllerDeleteTask from "../delete/controllerDeleteTask.js";

viewForm.dialogForm.addEventListener("submit", function (event) {
  event.preventDefault();
  const taskAdded = modelForm.createNewTask();
  if (!taskAdded) return;
  controllerDeleteTask.addsPictureWhenNoTasks();
  controllerDialog.closeDialog();
});

viewForm.inputDialog.addEventListener("input", () => {
  modelForm.theyWillCheckIfLineIsEmpty();
});
