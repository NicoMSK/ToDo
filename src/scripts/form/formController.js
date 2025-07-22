import * as dialogView from "../dialog/dialogView.js";
import * as formView from "./formView.js";
import * as filterView from "../filter/filterView.js";
import * as model from "../todos/model.js";
import * as renderLoading from "../loading/loadingView.js";

renderLoading.showRenderLoading();

async function initForm() {
  await model.getTasksFromServer();

  formView.renderList(model.getTasks());

  formView.addsPictureWhenNoTasks(model.serverTodos.length);

  renderLoading.hideRenderLoading();
};

initForm();

formView.dialogForm.addEventListener("submit", async (event) => {
  event.preventDefault();

  const newTaskTitle = formView.getNewTaskTitle();
  if (newTaskTitle === null) {
    return
  };
  await model.addTodo(newTaskTitle);

  model.setCurrentFilterValue(model.FILTER.all);
  formView.renderList(model.getTasks());


  filterView.setValueForFilterSelect(model.getCurrentFilterValue());

  dialogView.closeDialog();
});

formView.inputDialog.addEventListener("input", () => {
  formView.validateStringNotEmpty();
});
