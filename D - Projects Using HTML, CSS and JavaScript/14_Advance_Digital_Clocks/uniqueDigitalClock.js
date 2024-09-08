setInterval(() => {
  let hours = document.getElementById("hours");
  let minutes = document.getElementById("minutes");
  let seconds = document.getElementById("seconds");
  let ampm = document.getElementById("ampm");

  // fetch all time circles
  let cirHour = document.getElementById("hh");
  let cirminute = document.getElementById("mm");
  let cirSecond = document.getElementById("ss");

  // fetch hour, minute and second dots
  let hr_dot = document.querySelector(".hr_dot");
  let min_dot = document.querySelector(".min_dot");
  let sec_dot = document.querySelector(".sec_dot");

  // fetch hours, minutes and seconds
  let h = new Date().getHours();
  let m = new Date().getMinutes();
  let s = new Date().getSeconds();
  let am = h >= 12 ? "PM" : "AM";

  // convert 24 hours to 12 hours clock
  if (h > 12) {
    h = h - 12;
  }
  // Add zero before single digit number
  if (h < 10) {
    h = "0" + h;
  }
  if (m < 10) {
    m = "0" + m;
  }
  if (s < 10) {
    s = "0" + s;
  }

  // set hours, minutes and seconds to html document
  hours.innerHTML = h + "<br/><span>Hours</span>";
  minutes.innerHTML = m + "<br/><span>Minutes</span>";
  seconds.innerHTML = s + "<br/><span>Seconds</span>";
  ampm.innerHTML = am;

  // rotate each time circle
  cirHour.style.strokeDashoffset = 440 - (440 * h) / 12;
  cirminute.style.strokeDashoffset = 440 - (440 * m) / 60;
  cirSecond.style.strokeDashoffset = 440 - (440 * s) / 60;

  // rotate hour, minute and second dots
  hr_dot.style.transform = `rotate(${h * 30}deg)`;
  min_dot.style.transform = `rotate(${m * 6}deg)`;
  sec_dot.style.transform = `rotate(${s * 6}deg)`;
});
