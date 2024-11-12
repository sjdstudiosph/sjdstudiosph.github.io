const cartItems = JSON.parse(localStorage.getItem("cartItems"));
const selectedItem = JSON.parse(localStorage.getItem("selectedItem"));

function cancelButtonListener() {
    let cancelButton = document.getElementById("cancelButton");
    cancelButton.addEventListener("click", () => {
        
        // delete item from cart
        const updatedCartItems = cartItems.filter((item) => item.refNo !== selectedItem.refNo);
        localStorage.setItem('cartItems', JSON.stringify(updatedCartItems));
        window.location.href = "../html/cart.html";
    });
}

function backButtonListener() {
    let backButton = document.getElementById("backButton");
    backButton.addEventListener("click", () => {
        window.history.back();
    });
}

document.addEventListener("DOMContentLoaded", () => {
    cancelButtonListener();
    backButtonListener();
})