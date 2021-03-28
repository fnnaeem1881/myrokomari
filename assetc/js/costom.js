// SideMobail Navbar Start

// SideMobail Navbar End


window.onscroll = function() {myFunction()};

var wrappy = document.getElementById("wrappy");

var sticky = wrappy.offsetTop;

function myFunction() {
  if (window.pageYOffset >= sticky) {
    wrappy.classList.add("sticky")
  } else {
    wrappy.classList.remove("sticky");
  }
}






