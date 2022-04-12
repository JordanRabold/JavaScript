// call isValid, if the entries are valid, then we calculate the MPG
function main(){
    if(isValid()){
        let getMiles = $("miles").value;
        let getGallons = $("gallons").value;
        let totalMPG = calculateMPG(getMiles, getGallons);
        displayResults(totalMPG);
    }
}


/**
 * Checks if form data is valid
 * @returns {boolean} Returns true if all data is valid on the form, or false is something is invalid
 * 
 * function should validate form entries
 * and return true or false corresponding to validity
 * display error messages if inputs are invalid
 */


// check if the values entered are valid
function isValid(){

    // miles validation
    let getMiles = $("miles").value;
    if(isNaN(getMiles) || getMiles <= 0){
        $("milesError").innerText = "Please enter a valid integer. Ex. 25";
    }

    else{
        console.log("Miles is valid");
    }

    // gallons validation
    let getGallons = $("gallons").value;
    if(isNaN(getGallons) || getGallons <= 0){
        $("gallonsError").innerText = "Please enter a valid integer. Ex. 25";
        return false;
    }

    else{
        console.log("gallons is valid");
    }
    return true;
}


/**
 * Calculates miles per gallon
 * @param {string|number} milesDriven The number of miles driven
 * @param {string|number} gallonsUsed The number of gallons used
 */
// calculate miles per gallon
function calculateMPG(milesDriven, gallonsUsed){
    return milesDriven / gallonsUsed;
}


/**
 * Displays given MPG on the form
 * @param {string|number} milesPerGallon String or number containing the miles per gallon
 */
function displayResults(milesPerGallon){
    $("mpg").value = milesPerGallon;
}

function $(id){
    return document.getElementById(id);
}

function clearEntries() {
    $("miles").value = "";
    $("gallons").value = "";
    $("mpg").value = "";
    $("milesError").innerText = "*";
    $("gallonsError").innerText = "*";
}

function clearMiles(){
    $("miles").value = "";
}

function clearGallons(){
    $("gallons").value = "";
}

