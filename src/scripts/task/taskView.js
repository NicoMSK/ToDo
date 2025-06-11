export function getTaskIdFromClickEvent(event) {
  const taskItem = event.target.closest(".hero__item");

  return taskItem?.dataset.id || null;
};
