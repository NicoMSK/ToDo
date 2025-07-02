import * as dialogView from "../dialog/dialogView.js";
import * as formView from "./formView.js";
import * as filterView from "../filter/filterView.js";
import * as model from "../todos/model.js";

formView.renderList(model.getTasks());

formView.addsPictureWhenNoTasks(model.todos.length);

formView.dialogForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const newTaskTitle = formView.getNewTaskTitle();
  if (newTaskTitle === null) {
    return
  };
  model.addTodo(newTaskTitle);

  model.setCurrentFilterValue(model.FILTER.all);
  formView.renderList(model.getTasks());

  filterView.setValueForFilterSelect(model.getCurrentFilterValue());

  dialogView.closeDialog();
});

formView.inputDialog.addEventListener("input", () => {
  formView.validateStringNotEmpty();
});
