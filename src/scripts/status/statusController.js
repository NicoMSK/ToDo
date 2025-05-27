import * as statusView from "./statusView.js";
import * as model from "../todos/model.js";
import * as formView from "../form/formView.js";
import * as deleteView from '../delete/deleteView.js';

statusView.setButtonLabelFromClick("all");

statusView.buttonSelect.addEventListener('click', () => {
  statusView.toggleTaskStatusList();
});

statusView.itemSelect.forEach(item => {
  item.addEventListener('click', (event) => {
    const status = statusView.getTaskStatus(event);
    model.setCurrentStatus(status);

    statusView.setButtonLabelFromClick(status);

    formView.renderList(model.filterTasks());

    deleteView.addsPictureWhenNoTasks();
    statusView.toggleTaskStatusList();
  });
});

statusView.listHero.addEventListener('change', (event) => {
  const taskId = statusView.changeTaskStatus(event);
  if (!taskId) {
    return;
  };

  model.statusChange(Number(taskId));
});
