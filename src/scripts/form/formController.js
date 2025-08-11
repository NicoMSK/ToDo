import * as dialogView from "../dialog/dialogView.js";
import * as formView from "./formView.js";
import * as filterView from "../filter/filterView.js";
import * as model from "../todos/model.js";
import * as renderLoading from "../loading/loadingView.js";

async function initForm() {
  await renderLoading.loadWithLoader(model.loadAllTasks())

  formView.renderList(model.getTasks());

  formView.addsPictureWhenNoTasks(model.isEmptyTodos());
};

initForm();

formView.dialogForm.addEventListener("submit", async (event) => {
  event.preventDefault();

  const newTaskTitle = formView.getNewTaskTitle();
  if (newTaskTitle === null) {
    return
  };

  model.setCurrentFilterValue(model.FILTER.all);
  filterView.setValueForFilterSelect(model.getCurrentFilterValue());

  dialogView.closeDialog();

  await renderLoading.loadWithLoader(model.addTodo(newTaskTitle))

  formView.renderList(model.getTasks());
});

formView.inputDialog.addEventListener("input", () => {
  formView.validateStringNotEmpty();
});
