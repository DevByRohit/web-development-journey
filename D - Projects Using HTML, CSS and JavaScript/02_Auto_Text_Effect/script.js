const containerElement = document.querySelector(".container");

const jobPost = [
  "Software Engineer",
  "Frontend Developer",
  "Backend Developer",
  "Full Stack Developer",
];

let jobPostIndex = 0;
let charIndex = 0;

updateJobPost();

function updateJobPost() {
  charIndex++;
  containerElement.innerHTML = `<h1>I am a ${jobPost[jobPostIndex].slice(0, charIndex)}</h1>`;
  if (charIndex === jobPost[jobPostIndex].length) {
    jobPostIndex++;
    charIndex = 0;
  }

  setTimeout(updateJobPost, 150); // Update every 150 milliseconds
}
