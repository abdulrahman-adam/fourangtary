let products = {
    data: [
      {
        productName: "Samsung",
        category: "Samsung",
        price: "13",
        image: "../image/accueil/1.png",
        link: "../../index.html",
        lien: "./produits/samsung.html",
      },
      {
        productName: "Huawei",
        category: "Huawei",
        price: "12",
        image: "../image/accueil/1.webp",
        link: "../../index.html",
        lien: "./produits/huawei.html",
      },
  
      {
        productName: "Samsung",
        category: "Samsung",
        price: "11",
        image: "../image/accueil/2.webp",
        link: "../../index.html",
        lien: "./produits/samsung.html",
      },
      {
        productName: "Huawei",
        category: "Huawei",
        price: "11",
        image: "../image/accueil/2.webp",
        link: "../../index.html",
        lien: "./produits/huawei.html",
      },
      {
        productName: "Samsung",
        category: "Samsung",
        price: "11",
        image: "../image/accueil/2.webp",
        link: "../../index.html",
        lien: "./produits/samsung.html",
      },

      {
        productName: "Alsultan",
        category: "Parfums",
        price: "11.60",
        image: "../image/parfums/alsultan.jpg",
        link: "../../index.html",
        lien: "./produits/parfums.html",
      },

     

      {
        productName: "Huawei",
        category: "Huawei",
        price: "22",
        image: "../image/accueil/1.webp",
        link: "../../index.html",
        lien: "./produits/huawei.html",
      },
      {
        productName: "Appo",
        category: "Appo",
        price: "11",
        image: "../image/accueil/1.webp",
        link: "../../index.html",
        lien: "./produits/appo.html",
      },
  
      {
        productName: "Appo",
        category: "Appo",
        price: "22",
        image: "../image/accueil/2.webp",
        link: "../../index.html",
        lien: "./produits/appo.html",
      },
  
      {
        productName: "Ameer Al Oudh",
        category: "Parfums",
        price: "15",
        image: "../image/parfums/ameer.jpg",
        link: "../../index.html",
        lien: "./produits/parfums.html",
      },
      {
        productName: "Samsung",
        category: "Samsung",
        price: "22",
        image: "../image/accueil/1.webp",
        link: "../../index.html",
        lien: "./produits/samsung.html",
      },
  
      {
        productName: "Accessoires",
        category: "Accessoires",
        price: "22",
        image: "../image/accessoires/casque.jpg",
        link: "../../index.html",
        lien: "./produits/accessoires.html",
      },
  
      {
        productName: "Appo",
        category: "Appo",
        price: "22",
        image: "../image/accueil/2.webp",
        link: "../../index.html",
        lien: "./produits/appo.html",
      },
  
      {
        productName: "Accessoires",
        category: "Accessoires",
        price: "22",
        image: "../image/accessoires/headsets.jpg",
        link: "../../index.html",
        lien: "./produits/accessoires.html",
      },
  
      {
        productName: "Huawei",
        category: "Huawei",
        price: "22",
        image: "../image/accueil/3.webp",
        link: "../../index.html",
        lien: "./produits/huawei.html",
      },
  
      {
        productName: "Appo",
        category: "Appo",
        price: "22",
        image: "../image/accueil/3.webp",
        link: "../../index.html",
        lien: "./produits/appo.html",
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
    let name = document.createElement("h5");
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
    container.appendChild(price);
  
    let lien = document.createElement("a");
    lien.setAttribute("href", i.link);
    lien.innerHTML = "Achats en magain retrait en magasin";
    container.appendChild(lien);

    let link = document.createElement("a");
    link.setAttribute("href", i.lien);
    link.innerHTML = "Voir plus";
    link.classList.add("voir");
    container.appendChild(link);

    let other = document.createElement("p");
    other.appendChild(link);
    container.appendChild(other);
    //container.appendChild(link);

    
  
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
  