document.addEventListener('DOMContentLoaded', () => {
    const cartItemsContainer = document.getElementById('cart-items');
    const clearCartButton = document.getElementById('clear-cart');
  
    clearCartButton.addEventListener('click', clearCart);
  
    // Function to retrieve cart items from the server

    function getCartItems() {
      return fetch('/cart')
        .then((response) => response.json())
        .then((data) => data.cartItems)
        .catch((error) => {
          console.error('Error:', error);
        });
    }
  
    // Function to display cart items
    function displayCartItems() {
      getCartItems().then((cartItems) => {
        cartItemsContainer.innerHTML = '';
    
        cartItems.forEach((item) => {
          const cartItem = document.createElement('div');
    
          const title = document.createElement('h3');
          title.textContent = item.title;
          cartItem.appendChild(title);
    
          const description = document.createElement('p');
          description.textContent = item.description;
          cartItem.appendChild(description);
    
          cartItemsContainer.appendChild(cartItem);
        });
      });
    }
    
  
    // Function to clear the cart
    function clearCart() {
      fetch('/cart.html', {
        method: 'DELETE',
      })
        .then((response) => response.json())
        .then((data) => {
          console.log(data.message);
          cartItemsContainer.innerHTML = '';
        })
        .catch((error) => {
          console.error('Error:', error);
        });
    }
  
    displayCartItems();
  });
  