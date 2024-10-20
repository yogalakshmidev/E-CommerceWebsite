const productContainer=document.querySelector(`#productContainer`);
const spinner=document.querySelector('#loading');
console.log(productContainer);

async function SingleProductDetails() {
try{
  spinner.style.display="inline-block";
  const productId = new URLSearchParams(window.location.search).get("id");
  const response = await fetch(`https://fakestoreapi.com/products/${productId}`);
  const product = await response.json();
  console.log(product,productId)
  displayProductDetails(product)
}catch(err){
  console.log("Error Message ..."+err )
}
 
}
function displayProductDetails(product){
  spinner.style.display="none";
  productContainer.innerHTML=`
  
       <div class="pro1">
          <div class="productImage">
            <img src=${product.image} alt="" />
          </div>
          <div class="productDes">
            <p class="proTitle">${product.title}</p>
            <p class="proDescription">${product.description}</p>
            <p class="proQuantity">$${product.price}</p>
          </div>
        </div>
  
  `

}
SingleProductDetails();