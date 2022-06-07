var btnBuyTicket = document.getElementsByClassName("buy-ticket");
var modal = document.getElementsByClassName("modal");
var modalContainer = document.getElementsByClassName("modal-container");
var btnClose = document.getElementsByClassName("btn-close");

for (var i = 0; i < btnBuyTicket.length; i++) {
  btnBuyTicket[i].addEventListener("click", () => {
    modal[0].classList.add("display-block");
    console.log(i);
  });
}

for (var i = 0; i < btnClose.length; i++) {
  btnClose[i].addEventListener("click", () => {
    modal[0].classList.remove("display-block");
  });
}

modal[0].addEventListener("click", (event) => {
  modal[0].classList.remove("display-block");
});

modalContainer[0].addEventListener("click", (event) => {
  event.stopPropagation();
});

var header = document.getElementById("header");
var btnBar = document.getElementsByClassName("bar-btn");
var headHeight = header.clientHeight;
btnBar[0].addEventListener("click", toggleMenu);

var menuItem = document.querySelectorAll("#header #nav li a");
menuItem.forEach((item) => {
  item.addEventListener("click", (event) => {
    console.log(item.nextElementSibling);
    if (!item.nextElementSibling) {
      header.style.height = "46px";
      header.style.overflow = "hidden";
    } else {
      header.style.overflow = "visible";
      event.preventDefault();
    }
  });
});

function toggleMenu() {
  var isOpen = header.clientHeight == headHeight ? true : false;
  if (isOpen) {
    header.style.height = "auto";
  } else {
    header.style.height = "46px";
    header.style.overflow = "hidden";
  }
}
