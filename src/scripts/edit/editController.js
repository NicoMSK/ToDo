import * as editView from './editView.js';
import * as formView from '../form/formView.js';
import * as model from '../todos/model.js';

export function editHandler(event) {
  editView.switchTodoItemToEditMode(event);
};

function saveAndUpdateTask(taskId, newTitle) {
  if (!taskId) {
    return;
  };

  if (newTitle === null) {
    return;
  };

  model.updateTaskProperty(Number(taskId), "title", newTitle);
  formView.renderList(model.getFilteredTasks());
};

export function saveEditedTaskText(event) {
  const taskId = editView.getTaskId(event);
  const newTitle = editView.handleEditEvent(event);

  saveAndUpdateTask(taskId, newTitle);
};

export function cancelEditTask(event) {
  editView.cancelEditMode(event);
};

export function handleEditKeyDown(event) {
  const keyCode = event.keyCode;
  const ESC = 27;
  const ENTER = 13;

  if (keyCode === ESC) {
    editView.cancelEditMode(event, true);
  };

  if (keyCode === ENTER) {
    event.preventDefault();

    const taskId = editView.getTaskId(event);
    const newTitle = editView.handleEditEvent(event, true);

    saveAndUpdateTask(taskId, newTitle);
  };
};

