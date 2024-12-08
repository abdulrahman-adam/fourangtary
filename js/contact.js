// Lasection de read plus read mois

function read() {
    let childOne = document.getElementById("childOne1");
    let moreEle55 = document.getElementById("more1");
    let readEle = document.getElementById("read1");
  
    if (childOne.style.display === "none") {
      childOne.style.display = "inline";
      moreEle55.style.display = "none";
      readEle.innerHTML = "Affiche plus";
    } else {
      childOne.style.display = "none";
      moreEle55.style.display = "inline";
      readEle.innerHTML = "Affiche mois";
    }
  }
  