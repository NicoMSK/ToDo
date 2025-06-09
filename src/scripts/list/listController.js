import * as listView from './listView.js';
import * as editController from '../edit/editController.js';
import * as filterController from '../filter/filterController.js';
import * as deleteController from '../delete/deleteController.js';

listView.listHero.addEventListener("click", (event) => {
  const elementType = listView.getClickedElementType(event.target);

  if (!elementType) {
    return;
  };

  switch (elementType) {
    case "edit":
      editController.editHandler(event);
      break;
    case "done":
      editController.saveEditedTaskText(event);
      break;
    case "cancel":
      editController.cancelEditTask(event);
      break;
    case "checkbox":
      filterController.toggleTaskCompletion(event);
      break;
    case "delete":
      deleteController.deleteTask(event);
      break;
  };
});

listView.listHero.addEventListener("keydown", (event) => {
  editController.handleEditKeyDown(event);
});
