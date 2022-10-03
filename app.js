var btntranslate = document.querySelector("#btn-translate");
var textinput = document.querySelector("#txt-input");
var outputtext= document.querySelector("#output-text");
var serverURL = "https://api.funtranslations.com/translate/shakespeare.json";
function getURL(text){
    return serverURL + "?" + "text=" + text
}
function errorhandler(error){ 
    console.log("error occured", error);
    alert("An error has occured. Log back after sometime!")
}
function clickEventHandler(){
   
   var inputText = textinput.value;
   fetch(getURL(inputText))
       .then(response => response.json())
       .then(json => {
           var translated = json.contents.translated;
           outputtext.innerText= translated;
       })
           
       .catch(errorhandler)

};
btntranslate.addEventListener("click", clickEventHandler)  