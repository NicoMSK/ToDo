export const listHero = document.querySelector(".hero__list");

export function getClickedElementType(clickedNode) {
  const elementWithDataType = clickedNode.closest("[data-type]");

  if (elementWithDataType) {
    return elementWithDataType.dataset.type;
  };

  return null;
};
