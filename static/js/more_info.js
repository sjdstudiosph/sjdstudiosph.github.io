document.addEventListener('DOMContentLoaded', () => {
    // Retrieve selected item details from localStorage
    const selectedItem = JSON.parse(localStorage.getItem('selectedItem'));

    if (selectedItem) {
        // Populate product details
        document.getElementById('productImage').src = selectedItem.imageSrc;
        document.getElementById('productImage').alt = selectedItem.name;
        document.getElementById('productName').textContent = selectedItem.name;
        document.getElementById('productDesc').textContent = selectedItem.description;
        document.getElementById('productPrice').textContent = `PHP ${selectedItem.price} per day`;

        // Handle "Add to Cart" button
        document.getElementById('addToCart').addEventListener('click', () => {
            addToCart(selectedItem);
            alert(`${selectedItem.name} has been added to your cart.`);
        });
    } else {
        // Redirect to home page if no item data is available
        window.location.href = 'home.html';
    }
});

// Function to add item to cart and store it in localStorage
function addToCart(item) {
    const cart = JSON.parse(localStorage.getItem('cartItems')) || [];
    const cartItem = cart.find(cartItem => cartItem.refNo === item.refNo);
    const currentDate = new Date().toISOString().split('T')[0];
    const endsIn = new Date(new Date().getTime() + 24 * 60 * 60 * 1000).toISOString().split('T')[0];

    if (cartItem) {
        cartItem.quantity = (cartItem.quantity || 1) + 1;  // Increment quantity
        cartItem.subtotal = cartItem.price * cartItem.quantity;  // Update subtotal
    } else {
        // Add new item to cart
        cart.push({
            name: item.name,
            price: item.price,
            quantity: 1,
            subtotal: item.price,
            stock: item.stock,
            imageSrc: item.imageSrc,
            refNo: item.refNo,
            category: item.category,
            startsIn: currentDate,
            endsIn: endsIn,
            description: item.description
        });
    }

    // Update localStorage with the new cart
    localStorage.setItem('cartItems', JSON.stringify(cart));
}
