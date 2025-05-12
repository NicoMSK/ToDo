import * as dialogView from "../dialog/dialogView.js";
import * as formView from "./formView.js";
import * as deleteView from "../delete/deleteView.js";
import * as model from "../todos/model.js";

formView.dialogForm.addEventListener("submit", function (event) {
  event.preventDefault();

  const newTaskTitle = formView.getNewTaskTitle();
  if (newTaskTitle === null) return;
  model.addTodo(newTaskTitle);

  const isSuccesfullAdded = formView.renderList(model.todos);
  if (isSuccesfullAdded) {
    deleteView.addsPictureWhenNoTasks();
    dialogView.closeDialog();
  }
});

formView.inputDialog.addEventListener("input", () => {
  formView.validateStringNotEmpty();
});
