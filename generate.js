//this is the code for chatbot

//submits the text once the user hits enter
const inputField = document.getElementById("input")
    inputField.addEventListener("keydown", function(e) {
        if (e.code === "Enter") {
            let input = inputField.value;
            inputField.value = "";
            output(input);
    }
});

//cleans up the user input by only leaving only the words, digits and spaces
function output()
{
        let text = input.toLowerCase().replace(/[^\w\s\d]/gi, "");
}
