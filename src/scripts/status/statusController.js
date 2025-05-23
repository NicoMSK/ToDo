import * as statusView from "./statusView.js";
import * as model from "../todos/model.js";

statusView.buttonSelect.addEventListener('click', () => {
  statusView.openTaskStatusList();
});

statusView.itemSelect.forEach(item => {
  item.addEventListener('click', (event) => {
    statusView.setButtonLabelFromClick(event);
    statusView.openTaskStatusList();
  });
});

statusView.listHero.addEventListener('change', (event) => {
  statusView.changeTaskStatus(event);
});
