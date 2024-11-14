const defaultCartItems = [
    {
        name: "Basic Sound Package",
        category: "Audio Equipment",
        price: 800,
        totalCost: 0,
        stock: 5,
        imageSrc: "../../media/sjd/Basic_Sound_Package.png",
        startsIn: "2024-11-11",
        endsIn: "2024-11-15",
        refNo: "012847",
        description: "A comprehensive starter package for basic sound needs, including speakers, a mixer, and cables. Ideal for small events and gatherings."
    },
    {
        name: "Stage Lighting Essentials",
        category: "Lighting Equipment",
        price: 950,
        stock: 4,
        imageSrc: "../../media/sjd/Stage_Lighting_Essentials.png",
        startsIn: "2024-11-11",
        endsIn: "2024-11-28",
        refNo: "024186",
        description: "Essential lighting equipment for stage setups, featuring spotlights, floodlights, and control systems. Perfect for concerts and theater productions."
    },
    {
        name: "Deluxe Lighting Package",
        category: "Lighting Equipment",
        price: 1200,
        stock: 3,
        imageSrc: "../../media/sjd/Deluxe_Lighting_Package.png",
        startsIn: "2024-11-11",
        endsIn: "2024-11-13",
        refNo: "039842",
        description: "A deluxe package for advanced lighting needs, including high-intensity LED lights, moving heads, and a DMX controller. Suitable for large events."
    },
    {
        name: "Premium DJ Set",
        category: "Audio Equipment",
        price: 2000,
        stock: 1,
        imageSrc: "../../media/sjd/Premium_DJ_Set.png",
        startsIn: "2024-11-08",
        endsIn: "2024-11-10",
        refNo: "037198",
        description: "A premium set for professional DJs, featuring high-quality turntables, a mixer, headphones, and speakers. Ideal for clubs and large parties."
    },
    {
        name: "Pro Audio Setup",
        category: "Audio Equipment",
        price: 1500,
        stock: 2,
        imageSrc: "../../media/sjd/Pro_Audio_Setup.png",
        startsIn: "2024-11-09",
        endsIn: "2024-11-11",
        refNo: "017263",
        description: "Professional audio setup for high-quality sound, including powerful speakers, a mixer, and microphones. Perfect for concerts and large events."
    },
    {
        name: "Wireless Microphone Set",
        category: "Audio Equipment",
        price: 300,
        stock: 10,
        imageSrc: "../../media/sjd/Wireless_Microphone_Set.png",
        startsIn: "2024-11-12",
        endsIn: "2024-11-15",
        refNo: "018923",
        description: "A set of wireless microphones for versatile use, including handheld and lapel mics with a receiver. Ideal for presentations and performances."
    },
    {
        name: "LED Uplighting Package",
        category: "Lighting Equipment",
        price: 600,
        stock: 7,
        imageSrc: "../../media/sjd/LED_Uplighting_Package.png",
        startsIn: "2024-11-15",
        endsIn: "2024-11-18",
        refNo: "051287",
        description: "LED uplighting package for ambient lighting, featuring multiple color options and remote control. Perfect for weddings and corporate events."
    },
    {
        name: "Basic Video Package",
        category: "Video Equipment",
        price: 1200,
        stock: 3,
        imageSrc: "../../media/sjd/Basic_Video_Package.png",
        startsIn: "2024-11-20",
        endsIn: "2024-11-25",
        refNo: "065412",
        description: "Basic video package for standard video needs, including a camera, tripod, and lighting. Ideal for recording events and creating content."
    },
    {
        name: "Portable Projector",
        category: "Video Equipment",
        price: 450,
        stock: 5,
        imageSrc: "../../media/sjd/Portable_Projector.png",
        startsIn: "2024-11-16",
        endsIn: "2024-11-18",
        refNo: "073846",
        description: "A portable projector for mobile presentations, featuring high resolution and multiple input options. Perfect for business meetings and home use."
    },
    {
        name: "High-Quality Speaker System",
        category: "Audio Equipment",
        price: 1300,
        stock: 4,
        imageSrc: "../../media/sjd/High-Quality_Speaker_System.png",
        startsIn: "2024-11-09",
        endsIn: "2024-11-14",
        refNo: "045891",
        description: "High-quality speaker system for superior sound, including powerful subwoofers and tweeters. Ideal for home theaters and large venues."
    },
    {
        name: "Fog Machine",
        category: "Special Effects",
        price: 250,
        stock: 8,
        imageSrc: "../../media/sjd/Fog_Machine.png",
        startsIn: "2024-11-10",
        endsIn: "2024-11-13",
        refNo: "038674",
        description: "Fog machine for special effects, featuring high output and remote control. Perfect for parties, concerts, and theatrical productions."
    },
    {
        name: "Advanced Laser Lighting",
        category: "Lighting Equipment",
        price: 1700,
        stock: 2,
        imageSrc: "../../media/sjd/Advanced_Laser_Lighting.png",
        startsIn: "2024-11-18",
        endsIn: "2024-11-23",
        refNo: "082734",
        description: "Advanced laser lighting for spectacular shows, featuring multiple patterns and colors. Ideal for concerts, clubs, and large events."
    },
    {
        name: "4K Camera Setup",
        category: "Video Equipment",
        price: 2200,
        stock: 1,
        imageSrc: "../../media/sjd/4K_Camera_Setup.png",
        startsIn: "2024-11-15",
        endsIn: "2024-11-17",
        refNo: "092154",
        description: "4K camera setup for high-resolution video, including a camera, lenses, and accessories. Perfect for professional videography and filmmaking."
    },
    {
        name: "Mini LED Moving Head Lights",
        category: "Lighting Equipment",
        price: 500,
        stock: 6,
        imageSrc: "../../media/sjd/Mini_LED_Moving_Head_Lights.png",
        startsIn: "2024-11-19",
        endsIn: "2024-11-22",
        refNo: "037284",
        description: "Mini LED moving head lights for dynamic lighting, featuring multiple colors and patterns. Ideal for parties, clubs, and stage performances."
    },
    {
        name: "High-Power Subwoofer",
        category: "Audio Equipment",
        price: 900,
        stock: 3,
        imageSrc: "../../media/sjd/High-Power_Subwoofer.png",
        startsIn: "2024-11-14",
        endsIn: "2024-11-18",
        refNo: "073982",
        description: "High-power subwoofer for deep bass, featuring high output and low distortion. Perfect for home theaters and large venues."
    }
];
    

