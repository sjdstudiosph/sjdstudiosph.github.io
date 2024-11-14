// function generateGridItems(numberOfItems, products) {
//     const gridContainer = document.querySelector('.grid-container');
//     gridContainer.innerHTML = '';

//     for (let i = 0; i < numberOfItems; i++) {
//         const gridItem = document.createElement('div');
//         gridItem.classList.add('grid-item');

//         const inputId = `numberInput-${i}`;
//         const buttonId = `addToCartButton-${i}`;

//         gridItem.innerHTML = `
//             <img src="${products[i].imageSrc}" alt="Product image" class="itemImage">
//             <div class="item-info">
//                 <h3 class="itemName" title="${products[i].name}">${products[i].name}</h3>
//                 <div class="item-pricing-box">
//                     <h2 class="itemPrice">PHP ${products[i].price}</h2>
//                     <!-- <p class="inStocks">In stocks: ${products[i].stock}</p> -->
//                     <p>Ref: ${products[i].refNo}</p>
//                 </div>
//                 <button class="addToCartButton" id="${buttonId}">Add</button>
//             </div>
//         `;
//         gridContainer.appendChild(gridItem);
        
//         document.getElementById(buttonId).addEventListener('click', () => {
//             const quantity = parseInt(document.getElementById(inputId).value, 10);
//             if (quantity > 0) {
//                 addToCart({
//                     inputId: inputId,
//                     buttonId: buttonId,
//                     name: products[i].name,
//                     price: products[i].price,
//                     quantity: quantity,
//                     subtotal: products[i].price * quantity,
//                     stock: products[i].stock,
//                     imageSrc: products[i].imageSrc,
//                     referenceNumber: products[i].refNo
//                 });
//             } else {
//                 document.getElementById(inputId).style.border = '1px solid red';
//                 setTimeout(() => document.getElementById(inputId).style.border = '1px solid #ccc', 2000);
//             }
//         });
//     }
// }

// function addToCart(item) {
//     const cart = JSON.parse(localStorage.getItem('cartItems')) || [];
//     const cartItem = cart.find(cartItem => cartItem.name === item.name);
//     if (cartItem) {
//         cartItem.quantity += item.quantity;
//         cartItem.subtotal += item.subtotal;
//     } else {
//         cart.push({
//             name: item.name,
//             price: item.price,
//             quantity: item.quantity,
//             subtotal: item.subtotal,
//             stock: item.stock,
//             imageSrc: item.imageSrc,
//             referenceNumber: item.referenceNumber
//         });
//     }
//     localStorage.setItem('cartItems', JSON.stringify(cart));
// }

// document.addEventListener('DOMContentLoaded', () => {
//     generateGridItems(defaultCartItems.length, defaultCartItems);
// });

function loadCartItems() {
    const storedCartItems = localStorage.getItem('cartItems');
    
    if (storedCartItems) {
        return JSON.parse(storedCartItems);
    } else {
        localStorage.setItem('cartItems', JSON.stringify(defaultCartItems));
        return defaultCartItems;
    }
}

let cartItems = loadCartItems();

function calculateDaysLeft(endsIn) {
    const endDate = new Date(endsIn);
    const currentDate = new Date(); // Use today's date
    const timeDifference = endDate - currentDate;
    return Math.floor(timeDifference / (1000 * 60 * 60 * 24)) + 1; // Add 1 to include the end date
}

function setStatusAndDaysLeft(cartItems) {
    cartItems.forEach(item => {
        const daysLeft = calculateDaysLeft(item.endsIn);

        // set total cost based on days left
        item.totalCost = item.price * Math.max(daysLeft, 0); // No negative total cost

        // Determine item status
        if (daysLeft > 5) {
            item.status = "ongoing";
        } else if (daysLeft > 0 && daysLeft <= 5) {
            item.status = "near";
        } else {
            item.status = "expired";
        }

        item.daysLeft = daysLeft > 0 ? daysLeft : 0; // Display 0 days if expired
    });
}


function sortCartItems(cartItems) {
    const statusOrder = { "ongoing": 1, "near": 2, "expired": 3 };
    return cartItems.sort((a, b) => statusOrder[a.status] - statusOrder[b.status]);
}

