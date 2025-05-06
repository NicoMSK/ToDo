export function validateStringNotEmpty(inputValue, error, addClass) {
  if (inputValue.value.trim() !== "") {
    error.classList.add(addClass);
  };
};

