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
        name: "Heavy Duty Truck Bed Ladder Rack",
        description: "Heavy duty ladder rack for truck bed, painted black.",
        price: 350,
        image: "img/rack-001.png"  
    }, product_5: {
        id: "product_5",
        name: "Heavy Duty Cargo Truck Bed Rack",
        description: "Heavy duty cargo rack for truck bed, painted black.",
        price: 400,
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
    const productHTML = $( "#products-template" ).clone();

     // Delete id to avoid duplicates
    productHTML.prop('id', '');   

    // FIND and UPDATE the product's name
    productHTML.find(".product-name").text(product.name);
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


