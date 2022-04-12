"use strict";

// window.onload = function(){
//     let thumbnails = document.querySelectorAll("ul img");
//     for(let i = 0; i < thumbnails.length; i++){
//         thumbnails[i].onclick = processOrder;
//     }
// }

// jQuery equivalent of window.onload event
$(function(){
    $("ul img").click(processOrder);
    $("#clear_order").click(clearOrder);

    $("#place_order").click(placeOrder);
    
    let allImages = document.querySelectorAll("ul img");
    for(let i = 0; i < allImages.length; i++){
        let currImage = allImages[i];
        let hoverImageUrl = currImage.getAttribute("id");
        
        // preload the images
        let hoverImage = new Image(); // <img> 
        hoverImage.src = hoverImageUrl;
    }

    // Set up image rollover
    for(let i = 0; i < allImages.length; i++){
        let currImage = allImages[i];
        let origUrl = currImage.getAttribute("src");
        
        currImage.onmouseover = function(){
            let hoverUrl = currImage.getAttribute("id");
            currImage.setAttribute("src", hoverUrl);
        };

        currImage.onmouseout = function(){
            currImage.setAttribute("src", origUrl);
        }
    }

})

function placeOrder(){
    $("#orderForm").submit(); //how to submit in jquery
    //document.getElementById("orderForm").submit(); // JS equivalent to submit 
}

function clearOrder(){
    totalPrice = 0;// Reset price in memory after order is cleared
    $("#total").html("");// Reset price on webpage
    //$("#order").html("");//jQuery
    document.getElementById("order").innerHTML = "";
}

let totalPrice = 0;
function processOrder(event){
    //get image that triggered event
    let currImg = this;

    //get curr order out of drop down list
    let currOrder = document.getElementById("order").innerHTML;

    //if no order is present set to an empty string
    if(currOrder == undefined){
        currOrder = "";
    }

    let hoverImageUrl = currImg.getAttribute("id");
    // add selection to select list
    if (hoverImageUrl == "images/biscotti_info.jpg") {
        currOrder += '<option value="biscotti">$1.95 - Biscotti</option>';
        totalPrice += 1.95; 
    } else if (hoverImageUrl == "images/cappuccino_info.jpg") {
        currOrder += '<option value="cappuccino">$3.45 - Cappuccino</option>';
        totalPrice += 3.75;
    } else if (hoverImageUrl == "images/coffee_info.jpg") {
        currOrder += '<option value="drip">$1.75 - Drip coffee</option>';
        totalPrice += 1.75;
    } else if (hoverImageUrl == "images/espresso_info.jpg") {
        currOrder += '<option value="expresso">$1.95 - Espresso</option>';
        totalPrice += 1.95;
    } else if (hoverImageUrl == "images/latte_info.jpg") {
        currOrder += '<option value="latte">$2.95 - Latte</option>';
        totalPrice += 2.95;
    } else if (hoverImageUrl == "images/scone_info.jpg") {
        currOrder += '<option value="scone">$2.95 - Scone</option>';
        totalPrice += 2.95;
    }

    $("#total").text("$" + totalPrice.toFixed(2));// toFixed(2) goes over 2 decimal places
    //document.getElementById("total").innerText = "$" + totalPrice;

    //display order
    document.getElementById("order").innerHTML = currOrder;

    //prevent anchor tags from navigating
    event.preventDefault();
}

    