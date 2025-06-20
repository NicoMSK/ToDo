import * as dialogView from "../dialog/dialogView.js";
import * as formView from "./formView.js";
import * as model from "../todos/model.js";
import * as filterView from "../filter/filterView.js";

formView.renderList(model.getFilteredTasks());/// DELETE//////
formView.addsPictureWhenNoTasks(model.todos.length);

formView.dialogForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const newTaskTitle = formView.getNewTaskTitle();
  if (newTaskTitle === null) {
    return
  };
  model.addTodo(newTaskTitle);

  model.setCurrentFilterValue(model.FILTER.all);
  formView.renderList(model.getFilteredTasks());

  filterView.setValueForFilterSelect(model.getCurrentFilterValue());

  dialogView.closeDialog();
});

formView.inputDialog.addEventListener("input", () => {
  formView.validateStringNotEmpty();
});
