import * as dialogView from "../dialog/dialogView.js";
import * as formView from "./formView.js";
import * as deleteView from "../delete/deleteView.js";
import * as model from "../todos/model.js";
import * as statusView from "../status/statusView.js";
formView.renderList(model.getFilteredTasks());/// DELETE//////
formView.dialogForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const newTaskTitle = formView.getNewTaskTitle();
  if (newTaskTitle === null) {
    return
  };
  model.addTodo(newTaskTitle);

  model.setCurrentFilterValue(model.FILTER.all);
  formView.renderList(model.getFilteredTasks());
  statusView.setValueForFilterSelect(model.getCurrentFilterValue());

  deleteView.addsPictureWhenNoTasks();
  dialogView.closeDialog();
});

formView.inputDialog.addEventListener("input", () => {
  formView.validateStringNotEmpty();
});
