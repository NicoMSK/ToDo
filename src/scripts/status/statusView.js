export const buttonSelect = document.querySelector(".nav__select-btn");
export const wrapperSelect = document.querySelector(".nav__select-wrapper");
export const itemSelect = document.querySelectorAll(".nav__select-item");

export function openTaskStatusList() {
  wrapperSelect.classList.toggle("nav__select-wrapper--open");
};

export function setButtonLabelFromClick(event) {
  const selectValue = event.currentTarget;

  buttonSelect.textContent = selectValue.textContent;
};

