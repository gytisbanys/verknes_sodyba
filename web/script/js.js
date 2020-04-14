$(function() {

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
};

function mobili() {
  $(".navigacija-mobili").slideToggle();
}

$(".hamburgeris-containeris").click(function() {
  mobili();
});

$(".navigacija-mobili a").click(function() {
  $(".navigacija-mobili").slideToggle();
});

$(".navigacija a").click(function() {
  var aukstis = $(".navigacija").height() + "px";
  $(".nuoroda").css({"height": aukstis, "top": "-" + aukstis });
});

});