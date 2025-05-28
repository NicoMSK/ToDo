import * as taskView from "../task/taskView.js";

export const listHero = document.querySelector(".hero__list");
export const buttonSelect = document.querySelector(".nav__select-btn");
export const wrapperSelect = document.querySelector(".nav__select-wrapper");
export const itemSelect = document.querySelectorAll(".nav__select-item");

export function toggleTaskStatusList() {
  wrapperSelect.classList.toggle("nav__select-wrapper--open");
};

export function setButtonLabelFromClick(status) {
  const selectValue = document.querySelector(`.nav__select-item[data-value="${status}"]`);

  buttonSelect.textContent = selectValue.textContent;
};

export function getTaskId(event) {
  if (event.target.matches('.hero__input[type="checkbox"]')) {
    return taskView.getTaskIdFromEvent(event);
  };
  return null;
};

export function getTaskStatus(event) {
  return event.target.dataset.value;
}
