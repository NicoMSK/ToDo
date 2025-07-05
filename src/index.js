import "normalize.css";
import "./main.scss";
import "./scripts/form/formController.js";
import "./scripts/dialog/dialogController.js";
import "./scripts/edit/editController.js";
import "./scripts/delete/deleteController.js";
import "./scripts/theme/themeController.js";
import "./scripts/filter/filterController.js";
import "./scripts/list/listController.js";
import "./scripts/search/searchController.js";

async function jsonServerRequestExpamle() {
  async function fetchFunc(path) {
    try {
      const response = await fetch(path);
      if (response.ok) {
        const result = await response.json();
        console.log({ result });
      }
    } catch (e) {
      console.error(e);
    }
  }

  fetchFunc("http://localhost:3000/todos");
  fetchFunc("http://localhost:3000/todos/123");

  console.log("JsonServerRequestExpamle");
}

jsonServerRequestExpamle();
