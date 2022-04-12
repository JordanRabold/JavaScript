"use strict";
window.onload = gettingInput;

function gettingInput(){
    let getInput = prompt("Please enter a number: ", "Number");

    if (getInput > 100){
        alert("Invalid number for a grade")
    }

    else if (getInput >= 88 && getInput <= 100){
        alert("You received an A.")
    }

    else if (getInput >= 80 && getInput <= 87){
        alert("You received a B.")
    }

    else if (getInput >= 68 && getInput <= 79){
        alert("You received a C.")
    }

    else if (getInput >= 60 && getInput <= 67){
        alert("You received a D.")
    }

    else if (getInput >= 0 && getInput <= 59){
        alert("Your received an F.")
    }

    else if (getInput < 0){
        alert("Invalid number for a grade")
    }

    else if (getInput === "A"){
        alert("Excellent job")
    }

    else if (getInput === "B"){
        alert("Good Work")
    }

    else if (getInput === "C"){
        alert("You need to put in more effort")
    }

    else if (getInput === "D"){
        alert("Uh oh, you should be reading and getting assignments in")
    }

    else if (getInput === "F"){
        alert("Please see the instructor ")
    }

    else {
        alert("Invalid grade")
    }

    let goAgain = prompt("Do you want to convert more grades? (q = quit, y = go again)");
    
    while (goAgain === "q" || goAgain === "quit"){
        alert("Goodbye");
        break;
    }

    while (goAgain === "y" || goAgain === "yes"){
        gettingInput();
        break;
    }
}

    


