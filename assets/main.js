// Hamburger
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-contents");

hamburger.addEventListener("click", mobileMenu);

function mobileMenu() {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("activate");
}
const navLink = document.querySelectorAll(".mobile-list");

navLink.forEach(n => n.addEventListener("click", closeMenu));

function closeMenu() {
  hamburger.classList.remove("active");
  navMenu.classList.remove("activate");
}

//modal
const modalBtns = document.querySelectorAll('.modal-btn');
const modal = document.querySelector('.modal')
const cancel = document.getElementsByClassName('modal-cancel')

modalBtns.forEach(element => {
  element.onclick = () => {
    modal.style.display = 'block';
  }
})
cancel[0].onclick = function () {
  modal.style.display = "none";
}

// window.onclick = function (event) {
//   if (event.target == modal) {
//     // modal.style.display = "none";
//     console.log('yayy')
//   }
// }

// modalBtn.onclick = function () {
//   modal.style.display = 'block'
// }
// cancel.onclick = function () {
//   modal.style.display = "none";
// }
// window.onclick = function (event) {
//   if (event.target == modal) {
//     modal.style.display = "none";
//   }
// }