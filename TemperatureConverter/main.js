//Used Math.round to round up

function main(){
    let fahrenheit = parseInt(document.getElementById("fahrenheit").value);

        if(isNaN(fahrenheit)){
            document.getElementById("fahrenheitError").innerText =
                "Please enter a valid number. Ex. 100";
        }

    let celsiusAnswer = Math.round((fahrenheit - 32) * 5/9);

    let celsius2 = document.getElementById('celsius2');
    celsius2.value = celsiusAnswer;

}

