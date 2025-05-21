export const listHero = document.querySelector(".hero__list");
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


/// остановился на моменте поиска задачи в массиве, чтоб менять состояние isComplete: false,
export function changeTaskStatus(event, array) {
  const itemId = event.target.closest(".hero__item");

};





// export function getIssueStatus(event) {
//   if (event.target.localName === 'span') {
//     let selectedOption = e.target.innerText;

//     if (selectedOption === 'All Tasks')
//       renderToDos(toDoList);

//     else if (selectedOption === 'Active') {
//       let activeToDos = toDoList.filter(todo => todo.completed === false);
//       renderToDos(activeToDos);
//     }

//     else if (selectedOption === 'Completed') {
//       let completedToDos = toDoList.filter(todo => todo.completed === true);
//       renderToDos(completedToDos);
//     }
//   }
// };