function generateGridItems(numberOfItems, products) {
    const gridContainer = document.querySelector('.grid-container');
    gridContainer.innerHTML = '';

    for (let i = 0; i < numberOfItems; i++) {
        const gridItem = document.createElement('div');
        gridItem.classList.add('grid-item');

        const inputId = `numberInput-${i}`;
        const buttonId = `addToCartButton-${i}`;

        gridItem.innerHTML = `
            <img src="${products[i].imageSrc}" alt="Product image" class="itemImage">
            <div class="item-info">
                <h3 class="itemName" title="${products[i].name}">${products[i].name}</h3>
                <div class="item-pricing-box">
                    <h2 class="itemPrice">PHP ${products[i].price}</h2>
                    <!-- <p class="inStocks">In stocks: ${products[i].stock}</p> -->
                    <p>Ref: ${products[i].refNo}</p>
                </div>
                <button class="addToCartButton" id="${buttonId}">Add</button>
                <button class="moreInfoButton" id="moreInfoButton-${i}">More Info</button>
            </div>
        `;
        gridContainer.appendChild(gridItem);
        
        document.getElementById(buttonId).addEventListener('click', () => {
            addToCart(products[i]);
        });
        document.getElementById(`moreInfoButton-${i}`).addEventListener('click', () => {
            localStorage.setItem('selectedItem', JSON.stringify(products[i]));
            const url = '../html/more_info.html';
            window.location.href = url;
        });
    }
}

function addToCart(item) {
    const cart = JSON.parse(localStorage.getItem('cartItems')) || [];
    const cartItem = cart.find(cartItem => cartItem.name === item.name);
    const currentDate = new Date().toISOString().split('T')[0];
    
    // will end in currentDate + 1 day
    const endsIn = new Date(new Date().getTime() + 24 * 60 * 60 * 1000).toISOString().split('T')[0];

    if (cartItem) {
        cartItem.quantity += item.quantity;
        cartItem.subtotal += item.subtotal;
    } else {
        cart.push({
            name: item.name,
            price: item.price,
            quantity: item.quantity,
            subtotal: item.subtotal,
            stock: item.stock,
            imageSrc: item.imageSrc,
            refNo: item.refNo,
            category: item.category,
            startsIn: currentDate,
            endsIn: endsIn,
            description: item.description
        });
    }
    localStorage.setItem('cartItems', JSON.stringify(cart));
    alert(`${item.name} has been added to your cart.`);
}

document.addEventListener('DOMContentLoaded', () => {
    generateGridItems(defaultCartItems.length, defaultCartItems);
});