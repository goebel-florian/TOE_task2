// Define variable
const text_input = document.getElementById("textfield_input");

// Define button
const btn_translate = document.getElementById("btn_translate");

// Define API endpoint
const url = 'https://api.funtranslations.com/translate/valyrian.json';

// Function to handle error
function errorHandler(error) {
    console.log("Error occured:", error);
    alert("Sorry - Something went wrong\n" + "Error:  " + error + "\n Please try again!");
}

// Function to merge content for API request
function build_api_request(text2translate) {
    return url + "?text=" + text2translate;
}

// Function which execute API request
function translateText() {
    var text2translate = text_input.value;
    // console log before translating
    console.log("Text to translate:\n\n" + text2translate);
    fetch(build_api_request(text2translate), {
        method: "POST",
        headers: {
            // Add private API_key
            "X-Funtranslations-Api-Secret": "<api_key>",
            "Content-Type": "application/x-www-form-urlencoded",
        },
        body: text2translate,
    })
        .then((response) => response.json())
        .then((json) => {
            let text_output = json.contents.translated;

            // console log after succesfull translating
            console.log("Translated text:\n\n" + text_output);
            
            // Create alert box with translated text
            alert(text_output)

                // Remove comment to transmit text_output back to html textfield
                //textfield_output.innerText = text_output;
        })
        .catch(errorHandler);
}
// Define function to call after button click event 
btn_translate.addEventListener("click", translateText);
