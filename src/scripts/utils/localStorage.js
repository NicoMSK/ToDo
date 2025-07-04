const TODOS_LOCAL_STORAGE_KEY = "todos";
const THEME_LOCAL_STORAGE_KEY = "THEME_LOCAL_STORAGE_KEY";
const FILTER_LOCAL_STORAGE_KEY = "FILTER_LOCAL_STORAGE_KEY";

function makeLocalStorageService(key, defaultValue) {
  function setLocalStorage(data) {
    if (typeof defaultValue === 'object') {
      data = JSON.stringify(data);
    };

    localStorage.setItem(key, data);
  };

  function getLocalStorage() {
    let result = defaultValue;

    try {
      if (typeof defaultValue === 'object') {
        result = JSON.parse(localStorage.getItem(key));
        if (!Array.isArray(result)) {
          result = defaultValue;
        }
      } else {
        result = localStorage.getItem(key);
      }
    } catch (error) {
      console.warn('Ошибка парсинга из Local Storage', error);
    };

    return result;
  };

  return ({ setLocalStorage, getLocalStorage });
};

export const todosLocalStorageService = makeLocalStorageService(TODOS_LOCAL_STORAGE_KEY, []);

export const themeLocalStorageService = makeLocalStorageService(THEME_LOCAL_STORAGE_KEY, "light");

/// нужно сделать запоминание для фильтра
export const filterLocalStorageService = makeLocalStorageService(FILTER_LOCAL_STORAGE_KEY, "all");
