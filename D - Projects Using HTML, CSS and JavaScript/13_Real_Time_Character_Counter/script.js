const textareaElement = document.querySelector("#textarea");
const totalCountElement = document.querySelector("#total-counter");
const remainingCountElement = document.querySelector("#remaining-counter");
textareaElement.addEventListener("keyup", (event) => {
  updateCounter();
});

function updateCounter() {
  totalCountElement.innerText = textareaElement.value.length;
  remainingCountElement.innerText =
    textareaElement.getAttribute("maxLength") - textareaElement.value.length;
}
