
import { HttpTodoClient } from "./http/httpClient";
import { LocalStorageTodoClient } from "./localstorageClient";
import {featureFlag} from '../../config'

export function getTodostSourceClient() {
  const todoSourceClientByFeatureFlag = {
    localstorage: LocalStorageTodoClient,
    http: HttpTodoClient,
  };

  const TodosSourceCliend = todoSourceClientByFeatureFlag[featureFlag.todoDataSource]

  return new TodosSourceCliend();
}


