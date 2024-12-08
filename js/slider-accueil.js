//console.log("good morning");

let img_slider113 = document.querySelectorAll(".startInformation p");
//console.log(img_slider113);
//  On récupère la première l'Image
let etape113 = 0;
//  On récupère numbre de l'image
let nbr_img113 = img_slider113.length;

//  Cette function permet enleave les class active sur toutes les images
function enleaverActiveImage1() {
  for (let q = 0; q < nbr_img113; q++) {
    // On récupère l'image inspecter par la boucle
    img_slider113[q].classList.remove("active11");
  }
}

setInterval(function () {
  etape113++;
  if (etape113 >= nbr_img113) {
    etape113 = 0;
  }
  enleaverActiveImage1();
  img_slider113[etape113].classList.add("active11");
}, 2000);

// the section of travel
//console.log("hello");
let img_slider1111 = document.querySelectorAll(".travel p");
//console.log(img_slider1111);
//  On récupère la première l'Image
let etape1111 = 0;
//  On récupère numbre de l'image
let nbr_img1111 = img_slider1111.length;

//  Cette function permet enleave les class active sur toutes les images
function enleaverActiveImage1111() {
  for (let m = 0; m < nbr_img1111; m++) {
    // On récupère l'image inspecter par la boucle
    img_slider1111[m].classList.remove("active1111");
  }
}

setInterval(function () {
  etape1111++;
  if (etape1111 >= nbr_img1111) {
    etape1111 = 0;
  }
  enleaverActiveImage1111();
  img_slider1111[etape1111].classList.add("active1111");
}, 2500);
