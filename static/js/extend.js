const cartItems = JSON.parse(localStorage.getItem('cartItems'));
const selectedItem = JSON.parse(localStorage.getItem('selectedItem'));

function calculateCost() {
    const oldDate = document.getElementById("oldDate");
    const dateStart = document.getElementById("dateStart");
    const dateEnd = document.getElementById("dateEnd");
    const itemCostElement = document.getElementById("itemCost");
    const totalCostElement = document.getElementById("totalCost");

    // Set an item cost (modify as needed)
    const itemCost = selectedItem.price;

    // Display the item cost
    itemCostElement.textContent = `Cost per day: PHP ${itemCost}`;


    const oldDateValue = selectedItem.startsIn;
    oldDate.value = oldDateValue;

    // Set minimum start date to today
    const today = new Date().toISOString().split("T")[0];
    dateStart.min = today;
    dateStart.value = today;

    const minEndDate = addDays(new Date(today), 1).toISOString().split("T")[0];
    dateEnd.min = minEndDate;
    dateEnd.value = minEndDate
    console.log(dateEnd.value);

    // Helper function to add days to a date
    function addDays(date, days) {
        const result = new Date(date);
        result.setDate(result.getDate() + days);
        return result;
    }

    // Update total cost whenever dates change
    function updateTotalCost() {
        const startDate = new Date(dateStart.value);
        const endDate = new Date(dateEnd.value);

        // Default to item cost if no dates or invalid range
        let totalCost = itemCost;

        // Calculate total cost if both dates are valid and end date is after start date
        if (startDate && endDate && endDate >= startDate) {
            const days = (endDate - startDate) / (1000 * 60 * 60 * 24);
            totalCost = days * itemCost;
        }

        // Display the total cost
        totalCostElement.textContent = `Total Cost: PHP ${totalCost.toFixed(2)}`;
    }

    // Update end date to be at least one day after start date
    dateStart.addEventListener("change", () => {
        const startDateValue = dateStart.value;
        const startDate = new Date(startDateValue);

        // Set the minimum for the end date to one day after start date
        const minEndDate = addDays(startDate, 1).toISOString().split("T")[0];
        dateEnd.min = minEndDate;

        // If end date is earlier than the new min end date, set it to the new min
        if (new Date(dateEnd.value) < new Date(minEndDate)) {
            dateEnd.value = minEndDate;
        }

        // Update total cost based on the new dates
        updateTotalCost();
    });

    dateEnd.addEventListener("change", () => {
        updateTotalCost();
    });

    // Initial total cost display
    updateTotalCost();
}

function extendButtonListener() {
    const extendButton = document.getElementById("extendButton");

    extendButton.addEventListener("click", () => {
        // save the new date, end date, and total cost to local storage
        const dateStart = document.getElementById("dateStart").value;
        const dateEnd = document.getElementById("dateEnd").value;
        const totalCost = document.getElementById("totalCost").textContent;

        const item = cartItems.find((item) => item.refNo === selectedItem.refNo);
        item.startsIn = dateStart;
        item.endsIn = dateEnd;
        item.totalCost = totalCost;
        localStorage.setItem('cartItems', JSON.stringify(cartItems));
        window.location.href = "../html/cart.html";

    });
}

document.addEventListener("DOMContentLoaded", () => {
    calculateCost();
    extendButtonListener();
});
