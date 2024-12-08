let HeartElement = document.getElementById("randomHeart");

HeartElement.addEventListener("click", (e) => {
  let HeartParent = document.getElementById("containerHeart");

  const container = document.createElement("div");
  HeartParent.append(container);

  const createRandomHeart = setInterval(() => {
    const heart = document.createElement("div");
    heart.classList.add("heart");
    heart.innerHTML =
      "&#129505 <span style='color:#0d6efd'>Fourangtary</span>&#127801;";

    heart.style.left = `${Math.random() * 100}%`;

    HeartParent.append(heart);
  }, 40);

  setTimeout(() => {
    clearInterval(createRandomHeart);
  }, 3000);

  setTimeout(() => {
    HeartParent.remove();
  }, 4000);
});
