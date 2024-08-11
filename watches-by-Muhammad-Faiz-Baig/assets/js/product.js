document.addEventListener('DOMContentLoaded', function () {
    const productId = getProductIdFromQueryParam();
    fetchProductDetails(productId);
  });
  
  function getProductIdFromQueryParam() {
    const queryParams = new URLSearchParams(window.location.search);
    return queryParams.get('id') || 1;
  }
  function fetchProductDetails(productId) {
    fetch('./assets/js/cards.json')
        .then(response => response.json())
        .then(cardsData => {
            const selectedProduct = cardsData.find(product => product.id == productId) || {};
            updateProductDetails(selectedProduct);
            
            initializeSplideSliders();
        })
        .catch(error => console.error('Error fetching product details:', error));
  }
  
  function initializeSplideSliders() {
    var main = new Splide('#main-carousel', {
        type: 'fade',
        rewind: true,
        pagination: false,
        arrows: false,
    });
  
    var thumbnails = new Splide('#thumbnail-carousel', {
        fixedWidth: 100,
        fixedHeight: 60,
        gap: 10,
        rewind: true,
        pagination: false,
        isNavigation: true,
        breakpoints: {
            600: {
                fixedWidth: 60,
                fixedHeight: 44,
            },
        },
    });
  
    main.sync(thumbnails);
    main.mount();
    thumbnails.mount();
  }
  
  function updateProductDetails(productDetails) {
    const productDetailsContainer = document.getElementById('productDetailsContainer');
    productDetailsContainer.innerHTML = `
    <section class="section-1">
      <div class="container product_slider">
        <section
          id="main-carousel"
          class="splide slider1"
          aria-label="The carousel with thumbnails. Selecting a thumbnail will change the Beautiful Gallery carousel.">
          <div class="splide__track">
            <ul class="splide__list">
              <li class="splide__slide"><img src="${productDetails.productimage}" alt="" /></li>
              <li class="splide__slide"><img src="${productDetails.productimage1}" alt="" /></li>
              <li class="splide__slide"><img src="${productDetails.productimage2}" alt="" /></li>
              <li class="splide__slide"><img src="${productDetails.productimage3}" alt="" /></li>
            </ul>
          </div>
        </section>
        <section
          id="thumbnail-carousel"
          class="splide slider2"
          aria-label="The carousel with thumbnails. Selecting a thumbnail will change the Beautiful Gallery carousel.">
          <div class="splide__track">
            <ul class="splide__list">
              <li class="splide__slide"><img src="${productDetails.productimage}" alt="${productDetails.imagealt}" /></li>
              <li class="splide__slide"><img src="${productDetails.productimage1}" alt="${productDetails.imagealt}" /></li>
              <li class="splide__slide"><img src="${productDetails.productimage2}" alt="${productDetails.imagealt}" /></li>
              <li class="splide__slide"><img src="${productDetails.productimage3}" alt="${productDetails.imagealt}" /></li>
            </ul>
          </div>
        </section>
      </div>
    </section>
    `;
    const details = document.getElementById('detalis');
    details.innerHTML = `<span class="breadcrumb"><a href="/index.html">Home/</a></span>
    <div class="product-name">
        <h1>${productDetails.producttitle}</h1>
    </div>
    <div class="stars">
        <i class="fa-solid fa-star"></i>
        <i class="fa-solid fa-star"></i>
        <i class="fa-solid fa-star"></i>
        <i class="fa-solid fa-star"></i>
        <i class="fa-solid fa-star"></i>
      </div>
    <div class="product-price">
        <p>${productDetails.productprice}</p>
    </div>
    <div class="product-add-button">
        <button> add to cart</button>
    </div>
    <div class="link">
        <a href="#">More payment option</a>
    </div>
    <div class="product-detail">
        <p>
        Crystal pendulums help in promoting spiritual and physical healing by locating any blocks in a person's energy. They are a simple tool which helps to balance, heal, and clear one's mind and body. Gemstone pendulums are also commonly used to answer questions and provide guidance through an age old practice called dowsing. 
        <br>
        Choose the stone you need:
        <br>
        <ul>
            <li>
                Amethyst- For mental clarity
            </li>
            <li>
                Black Tourmaline - For protection
            </li>
        </ul>
    </p>
    <p>
        Comes with instruction card and chain.
        Measurement of the healing crystal points is approx. 15-25mm x 38-48mm.
    </p>
    </div>`;
  }
  document.addEventListener('DOMContentLoaded', function () {
    const productId = getProductIdFromQueryParam();
    
    fetchProductDetails(productId);
  });
  function getProductIdFromQueryParam() {
    const queryParams = new URLSearchParams(window.location.search);
    return queryParams.get('id') || 1;
  }
  
  const stars = document.querySelectorAll(".stars i");
  // Loop through the "stars" NodeList
  stars.forEach((star, index1) => {
    // Add an event listener that runs a function when the "click" event is triggered
    star.addEventListener("click", () => {
      // Loop through the "stars" NodeList Again
      stars.forEach((star, index2) => {
        // Add the "active" class to the clicked star and any stars with a lower index
        // and remove the "active" class from any stars with a higher index
        index1 >= index2 ? star.classList.add("active") : star.classList.remove("active");
      });
    });
  });