import * as editView from './editView.js';
import * as formView from '../form/formView.js';
import * as model from '../todos/model.js';

editView.listHero.addEventListener('click', (event) => {
  const newTitle = editView.handleEditButtons(event);

  const taskId = editView.getTaskId(event);
  if (!taskId) {
    return;
  };

  model.updateTitle(Number(taskId), newTitle);

  formView.renderList(model.getFilteredTasks());
});

editView.listHero.addEventListener('keydown', (event) => {
  const keyCode = event.keyCode;
  const ESC = 27;
  const ENTER = 13;

  if (keyCode === ESC) {
    editView.cancelEditEsc(event);
  };

  if (keyCode === ENTER) {
    event.preventDefault();

    const newTitle = editView.keyEnterSaveEditedTaskText(event);

    const taskId = editView.getTaskId(event);
    if (!taskId) {
      return;
    };

    model.updateTitle(Number(taskId), newTitle);

    formView.renderList(model.getFilteredTasks());
  };
});

