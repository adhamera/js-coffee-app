"use strict";

// function, addItemToCart takes param itemName
// using id of cart-items
// appends itemName to table
const addItemToCart = (itemName) => {
  $('#cart-items').append(`
    <tr>
      <td>${itemName}</td>
    </tr>
  `);
};

// function resetCart does not take a parameter
//take the id cart-total changing the html total to 0.00 
//take the id cart-items and use the jquery method empty to clear cart-items
const resetCart = () => {
  $('#cart-total').html('0.00');
  $('#cart-items').empty();
};

// function, incrementCartTotal, takes param, price
// sets variable, cartTotal equal to id, cart-total (const - immutable)
// sets variable, total, equal to Number function with html cartTotal
// add price to total
// changing inner html
const incrementCartTotal = (price) => {
  const cartTotal = $('#cart-total');

  let total = Number(cartTotal.html());
  total += price; 

  cartTotal.html(total.toFixed(2));
};

//function called incrementCoffeeSold with parameter of amountSold
//set variable of let called coffeeSold
//coffeeSold will take Number function and covert id of coffee-sold-counter html to integer
// amountSold will be added to coffeeSold
//id coffee-sold-counter will take variable of coffeeSold and update coffee counter to html
const incrementCoffeeSold = (amountSold) => {
  let coffeeSold = Number($('#coffee-sold-counter').html());
  coffeeSold += amountSold;

  $('#coffee-sold-counter').html(coffeeSold);
};

// function, setProgressAndStatus, which takes two params, progressVal, statusMsg
// using id, order-progress, set the attribute-value pair, progressVal
// id order-status-message takes variable of statusMsg and updates it to html
const setProgressAndStatus = (progressVal, statusMsg) => {
  $('#order-progress').attr('value', progressVal);
  $('#order-status-message').html(statusMsg);
};


//
// Add your event handlers below.
//

$('.add-to-order').on('click',() =>{
  //callback functions
  addItemToCart('Coffee');
  incrementCartTotal(1.50);
});

// id of place-order uses on click event handler
// callback function incrementCoffeeSold takes id cart-items, which refers to children (coffee) and the length
// resets cart
$('#place-order').on('click', () => {
  incrementCoffeeSold($('#cart-items').children().length);
  resetCart();
});

// $('.add-to-order').addEventListener('click', (evt) => {
//   alert('You clicked me!');
// });