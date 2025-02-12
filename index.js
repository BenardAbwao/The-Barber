
let getSearchTerm = () =>{
  const data = 'http://localhost:3000/data'
  fetch(data)
  .then(response => response.json())
  .then(response => console.log(response));
}

let products = {
    data: [
      {
        id: 1,
        productName: "Bob",
        category: "style",
        price: "30",
        image: "https://headcurve.com/wp-content/uploads/2017/09/bob-hairstyle-sept5.jpg",
      },
      {
        id: 2,
        productName: "Perm",
        category: "style",
        price: "30",
        image: "https://headcurve.com/wp-content/uploads/2017/09/perm.jpg",
      },
      {
        id: 3,
        productName: "Baxter of California Hydrating Conditioner",
        category: "Cosmetics",
        price: "25",
        image: "https://maksymchak.github.io/barbershop/img/product-2.jpg",
      },
      { 
        id: 4,
        productName: "Crew Cut",
        category: "Haircut",
        price: "8",
        image: "https://cdn.shopify.com/s/files/1/0131/9318/3291/files/1-menshairstylestoday.jpg",
      },
      { 
        id: 5,
        productName: "Curly Hair Taper Fade",
        category: "Haircut",
        price: "9",
        image: "https://cdn.luxe.digital/media/2021/09/03120438/men-curly-hairstyles-fancy-curls-with-tapered-design-luxe-digital%402x.jpg",
      },
      { 
        id: 6,
        productName: "Fade With An Undercut",
        category: "Haircut",
        price: "10",
        image: "https://i.pinimg.com/originals/2a/a2/00/2aa2008ec30c0a4b2d3f53f8f526808a.jpg",
      },
      { 
        id: 7,
        productName: "Line Up",
        category: "Haircut",
        price: "9",
        image: "https://content.latest-hairstyles.com/wp-content/uploads/best-mens-line-up-haircuts.jpg",
      },
      { 
        id: 8,
        productName: "The Flat Top",
        category: "Haircut",
        price: "8",
        image: "https://hairmanz.com/wp-content/uploads/2021/04/flat-top-haircuts-32.jpg",
      },
      { 
        id: 9,
        productName: "Slicked Back",
        category: "Haircut",
        price: "11",
        image: "https://i.pinimg.com/564x/50/cf/9e/50cf9e3738e96addda3d9e1186a7ce15.jpg",
      },
      
      { 
        "id": 10,
        "productName": "Loose",
        "category": "style",
        "price": "29",
        "image": "https://headcurve.com/wp-content/uploads/2017/09/loose.jpg",
      },
      { 
        id: 11,
        productName: "Ponytail",
        category: "style",
        price: "20",
        image: "https://headcurve.com/wp-content/uploads/2017/09/ponytail.jpg",
      },
      { 
        id: 12,
        productName: "Braided",
        category: "style",
        price: "12",
        image: "https://headcurve.com/wp-content/uploads/2017/09/woman-braided-hairstyle-sept5.jpg",
      },
      { 
        id: 13,
        productName: "French Twist",
        category: "style",
        price: "60",
        image: "https://www.topofstyle.com/blog/wp-content/uploads/2019/04/10-french-twist-bun.jpg"
      },
      { 
        id: 14,
        productName: "Bun",
        category: "style",
        price: "45",
        image: "https://www.topofstyle.com/blog/wp-content/uploads/2019/04/15-bow-bun.jpg"
      },
      { 
        id: 15,
        productName: "Dutch Braided Low Bun",
        category: "style",
        price: "42",
        image: "https://www.topofstyle.com/blog/wp-content/uploads/2019/04/20-2-braided-bun.jpg"
      },
      { 
        id: 16,
        productName: "Baxter of California Travel Pack",
        category: "Cosmetics",
        price: "50",
        image: "https://maksymchak.github.io/barbershop/img/product-1.jpg"
      },
      { 
        id: 17,
        productName: "Clay for hair styling «American crew»",
        category: "Cosmetics",
        price: "15",
        image: "https://maksymchak.github.io/barbershop/img/product-4.jpg"
      },
      { 
        id: 18,
        productName: "Fishtail Braid Low Bun",
        category: "style",
        price: "54",
        image: "https://www.topofstyle.com/blog/wp-content/uploads/2019/04/20-3-braided-bun.jpg"
      },
      { 
        id: 19,
        productName: "Dutch French Braid Hairstyle",
        category: "style",
        price: "30",
        image: "https://www.topofstyle.com/blog/wp-content/uploads/2019/04/24-dutch-french-braid.jpg"
      }
      
    ]
  }

  for (let i of products.data) {
    let card = document.createElement("div");
    card.classList.add("card", i.category, "hide");

    let imgContainer = document.createElement("div");
    imgContainer.classList.add("image-container");

    let image = document.createElement("img");
    image.setAttribute("src", i.image);
    imgContainer.appendChild(image);
    card.appendChild(imgContainer);

    let container = document.createElement("div");
    container.classList.add("container");

    let name = document.createElement("h5");
    name.classList.add("product-name");
    name.innerText = i.productName.toUpperCase();
    container.appendChild(name);

    let price = document.createElement("h6");
    price.innerText = "$" + i.price;
    container.appendChild(price);
    card.appendChild(container);
    document.getElementById("products").appendChild(card);
  }

  function filterProduct(value) {
    let buttons = document.querySelectorAll(".button-value");
    buttons.forEach((button) => {
      if (value.toUpperCase() == button.innerText.toUpperCase()) {
        button.classList.add("active");
      } else {
        button.classList.remove("active");
      }
    });
    let elements = document.querySelectorAll(".card");
    elements.forEach((element) => {
      if (value == "all") {
        element.classList.remove("hide");
      } else {
        if (element.classList.contains(value)) {
          element.classList.remove("hide");
        } else {
          element.classList.add("hide");
        }
      }
    });
  }
  
  document.getElementById("search").addEventListener("click", () => {
  
    let searchInput = document.getElementById("search-input").value;
    let elements = document.querySelectorAll(".product-name");
    let cards = document.querySelectorAll(".card");
  
    elements.forEach((element, index) => {

      if (element.innerText.includes(searchInput.toUpperCase())) {
  
        cards[index].classList.remove("hide");
      } else {
  
        cards[index].classList.add("hide");
      }
    });
  });
  let productsReviewForm =() => {
   productsReviewForm.addEventListener('submit', (env) => {
     env.preventDefault();
    console.log(`review form ID: ${products.id}`)
     console.log('---------------------------------')
     if(productsReviewText.value !== ''){
        
         products.reviews.push(productsReviewText.value)
         patchBeer(products)
     } else{
         alert('Review is empty string!!')
     }
     
 });
  window.onload = () => {
    filterProduct("all");
  };
}

console.log(products);

