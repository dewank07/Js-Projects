var translateBtn = document.querySelector("#translate-btn");
var textInput = document.querySelector("#translate-input");
var outputDiv = document.querySelector("#outt");

// var serverURL = "https://lessonfourapi.tanaypratap.repl.co/translate/yoda.json";

var serverURL = "https://api.funtranslations.com/translate/shakespeare.json";
function getTranslation(text)
{
    return serverURL + "?" + "text=" + text;
}

function errorHandle(error)
{
    console.log("Error occured Fix it!",error);
    alert("Something wrong with server :') ")
}

translateBtn.addEventListener("click",function clickHandle (){
    var textIn = textInput.value; 
    fetch(getTranslation(textIn))
    .then(response => response.json())
    .then(json => {
        console.log(json);
        var result = json.contents.translated;
        outputDiv.innerText = result;
    })
    .catch(errorHandle)

});