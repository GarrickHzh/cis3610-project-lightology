const PRODUCTS = {
    product_1: {
        id: "product_1",
        name: "Red Strobe Brake Light",
        description: "A pair of LED bulbs for brake lights that will flash 4 times with you step on brake.",
        price: 24,
        image: "img/fan.png" 
    }, product_2: {
        id: "product_2",
        name: "Error-Free Switchback LED Front Turn Signal Lights",
        description: "A pair of LED bulbs for front turn signal lights (yellow) and daytimg running light (white).",
        price: 28,
        image: "img/ef-3157-v4.png"  
    }, product_3: {
        id: "product_3",
        name: "High Power LED Headlight Bulbs",
        description: "A pair of 9006 headlight, low beam bulbs",
        price: 30,
        image: "img/9006-csp-zl.png"  
    }, product_4: {
        id: "product_4",
        name: "RGB Bluetooth-Contorlled Headlight Bulbs",
        description: "RGB headlight bulbs with bluetooth connection on your phone.",
        price: 50,
        image: "img/csp-rgb.png"  
    }, product_5: {
        id: "product_5",
        name: "F-150 LED Projector Headlights",
        description: "2015-2017 F-150 LED Tube Sequential Switchback Matte Black Projector Headlights.",
        price: 550,
        image: "img/headlight-1.png"  
    }, product_6: {
        id: "product_6",
        name: "F-150 LED Projector Headlights",
        description: "2018-2020 Ford F-150 LED Tube DRL Switchback Chrome Clear Projector Headlights.",
        price: 550,
        image: "img/headlight-2.png"  
    }, product_7: {
        id: "product_7",
        name: "RAM LED Projector Headlights",
        description: "2009-2018 Ram 1500/2500/3500 LED DRL Matte Black Dual Projector Headlights Set.",
        price: 350,
        image: "img/headlight-3.png"  
    }   
};


$(document).ready(function(){

    showProducts();
});

function getProductHTML(productId) {
    // Obtain product data from the PRODUCTS object
    const product = PRODUCTS[productId];   

    // CLONE an HTML element to use as a template
    const productHTML = $( "#products-template" ).clone();

     // Delete id to avoid duplicates
    productHTML.prop('id', '');   

    // FIND and UPDATE the product's name
    productHTML.find(".product-name").text(product.name);
    productHTML.find(".product-description").text(product.description);
    productHTML.find(".product-price").text('$'+ product.price);
 
    // FIND and UPDATE the product's image properties
    productHTML.find("img").
        prop("src", product.image).
        prop("alt", product.name);

    // Remove .d-none to make the product visible
    productHTML.removeClass("d-none");

    return productHTML;
}

// Show all products
function showProducts() {
    // Traverse the products object
    for(let productId in PRODUCTS) {
        const product = PRODUCTS[productId];

        // Generate each product's HTML
        const productHTML = getProductHTML(product.id);

        /* Append the cutomized HTML for each product to the products
           container on the webpage */
        $("#products").append(productHTML);
    }
}


