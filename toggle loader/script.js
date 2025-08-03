const btn = document.getElementById("modeBtn");
const body = document.body;

btn.addEventListener("click", () => {
  body.classList.toggle("dark");
});
