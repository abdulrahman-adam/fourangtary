

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }
  
  function moveRandomText() {
    const container = document.getElementById('randomTextContainer');
    const text = document.getElementById('randomText');
    const containerWidth = container.clientWidth;
    const containerHeight = container.clientHeight;
    const textWidth = text.clientWidth;
    const textHeight = text.clientHeight;
  
    let leftPos = getRandomInt(0, containerWidth - textWidth);
    let topPos = getRandomInt(0, containerHeight - textHeight);
  
    text.style.left = leftPos + 'px';
    text.style.top = topPos + 'px';
    text.style.transition = 0.5
  }
  
  setInterval(moveRandomText, 1000);
  
  