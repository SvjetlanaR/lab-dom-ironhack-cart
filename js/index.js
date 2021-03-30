// ITERATION 1

function updateSubtotal(product) {

  const price = product.querySelector('.price span');
  const quantity = product.querySelector('.quantity input');

  //console.log(price, quantity);
  
  const priceContent = price.innerText;
  const quantityValue = quantity.value;

  console.log(priceContent, quantityValue);

  let subTotal = priceContent * quantityValue;
  console.log(subTotal)


  let total = document.querySelector('.subtotal span')
  total.innerText = subTotal;

  return subTotal;
  
  //... your code goes here
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  //return updateSubtotal() 
  //const productSubtotal = document.getElementsByClassName('.subtotal span')
  //console.log(productsSubtotal);
  
   

  // it runs when only iteration 1 is completed. at later point, it can be removed.
  const allProduct = document.querySelectorAll('.product');
  console.log(allProduct)
  let sum = 0;
  allProduct.forEach(function(product) {
    sum += updateSubTotal(product);
  }) 

  



  //updateSubtotal(singleProduct);
  // end of test

  // ITERATION 2


  //... your code goes here

  // ITERATION 3
  //... your code goes here
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
  //... your code goes here
}

// ITERATION 5

function createProduct() {
  //... your code goes here
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  //... your code goes here
});
