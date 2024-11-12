const cartItems = JSON.parse(localStorage.getItem('cartItems'));
const selectedItem = JSON.parse(localStorage.getItem('selectedItem'));

function calculateCost() {
    const oldDate = document.getElementById("oldDate");
    const dateStart = document.getElementById("dateStart");
    const dateEnd = document.getElementById("dateEnd");
    const itemCostElement = document.getElementById("itemCost");
    const totalCostElement = document.getElementById("totalCost");

    const itemCost = selectedItem.price;
    itemCostElement.textContent = `Cost per day: PHP ${itemCost}`;
    const oldDateValue = selectedItem.startsIn;
    oldDate.value = oldDateValue;

    const today = new Date().toISOString().split("T")[0];
    dateStart.min = today;
    dateStart.value = today;

    const minEndDate = addDays(new Date(today), 1).toISOString().split("T")[0];
    dateEnd.min = minEndDate;
    dateEnd.value = minEndDate
    console.log(dateEnd.value);

    function addDays(date, days) {
        const result = new Date(date);
        result.setDate(result.getDate() + days);
        return result;
    }

    function updateTotalCost() {
        const startDate = new Date(dateStart.value);
        const endDate = new Date(dateEnd.value);

        let totalCost = itemCost;
        if (startDate && endDate && endDate >= startDate) {
            const days = (endDate - startDate) / (1000 * 60 * 60 * 24);
            totalCost = days * itemCost;
        }

        totalCostElement.textContent = `Total Cost: PHP ${totalCost.toFixed(2)}`;
    }

    dateStart.addEventListener("change", () => {
        const startDateValue = dateStart.value;
        const startDate = new Date(startDateValue);

        const minEndDate = addDays(startDate, 1).toISOString().split("T")[0];
        dateEnd.min = minEndDate;

        if (new Date(dateEnd.value) < new Date(minEndDate)) {
            dateEnd.value = minEndDate;
        }

        updateTotalCost();
    });

    dateEnd.addEventListener("change", () => {
        updateTotalCost();
    });

    updateTotalCost();
}

function extendButtonListener() {
    const extendButton = document.getElementById("extendButton");

    extendButton.addEventListener("click", () => {
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
