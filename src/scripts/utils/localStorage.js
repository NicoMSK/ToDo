const TODOS_LOCAL_STORAGE_KEY = "todos";
const THEME_LOCAL_STORAGE_KEY = "THEME_LOCAL_STORAGE_KEY";
const FILTER_LOCAL_STORAGE_KEY = "FILTER_LOCAL_STORAGE_KEY";

class LocalStorageService {
  constructor(key, defaultValue) {
    this.key = key;
    this.defaultValue = defaultValue;
    this.isDefaultValueArray = Array.isArray(defaultValue);
    this.isDefaultValueObject = typeof defaultValue === 'object';
  }

  setLocalStorage(data) {
    const isDataArray = Array.isArray(data);
    const isDataObject = typeof data === 'object' && data !== null;

    if ((this.isDefaultValueObject && !isDataObject) || (this.isDefaultValueArray && !isDataArray)) {
      console.error('Пытаешься сохранить не тот тип: ожидается массив или объект');
      return;
    };

    if (this.isDefaultValueObject) {
      data = JSON.stringify(data);
    };

    localStorage.setItem(this.key, data);
  }

  getLocalStorage() {
    let result = this.defaultValue;

    if (this.isDefaultValueObject) {
      try {
        result = JSON.parse(localStorage.getItem(this.key));
      } catch (error) {
        console.warn('Ошибка парсинга из Local Storage', error);
      };
      if (Array.isArray(result) !== this.isDefaultValueArray) {
        result = this.defaultValue;
      };
    } else {
      result = localStorage.getItem(this.key);
    };

    return result;
  }
};

export const todosLocalStorageService = new LocalStorageService(TODOS_LOCAL_STORAGE_KEY, []);

export const themeLocalStorageService = new LocalStorageService(THEME_LOCAL_STORAGE_KEY, "light");

export const filterLocalStorageService = new LocalStorageService(FILTER_LOCAL_STORAGE_KEY, "all");

