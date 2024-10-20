// For the hamburger menu in the header
const bar = document.getElementById("bar");
const close = document.getElementById("close");
const nav = document.getElementById("navbar");
if (bar) {
  bar.addEventListener("click", () => {
    nav.classList.add("active");
  });
}

if (close) {
  close.addEventListener("click", () => {
    nav.classList.remove("active");
  });
}
// To fetch all the products from the url
document.addEventListener("DOMContentLoaded", function () {
  let products = document.querySelector(".pro-container");
  async function fetchProducts(url) {
    try {
      let data = await fetch(url);
      let response = await data.json();
      for (let i = 0; i < response.length; i++) {
        let title = response[i].title;
        let description = response[i].description;
        products.innerHTML += `
            <div class="pro">
              <img src="${response[i].image}" alt="" class="productImage">
              <div class="des">
              <div>
                <h5 class="productTitle">${
                  title.length > 20
                    ? title.substring(0, 20).concat("... more")
                    : title
                }</h5>
                <p class="productDesc"style="text-align:justify">${
                  description.length > 100
                    ? description.substring(0, 100).concat("... more")
                    : description
                }</p>
              </div>
              <div style="display:flex;justify-content:space-between;">
               <h4 class="productPrice">$${response[i].price}</h4>
              <a href="productdetails.html?id=${
                response[i].id
              }" style="text-decoration:none;color:#088178;font-size:16px;"><i class="fa-solid fa-cart-shopping" style="color: #088178;"></i></a>
              </div>
            </div>
        `;
      }
    } catch (err) {
      console.log(err);
    }

    console.log(response);
  }
  fetchProducts("https://fakestoreapi.com/products");
});

// Search function
function search() {
  const searchbox = document.getElementById("inputbox").value.toUpperCase();
  // console.log(searchbox);
  // const searchbox1=searchbox.slice(0,3);
  console.log(searchbox.slice(0, 3));
  const storeitems = document.getElementById("pro-container");
  const productSearch = document.querySelectorAll(".pro");
  const pname = storeitems.getElementsByTagName("h5");
  var count = 0;
  if(searchbox != ''){
      for (var i = 0; i < pname.length; i++) {
        let match = productSearch[i].getElementsByTagName("h5")[0];
        if (match) {
          let textvalue =
            match.textContent ||
            match.innerHTML ||
            document.getElementById("inputbox").value.toUpperCase();
          // console.log(textvalue.slice(0,3));
          let textvalue1 = textvalue.slice(0, 1).toUpperCase();
          let searchbox1 = searchbox.slice(0, 1);
          if (textvalue1 == searchbox1) {
            console.log("found right match");
            console.log("display the searched product" + textvalue);
            count++;
          } else if (textvalue.toUpperCase().indexOf(searchbox) > -1) {
            productSearch[i].style.display = "";
          } else {
            productSearch[i].style.display = "none";
          }
        }
      }
      if (count > 0) {
        alert("No. of products related to your search is.." + count);
        productSearch[i].style.display = "";
      } else {
        alert("No product to show related to your search.");
      }
    }
    else{
      alert("Please Enter Product to search");
    }
}
