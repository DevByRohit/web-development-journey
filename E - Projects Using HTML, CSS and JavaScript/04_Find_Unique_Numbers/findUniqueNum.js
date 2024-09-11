let array = new Array();
let userValues = document.querySelector("#num");
let submitBtn = document.querySelector("#submitNum");
let findBtn = document.querySelector("#findBtn");
let newArray = document.querySelector(".clearArray");
let showArr = document.querySelector("#showArr");

// console.log(showArr.innerHTML);
// console.log(showArr.textContent);
// console.log(showArr.outerHTML);
// console.log(showArr.innerText);

submitBtn.addEventListener("click", function (e) {
  e.preventDefault();
  let userNum = parseInt(userValues.value);
  if (isNaN(userNum) || userNum < 0) {
    alert("Please enter a positive integer.");
  } else {
    array.push(userNum);
    showArr.innerHTML += `  ${userNum}, `;
  }
  userValues.value = "";
});

findBtn.addEventListener("click", function (e) {
  findUniqueValues(array);
  array = [];
});

function findUniqueValues(array) {
  for (let i = 0; i < array.length; i++) {
    for (let j = i + 1; j < array.length; j++) {
      if (array[i] === array[j]) {
        array[i] = -1;
        array[j] = -1;
      }
    }
  }
  setUniqueValuesToHtml(array);
}

function setUniqueValuesToHtml(array) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] !== -1) {
      document.querySelector(
        "#boxes"
      ).innerHTML += `<div id="numberBox">${array[i]}</div>`;
    }
  }
}

newArray.addEventListener("click", function () {
  document.querySelector("#boxes").innerHTML = "";
  showArr.textContent = "";
});
