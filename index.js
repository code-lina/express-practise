// Products
const products = [
    {
      id: 1,
      title: 'Black Set of Long Top and Shorts',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nuncbibendum, quam id cursus vehicula, lorem quam ultricies nisl.',
      image: 'assets/black-set.jpg'
    },
    {
      id: 2,
      title: 'White Set of Long Top and Shorts',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nuncbibendum, quam id cursus vehicula, lorem quam ultricies nisl.',
      image: 'assets/white-set.jpg'
    },
    // more product objects will be here
  ];


// Add products to the landing page
const productContainer = document.getElementById('product-list');
products.forEach(product => {
  const productCard = createProductCard(product);
  productContainer.appendChild(productCard);
});

// Create a product card
function createProductCard(product) {
  const card = document.createElement('div');
  card.classList.add('product-card');

  const image = document.createElement('img');
  image.src = product.image;
  image.alt = product.title;
  card.appendChild(image);

  const title = document.createElement('h3');
  title.textContent = product.title;
  card.appendChild(title);

  const description = document.createElement('p');
  description.textContent = product.description;
  card.appendChild(description);

  const addToCartBtn = document.createElement('button');
  addToCartBtn.textContent = 'Add to Cart';
  card.appendChild(addToCartBtn);

  addToCartBtn.addEventListener('click', () => { 
    const productId = product.id; 
    addToCart(productId);
});

  return card;
}


// Function to add product to cart
function addToCart(productId) {
    const product = getProductById(productId);
    if (product) {
      cartItems.push(productId);
      console.log(`Product ${productId} added to cart.`);
    } else {
      console.error('Product not found.');
    }
  }
  


// Display the landing page
function showLandingPage() {
    const landingPage = document.getElementById('landing-page');
    const catalogContainer = document.getElementById('catalog-container');
  
    landingPage.style.display = 'block';
    catalogContainer.style.display = 'none';
  }
  
  // Display the catalog page
  function showCatalogPage() {
    const landingPage = document.getElementById('landing-page');
    const catalogContainer = document.getElementById('catalog-container');
  
    landingPage.style.display = 'none';
    catalogContainer.style.display = 'block';
  
    // Render the catalog using the innerHTML property
    const catalogIframeCode = '<iframe style="display: block; box-sizing: border-box;" src="https://view.publitas.com/alina-burova/brand-catalog/?publitas_embed=maximized" frameborder="0" allowfullscreen="allowfullscreen"></iframe>';
    catalogContainer.innerHTML = catalogIframeCode;
  }

  //event listener for catalog page
  document.getElementById('catalog-btn').addEventListener('click', showCatalogPage);
  