import * as taskView from "../task/taskView.js";

export const listHero = document.querySelector(".hero__list");
export const buttonSelect = document.querySelector(".nav__select-btn");
export const wrapperSelect = document.querySelector(".nav__select-wrapper");
export const listSelect = document.querySelector(".nav__select-list");
export const itemSelect = document.querySelectorAll(".nav__select-item");

export function createCustomSelectList(filterObject, labelObject) {
  for (const key in filterObject) {
    const item = document.createElement("li");
    item.classList.add("nav__select-item");
    item.dataset.value = filterObject[key];
    item.textContent = labelObject[key];
    listSelect.appendChild(item);
  };
};

export function toggleTaskStatusList() {
  wrapperSelect.classList.toggle("nav__select-wrapper--open");
};

export function setValueForFilterSelect(value) {
  const selectValue = document.querySelector(`.nav__select-item[data-value="${value}"]`);

  buttonSelect.textContent = selectValue.textContent;
};

export function getTaskId(event) {
  if (event.target.matches('.hero__input[type="checkbox"]')) {
    return taskView.getTaskIdFromClickEvent(event);
  };
  return null;
};

export function getFilterValueFromClickEvent(event) {
  return event.target.dataset.value;
};
