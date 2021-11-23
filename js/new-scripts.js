const PRODUCTS = {
    product_1: {
        id: "product_1",
        name: "Quad-Fold Tonneau Cover",
        description: "Aluminium hard, four-fold truck bed cover.",
        price: 450,
        image: "img/tc-4f.png" 
    }, product_2: {
        id: "product_2",
        name: "Retractable Tonneau Cover",
        description: "Aluminium retractable roll-up truck bed cover.",
        price: 650,
        image: "img/tc-r-v1.png"  
    }, product_3: {
        id: "product_3",
        name: "Off-Road Ready Retractable Tonneau Cover",
        description: "Off-road aluminium retractable roll-up truck bed cover.",
        price: 800,
        image: "img/tc-r-v2.png" 
    }, product_4: {
        id: "product_4",
        name: "Red Strobe Brake Light",
        description: "A pair of LED bulbs for brake lights that will flash 4 times with you step on brake.",
        price: 24,
        image: "img/fan.png" 
    }, product_5: {
        id: "product_5",
        name: "Error-Free Switchback LED Front Turn Signal Lights",
        description: "A pair of LED bulbs for front turn signal lights (yellow) and daytimg running light (white).",
        price: 28,
        image: "img/ef-3157-v4.png"  
    }, product_6: {
        id: "product_6",
        name: "High Power LED Headlight Bulbs",
        description: "A pair of 9006 headlight, low beam bulbs",
        price: 30,
        image: "img/9006-csp-zl.png"  
    }, product_7: {
        id: "product_7",
        name: "RGB Bluetooth-Contorlled Headlight Bulbs",
        description: "RGB headlight bulbs with bluetooth connection on your phone.",
        price: 350,
        image: "img/csp-rgb.png"  
    }, product_8: {
        id: "product_8",
        name: "Heavy Duty Truck Bed Ladder Rack",
        description: "Heavy duty ladder rack for truck bed, painted black.",
        price: 350,
        image: "img/rack-001.png"  
    }, product_9: {
        id: "product_9",
        name: "Heavy Duty Cargo Truck Bed Rack",
        description: "Heavy duty cargo rack for truck bed, painted black.",
        price: 350,
        image: "img/rack-002.png"  
    }
};


$(document).ready(function(){

    showProducts();
});

function getProductHTML(productId) {
    // Obtain product data from the PRODUCTS object
    const product = PRODUCTS[productId];   

    // CLONE an HTML element to use as a template
    const productHTML = $( "#product-template" ).clone();

     // Delete id to avoid duplicates
    productHTML.prop('id', '');   

    // FIND and UPDATE the product's name
    productHTML.find(".product-name").text(product.name);
    productHTML.find(".product-price").text(product.price);
 
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

