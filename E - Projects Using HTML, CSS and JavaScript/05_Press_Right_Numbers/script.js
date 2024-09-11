let timer = 60;
let score = 0;

function scoreSystem() {
  let newNumber = getNewHit();
  document
    .querySelector("#botom-panel")
    .addEventListener("click", function (details) {
      let number = Number(details.target.textContent);
      if (newNumber === number) {
        score += 10;
        document.querySelector("#scoreValue").innerHTML = score;
        newNumber = getNewHit();
        BubbleMaker();
      }
    });
}

function getNewHit() {
  let randNumber = Math.floor(Math.random() * 10);
  document.querySelector("#new-hit").textContent = randNumber;
  return randNumber;
}
function BubbleMaker() {
  let bubble = "";

  for (let i = 1; i <= 80; i++) {
    let randomNumber = Math.floor(Math.random() * 10);
    bubble = bubble + `<div class="bubble">${randomNumber}</div>`;
  }

  document.getElementById("botom-panel").innerHTML = bubble;
}

function runTimer() {
  let timeInterval = setInterval(function () {
    if (timer > 0) {
      timer--;
      document.getElementById("timer").textContent = timer;
    } else {
      clearInterval(timeInterval);
      let popup = document.querySelector("#botom-panel");
      popup.innerHTML = `<div id=popupWindow> <h1>Game Over !!</h1> <h3>Your High Score is ${score}</h3> </div>`;
    }
  }, 1000);
}

scoreSystem();
runTimer();
BubbleMaker();
