window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    //document.querySelector(".navigacija-kontaktai").style.height = "0rem";
    document.querySelector(".navigacija-logo").style.height = "2.5rem";
    document.querySelector(".navigacija .navigacija-wrap").style.padding = ".5rem";
    document.querySelector(".navigacija .navigacija-meniu").style.margin = ".25rem";
    document.querySelector(".navigacija .navigacija-hamburgeris").style.height = "3rem";
    document.querySelector(".navigacija").style.boxShadow = "0rem 0rem 1rem rgba(0, 0, 0, 0.2)";
    var x = document.querySelectorAll(".navigacija .navigacija-meniu li");
    var i;
    for (let i = 0; i < x.length; i++) {
        x[i].style.padding = "2px .5rem";
    }
  } else {
    //document.querySelector(".navigacija-kontaktai").style.height = "";
    document.querySelector(".navigacija-logo").style.height = "";
    document.querySelector(".navigacija .navigacija-wrap").style.padding = "";
    document.querySelector(".navigacija .navigacija-meniu").style.margin = "";
    document.querySelector(".navigacija .navigacija-hamburgeris").style.height = "";
    document.querySelector(".navigacija").style.boxShadow = "";
    var x = document.querySelectorAll(".navigacija .navigacija-meniu li");
    var i;
    for (let i = 0; i < x.length; i++) {
        x[i].style.padding = "";
    }
  }
}

const mygtukai = document.querySelectorAll(".navigacija .navigacija-meniu li a");
for (const mygtukas of mygtukai) {
  mygtukas.addEventListener("click", function() {
    const nuorodos = document.querySelectorAll(".nuoroda");
    var aukstis = document.querySelector(".navigacija").clientHeight;
    for (const nuoroda of nuorodos) {
      nuoroda.style.height = aukstis + "px";
      nuoroda.style.top = "-" + aukstis + "px";    
    }
  })
}

