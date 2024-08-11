document.addEventListener('DOMContentLoaded', function () {
    fetch('./assets/js/cards.json')
        .then(response => response.json())
        .then(cardsData => {
            console.log(cardsData)
            const cardContainers = document.querySelector('.card-row');

            let currentCardCol = document.createElement('div');
            currentCardCol.classList.add('card-col');
            cardContainers.appendChild(currentCardCol);

            cardsData.forEach((cardData, index) => {
                if (index % 3 === 0 && index > 0) {
                    currentCardCol = document.createElement('div');
                    currentCardCol.classList.add('card-col');
                    cardContainers.appendChild(currentCardCol);
                }
                const cardElement = document.createElement('div');
                cardElement.classList.add('card-body');
                cardElement.setAttribute('onclick', `redirectToProductDetail(${cardData.id})`);
                cardElement.innerHTML = `
                    <div class="card-image">
                        <img class="card-img" src="${cardData.productimage}" alt="${cardData.imagealt}">
                    </div>
                    <div class="card-session-title">
                        <span><p class="session-title">${cardData.sessiontitle}</p></span>
                        <span><p class="product-title">${cardData.producttitle}</p></span>
                        <span><p class="product-price">${cardData.productprice}</p></span>
                        <span><p class="rating">
                            <span class="fa fa-star checked"></span>
                            <span class="fa fa-star checked"></span>
                            <span class="fa fa-star checked"></span>
                            <span class="fa fa-star"></span>
                            <span class="fa fa-star"></span>                        
                        </p></span>
                    </div>
                `;

                
                currentCardCol.appendChild(cardElement);
            });
          })
          .catch(error => console.error('Error fetching product data:', error));
          
        });
        function redirectToProductDetail(productId) {
          window.location.href = `./product.html?id=${productId}`;
      }
        


     

