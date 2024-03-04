let MobileView = document.getElementById("mobileView");
let icon1 = document.querySelector(".icon1");
let icon2 = document.querySelector(".icon2");
let icon3 = document.querySelector(".icon3");

function view() {
  MobileView.classList.toggle("left-view");
  document.querySelector("body").classList.toggle("overflow-hide")
  icon1.classList.toggle("icon4");
  icon2.classList.toggle("icon5");
  icon3.classList.toggle("icon6");
}
function scrollBtn() {
  window.scrollTo(0, 0);
}
window.addEventListener("scroll", function () {
  let topbtn = document.getElementById("topbtn");
  if (window.scrollY > 200) {
    topbtn.style.display = 'block';
  }
  else {
    topbtn.style.display = 'none';
  }
})
setTimeout(() => {
  document.getElementById("preloder").classList.add("d-none");
  document.body.classList.remove("overflow-hidden");
}, 3000);