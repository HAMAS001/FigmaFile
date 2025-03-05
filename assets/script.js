let z = document.querySelector(".header")
let menubtn = document.querySelector(".menu-btn");
let closebtn = document.querySelector(".close-btn");
function openmenu() {
  z.style.display = "block";
  menubtn.style.display = "none";
  closebtn.style.display = "block";
}
function closemenu() {
  z.style.display = "none";
  menubtn.style.display = "block";
  closebtn.style.display = "none";
}