// Essay Box
const accItems = document.querySelectorAll(".accordion__item");

accItems.forEach((acc) => acc.addEventListener("click", toggleAcc));

function toggleAcc() {

  accItems.forEach((item) => item != this ? item.classList.remove("accordion__item--active") : null
  );
  if (this.classList != "accordion__item--active") {
    this.classList.toggle("accordion__item--active");
  }
}


// Overlay Hide
setTimeout(Overlay_hide, 1550)

function Overlay_hide(){
   overlay = document.querySelector(".overlay");
   website = document.querySelector(".website");
   overlay.style.display = 'none';
   websire.style.zIndex = '1';
   document.body.style.zIndex = '0';
}
