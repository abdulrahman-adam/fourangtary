



let products = {
    data: [
      {
        productName: "Ecouteur Bluetooth",
        category: "Ecouteurs",
        price: "9",
        image: "../image/accessoires/ecouteur3.jpg",
        link: "../../index.html",
      },
      {
        productName: "Ecouteur Normale",
        category: "Ecouteurs",
        price: "4",
        image: "../image/accessoires/headsets_normal.jpg",
        link: "../../index.html",
      },
      {
        productName: "Casque Blutooth",
        category: "Casques",
        price: "12",
        image: "../image/accessoires/casque.jpg",
        link: "../../index.html",
      },

      {
        productName: "Chargeurs iphone",
        category: "Chargeurs",
        price: "4",
        image: "../image/accessoires/chargeur.jpg",
        link: "../../index.html",
      },


      {
        productName: "Casque Bluetooth",
        category: "Casques",
        price: "249",
        image: "../image/accessoires/casque1.jpg",
        link: "../../index.html",
      },
  
      {
        productName: "Ecouteur Bluetooth",
        category: "Ecouteurs",
        price: "11",
        image: "../image/accessoires/ecouteur2.webp",
        link: "../../index.html",
      },
      {
        productName: "Puissance",
        category: "Puissances",
        price: "14",
        image: "../image/accessoires/power.jpg",
        link: "../../index.html",
      },
      {
        productName: "Ecouteur Blueooth",
        category: "Ecouteurs",
        price: "12",
        image: "../image/accessoires/ecouteurs.jpg",
        link: "../../index.html",
      },
  
      {
        productName: "HUAWEI SA2",
        category: "Chargeurs",
        price: "3",
        image: "../image/accessoires/chargeur.webp",
        link: "../../index.html",
      },

      {
        productName: "Puissance",
        category: "Puissances",
        price: "13",
        image: "../image/accessoires/power_bank.jpg",
        link: "../../index.html",
      },
      {
        productName: "Ecouteur Bluetooth",
        category: "Ecouteurs",
        price: "8",
        image: "../image/accessoires/headsets.png",
        link: "../../index.html",
      },
  
      {
        productName: "Ecouteur Bluetooth",
        category: "Ecouteurs",
        price: "11",
        image: "../image/accessoires/headsets.jpg",
        link: "../../index.html",
      },
  
      {
        productName: "HUAWEI SA20",
        category: "Chargeurs",
        price: "10",
        image: "../image/accessoires/chargeur1.jpg",
        link: "../../index.html",
      },
    ],
  };
  
  for (let i of products.data) {
    // create card
    let card = document.createElement("div");
    //   console.log(card);
    // card shold have category and should stay hidden initially
  
    card.classList.add("card88", i.category, "hide");
    // image div
    let imageContainer = document.createElement("div");
    //   console.log(imageContainer);
    imageContainer.classList.add("image-container");
    // image tag
  
    let image = document.createElement("img");
    //   console.log(image);
    image.setAttribute("src", i.image);
    imageContainer.appendChild(image);
    card.appendChild(imageContainer);
    // container
    let container = document.createElement("div");
    container.classList.add("container");
    // product name
    let name = document.createElement("h6");
    name.classList.add("product-name");
    name.innerHTML = i.productName.toUpperCase();
    name.innerText = "Nom : " + i.productName;
    container.appendChild(name);
    card.appendChild(container);
    // Price
    let price = document.createElement("h6");
    price.classList.add("price");
    //price.innerText = i.price + " €";
    price.innerText = "Prix : " + i.price + " €";
    card.appendChild(price);
  
    let lien = document.createElement("a");
  
    lien.setAttribute("href", i.link);
  
    lien.innerHTML = "Achats en magain retrait en magasin";
  
    card.appendChild(lien);
  
    // let lien = document.createElement("a");
    // lien.setAttribute("href", i.link);
    // lien.innerHTML = "Lire plus";
    // container.appendChild(lien);
    // lien.innerHTML = "Lire plus";
    // container.appendChild(lien);
  
    // let lien22 = document.createElement("p");
    // lien22.innerHTML = `Lire plus Lorem ipsum dolor sit amet, <span id='ok'> consectetur adipisicing elit. Architecto soluta dolore obcaecati eius, aliquam modi voluptatibus nesciunt in. Cumque, commodi maxime sunt officia veritatis deleniti fuga dolor repellendus enim earum.</span>`;
    // container.appendChild(lien22);
    // container.appendChild(lien22);
    // let ok = document.getElementById("ok");
    // console.log(ok);
    document.getElementById("products").appendChild(card);
  }
  
  // Parameter passed from button (Parameter same as category)
  function filterProduct(value) {
    // Button class code
    let buttons = document.querySelectorAll(".button-value");
  
    buttons.forEach((button) => {
      // click if value equals innerText
      if (value.toUpperCase() == button.innerText.toUpperCase()) {
        button.classList.add("active33");
      } else {
        button.classList.remove("active33");
      }
    });
  
    // Select all cards
    let elements = document.querySelectorAll(".card88");
    console.log(elements);
    // Loop through all cards
    elements.forEach((element) => {
      // display all cards on "all" button click
      if (value == "tous") {
        element.classList.remove("hide");
      } else {
        // Check if element contains category class
        if (element.classList.contains(value)) {
          // display element based on category
          element.classList.remove("hide");
        } else {
          // hide other elements
          element.classList.add("hide");
        }
      }
    });
  }
  
  // Search button click
  document.getElementById("search").addEventListener("click", (e) => {
    // initilization
    let searchInput = document.getElementById("search-input").value;
    let elements = document.querySelectorAll(".product-name");
    let cards = document.querySelectorAll(".card88");
    // Loop throught all elements
    elements.forEach((element, index) => {
      // check if text includes the search value
      if (element.innerText.includes(searchInput.toUpperCase())) {
        // display matching card
        cards[index].classList.remove("hide");
      } else {
        // hide others
        cards[index].classList.add("hide");
      }
    });
  });
  // Initially display all products
  
  window.onload = () => {
    filterProduct("tous");
  };
  // filterProduct("all");
  