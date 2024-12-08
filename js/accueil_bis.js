var words = ['Nous ventons des smartephones', 'Nous ventons des smartephones Samsung', 'Nous ventons des smartephones Huawei', ' Nous ventons des smartephones Appo', 'Nous ventons des Accessoires', 'Réparation des smartephones'],
    part,
    i = 0,
    offset = 0,
    len = words.length,
    forwards = true,
    skip_count = 0,
    skip_delay = 15,
    speed = 70;
var wordflick = function () {
  setInterval(function () {
    if (forwards) {
      if (offset >= words[i].length) {
        ++skip_count;
        if (skip_count == skip_delay) {
          forwards = false;
          skip_count = 0;
        }
      }
    }
    else {
      if (offset == 0) {
        forwards = true;
        i++;
        offset = 0;
        if (i >= len) {
          i = 0;
        }
      }
    }
    part = words[i].substr(0, offset);
    if (skip_count == 0) {
      if (forwards) {
        offset++;
      }
      else {
        offset--;
      }
    }
    $('.word').text(part);
  },speed);
};

$(document).ready(function () {
  wordflick();
});




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