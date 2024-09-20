const panels = document.querySelectorAll(".panel");
const btn = document.querySelectorAll(".carousel-control");

panels.forEach((item) => {
  item.addEventListener("click", () => {
    removeActive();
    item.classList.add("active");
  });
});

function removeActive() {
  panels.forEach((item) => {
    item.classList.remove("active");
  });
}
