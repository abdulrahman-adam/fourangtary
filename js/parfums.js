



let products = {
    data: [
      {
        productName: "Amerr Al Oudh",
        category: "Ameer",
        price: "12",
        image: "../image/parfums/ameer.jpg",
        link: "../../index.html",
      },
      {
        productName: "Alsultan",
        category: "Alsultan",
        price: "10",
        image: "../image/parfums/alsultan2.jpg",
        link: "../../index.html",
      },
      {
        productName: "Ameer Al Gloob",
        category: "Ameer",
        price: "16",
        image: "../image/parfums/ameer1.jpg",
        link: "../../index.html",
      },

      {
        productName: "Alsultan",
        category: "Alsultan",
        price: "12",
        image: "../image/parfums/alsultan.jpg",
        link: "../../index.html",
      },


      {
        productName: "Pure Oudi S02",
        category: "Oudi",
        price: "11",
        image: "../image/parfums/audi.jpg",
        link: "../../index.html",
      },
  
      {
        productName: "Najoom Al Zahabi",
        category: "Najoom",
        price: "240",
        image: "../image/parfums/najoom.jpg",
        link: "../../index.html",
      },
      {
        productName: "Royal Blue",
        category: "Royal",
        price: "9",
        image: "../image/parfums/royal.jpg",
        link: "../../index.html",
      },
      {
        productName: "Sheikh S02",
        category: "Sheikh",
        price: "172",
        image: "../image/parfums/sheikh.jpg",
        link: "../../index.html",
      },
  
      // {
      //   productName: "HUAWEI SA2",
      //   category: "Bottomwear",
      //   price: "160",
      //   image: "../image/samsung/4.jpg",
      //   link: "../../index.html",
      // },

      // {
      //   productName: "HUAWEI SA22",
      //   category: "Watch",
      //   price: "259",
      //   image: "../image/samsung/1.jpg",
      //   link: "../../index.html",
      // },
      // {
      //   productName: "HUAWEI SA24",
      //   category: "Topwear",
      //   price: "137",
      //   image: "../image/samsung/3.jpg",
      //   link: "../../index.html",
      // },
  
      // {
      //   productName: "HUAWEI SA02",
      //   category: "Bottomwear",
      //   price: "170",
      //   image: "../image/samsung/2.jpg",
      //   link: "../../index.html",
      // },
  
      // {
      //   productName: "HUAWEI SA20",
      //   category: "Bottomwear",
      //   price: "190",
      //   image: "../image/samsung/1.jpg",
      //   link: "../../index.html",
      // },
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
  