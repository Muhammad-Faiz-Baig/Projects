let allCardsData; // store all cards data

document.addEventListener('DOMContentLoaded', function () {
    fetch('./Assets/cards.json')
        .then(response => response.json())
        .then(cardsData => {
            allCardsData = cardsData; // store all cards data for filtering
            renderCards(cardsData);
        })
        .catch(error => console.error('Error fetching product data:', error));
});

function renderCards(cardsData) {
    const cardContainers = document.querySelector('.card-row');
    cardContainers.innerHTML = ''; // clear existing cards

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
                <span>
                    <p class="rating">
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star"></span>
                        <span class="fa fa-star"></span>
                    </p>
                </span>
            </div>
        `;

        currentCardCol.appendChild(cardElement);
    });
}



// function filterCards() {
//     const categoryFilter = document.getElementById('category').value;
//     let filteredCards;

//     if (categoryFilter === 'all') {
//         filteredCards = allCardsData;
//     } else {
//         filteredCards = allCardsData.filter(card => card.category === categoryFilter);
//     }

//     renderCards(filteredCards);
// }
// function filterCards() {
//     const categoryFilter = document.getElementById('category').value;
//     console.log('Selected category:', categoryFilter);

//     let filteredCards;

//     if (categoryFilter === 'all') {
//         filteredCards = allCardsData; // show all cards
//     } else {
//         filteredCards = allCardsData.filter(card => card.category === categoryFilter);
//     }
 
//     console.log('Filtered cards:', filteredCards);

//     renderCards(filteredCards);
// }

function filterCards() {
    const categoryFilter = document.getElementById('category').value.toLowerCase();
    const brandFilter = document.getElementById('brand').value.toLowerCase();
    console.log('Selected category:', categoryFilter);
    console.log('Selected brand:', brandFilter);

    let filteredCards;

    if (categoryFilter === 'all' && brandFilter === 'all') {
        filteredCards = allCardsData; // show all cards
    } else {
        filteredCards = allCardsData.filter(card =>
            (categoryFilter === 'all' || (card.category && card.category.toLowerCase() === categoryFilter)) &&
            (brandFilter === 'all' || (card.brand && card.brand.toLowerCase() === brandFilter))
        );
    }

    console.log('Filtered cards:', filteredCards);

    renderCards(filteredCards);
}





function redirectToProductDetail(productId) {
    window.location.href = `./product.html?id=${productId}`;
}