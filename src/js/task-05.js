const nameInput = document.querySelector("#name-input");
const nameOutput = document.querySelector("#name-output");
const defaultValue = "Anonymous";

nameInput.addEventListener("input", (event) => {
  nameOutput.textContent = event.currentTarget.value;
  if (nameOutput.textContent === "") {
    nameOutput.textContent = defaultValue;
  }
});
