const shareButton = document.querySelector("#shareButton");
const popup = document.querySelector("#popup");
const closeButton = document.querySelector("#closeBtn");

shareButton.addEventListener("click", () => {
  popup.classList.toggle("popup-show");
});

closeButton.addEventListener("click", () => {
  popup.classList.add("popup");
});