function handleButtonClick(item, action) {
    localStorage.setItem('selectedItem', JSON.stringify(item));

    let redirectUrl = '';
    switch (action) {
        case 'extend':
            redirectUrl = '../html/extend.html';
            break;
        case 'cancel':
            redirectUrl = '../html/cancel.html';
            break;
        case 'moreInfo':
            redirectUrl = '../html/more_info.html';
            break;
    }

    window.location.href = redirectUrl;
}

function generateCartItems(cartItems) {
    setStatusAndDaysLeft(cartItems);
    const sortedItems = sortCartItems(cartItems);
    const cartListContainer = document.querySelector('.cart-list-container');
    cartListContainer.innerHTML = '';

    sortedItems.forEach(item => {
        const cartItemDiv = document.createElement('div');
        cartItemDiv.classList.add('cart-item');

        const img = document.createElement('img');
        img.classList.add('itemImage');
        img.src = item.imageSrc;
        img.alt = item.name;

        const cartItemInfo = document.createElement('div');
        cartItemInfo.classList.add('cart-item-info', `status-${item.status}`);

        const infoTop = document.createElement('div');
        infoTop.classList.add('infoTop');

        const infoTopLeft = document.createElement('div');
        infoTopLeft.classList.add('infoTopLeft');

        const itemName = document.createElement('h1');
        itemName.classList.add('itemName');
        itemName.textContent = item.name;

        const itemCategory = document.createElement('p');
        itemCategory.classList.add('itemCategory');
        itemCategory.textContent = `Category: ${item.category}`;

        infoTopLeft.appendChild(itemName);
        infoTopLeft.appendChild(itemCategory);

        const infoTopRight = document.createElement('div');
        infoTopRight.classList.add('infoTopRight');

        const itemStartsIn = document.createElement('p');
        itemStartsIn.classList.add('itemStartsIn');
        itemStartsIn.textContent = `STARTS IN: ${item.startsIn}`;

        const daysLeftText = item.daysLeft > 0 ? `${item.daysLeft}d` : "Expired";
        const itemEndsIn = document.createElement('p');
        itemEndsIn.classList.add('itemEndsIn');
        itemEndsIn.textContent = `ENDS IN: ${item.endsIn} (${daysLeftText})`;

        const itemRefNo = document.createElement('p');
        itemRefNo.classList.add('itemRefNo');
        itemRefNo.textContent = `Ref: ${item.refNo}`;

        infoTopRight.appendChild(itemStartsIn);
        infoTopRight.appendChild(itemEndsIn);
        infoTopRight.appendChild(itemRefNo);

        infoTop.appendChild(infoTopLeft);
        infoTop.appendChild(infoTopRight);

        const infoBottom = document.createElement('div');
        infoBottom.classList.add('infoBottom');

        const itemPrice = document.createElement('h1');
        itemPrice.textContent = `PHP ${item.price.toFixed(2)} per day`;

        const totalCost = document.createElement('h1');
        totalCost.textContent = `Total Cost: PHP ${item.totalCost.toFixed(2)}`;

        const itemButtons = document.createElement('div');
        itemButtons.classList.add('itemButtons');

        const extendButton = document.createElement('button');
        extendButton.classList.add('extendButton');
        extendButton.textContent = 'Extend';
        extendButton.addEventListener('click', () => handleButtonClick(item, 'extend'));

        const cancelButton = document.createElement('button');
        cancelButton.classList.add('cancelButton');
        cancelButton.textContent = 'Cancel';
        cancelButton.addEventListener('click', () => handleButtonClick(item, 'cancel'));

        const moreDetailsButton = document.createElement('button');
        moreDetailsButton.classList.add('moreDetailsButton');
        moreDetailsButton.textContent = 'More Details';
        moreDetailsButton.addEventListener('click', () => handleButtonClick(item, 'moreInfo'));

        itemButtons.appendChild(extendButton);
        itemButtons.appendChild(cancelButton);
        itemButtons.appendChild(moreDetailsButton);

        infoBottom.appendChild(itemPrice);
        infoBottom.appendChild(totalCost);
        infoBottom.appendChild(itemButtons);

        cartItemInfo.appendChild(infoTop);
        cartItemInfo.appendChild(infoBottom);

        cartItemDiv.appendChild(img);
        cartItemDiv.appendChild(cartItemInfo);

        cartListContainer.appendChild(cartItemDiv);
    });
}

document.addEventListener("DOMContentLoaded", () => {
    generateCartItems(cartItems);
});
