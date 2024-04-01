const shareButton = document.querySelector("#shareButton");
const popup = document.querySelector("#popup");

shareButton.addEventListener("click", () => {
  popup.classList.toggle("popup-show");
});
