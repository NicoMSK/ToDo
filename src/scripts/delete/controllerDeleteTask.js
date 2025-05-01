import * as modelDelete from './modelDelete.js';
import * as viewDelete from './viewDelete.js';

export const addsPictureWhenNoTasks = modelDelete.addsPictureWhenNoTasks;

viewDelete.todoList.addEventListener('click', modelDelete.deleteTask);
viewDelete.cancelTaskDeletionButton.addEventListener('click', modelDelete.returnsDeletedTask);

