"use strict";

var $ = function(id) {
    return document.getElementById(id);
}

function onLoad(){
    return makeChange(), centsIcon(), playAudio();
}

/* HERE'S MY LINE OF CODE TO NOT ACCEPT ANYTHING OVER 100 OR UNDER 0
function processEntry(){
    let getInput = parseInt($("cents").value);
        if(getInput >= 100 || getInput < 0){
            alert("Please enter a valid number (0 - 99)");
        }
        else{
            console.log("Change was not negative");
        }
} 


/*
I DECIDED TO PUT MY PROCESS ENTRY INTO MY MAKE CHANGE FUNCTION FOR THE EXTRA CREDIT
SO I CAN REMOVE THE GREATER THAN 100 IF STATEMENT
*/
function makeChange(){
    const dollarValue = 1.00;
    const quarterValue = .25;
    const dimeValue = .10;
    const nickelValue = .05;
    const pennyValue = .01;

    let getChange = parseFloat($("cents").value);
        if (getChange < 0){
            alert("Please enter a valid number (You cannot have negative change)")
        }
        else{
            console.log("Change was not negative");
        }

    let calculateDollars = getChange / dollarValue;
    $("dollars").value = Math.floor(calculateDollars);

    let remainderCents = getChange % dollarValue;

    let calculateQuarters = remainderCents / quarterValue;
    $("quarters").value = Math.floor(calculateQuarters);

    let remainderQuarters = getChange % quarterValue;

    let calculateDimes = remainderQuarters / dimeValue;
    $("dimes").value = Math.floor(calculateDimes);

    let remainderDimes = remainderQuarters % dimeValue;

    let calculateNickels = remainderDimes / nickelValue;
    $("nickels").value = Math.floor(calculateNickels);

    let remainderNickels = remainderDimes % nickelValue;

    let calculatePennies = remainderNickels / pennyValue;
    $("pennies").value = Math.round(calculatePennies);

}

function centsIcon() {
    var cents = document.createElement("IMG");
    cents.setAttribute("src", "/pictures/cent.png");
    cents.setAttribute("width", "100");
    cents.setAttribute("height", "100");
    cents.setAttribute("id", "CentsIcon");
    document.body.appendChild(cents);
    $("CentsIcon").style.marginLeft = "55px";
  }


function playAudio() {
    var audio = $("coinRattle");
    audio.play();
}

function goAgainButton() {
    window.location.reload();
}

