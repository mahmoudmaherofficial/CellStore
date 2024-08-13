// ################### (Show / Hide) MegaMenu ###################
let burgerIcon = document.querySelector(".menu");
let megaMenu = document.getElementById("nav");

burgerIcon.addEventListener("change", (el) => {
  if (burgerIcon.checked) {
    megaMenu.style.transform = "translateX(0)";
  } else {
    megaMenu.style.transform = "translateX(100%)";
  }
});
