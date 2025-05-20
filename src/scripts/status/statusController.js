import * as statusView from "./statusView.js";

statusView.buttonSelect.addEventListener('click', () => {
  statusView.openTaskStatusList();
});

statusView.itemSelect.forEach(item => {
  item.addEventListener('click', (event) => {
    statusView.setButtonLabelFromClick(event);
    statusView.openTaskStatusList();
  });
});
