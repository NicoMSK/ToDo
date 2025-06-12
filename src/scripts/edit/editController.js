import * as editView from './editView.js';
import * as formView from '../form/formView.js';
import * as model from '../todos/model.js';
import * as taskView from "../task/taskView.js";

export function editHandler(event) {
  editView.switchTodoItemToEditMode(event);
};

function saveAndUpdateTaskTitle({ taskId, newTitle, event }) {
  if (!taskId) {
    return;
  };

  const validateNewTitile = model.validateTitle(newTitle);
  if (!validateNewTitile) {
    editView.showEditValidationError(event);
    return;
  };

  model.updateTaskProperty({ itemId: Number(taskId), property: "title", title: newTitle });
  formView.renderList(model.getFilteredTasks());
};

export function saveEditedTaskText(event) {
  const taskId = taskView.getTaskIdFromClickEvent(event);
  const newTitle = editView.handleEditEvent({ event });

  saveAndUpdateTaskTitle({ taskId, newTitle, event });
};

export function cancelEditTask(event) {
  editView.cancelEditMode({ event });
};

export function handleEditKeyDown(event) {
  const keyCode = event.keyCode;
  const ESC = 27;
  const ENTER = 13;

  if (keyCode === ESC) {
    editView.cancelEditMode({ event });
  };

  if (keyCode === ENTER) {
    event.preventDefault();

    const taskId = taskView.getTaskIdFromClickEvent(event);
    const newTitle = editView.handleEditEvent({ event });

    saveAndUpdateTaskTitle({ taskId, newTitle, event });
  };
};

export function toggleTaskCompletion(event) {
  const taskId = taskView.getTaskIdFromClickEvent(event);
  if (!taskId) {
    return;
  };

  model.updateTaskProperty({ itemId: Number(taskId), property: "isComlete" });

  formView.renderList(model.getFilteredTasks());
};
