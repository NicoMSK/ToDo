export function openDialog(errorElement, dialogElement, bodyElement, errorClass, bodyClass) {
  errorElement.classList.add(errorClass);
  dialogElement.showModal();
  bodyElement.classList.add(bodyClass);
};

function enableScrollOnBody(bodyElement, bodyClass) {
  bodyElement.classList.remove(bodyClass);
};

export function closeDialog(dialogElementClose, bodyElement, bodyClass) {
  dialogElementClose.close();
  enableScrollOnBody(bodyElement, bodyClass);
};

export function closeOnBackDropClick(event, dialogElementClose, bodyElement, bodyClass) {
  const currentTarget = event.currentTarget
  const target = event.target
  const isClickedOnBackDrop = target === currentTarget;
  if (isClickedOnBackDrop) {
    closeDialog(dialogElementClose, bodyElement, bodyClass);
  }
}
