const textarea = document.querySelector('textarea');
const btnTranslate = document.querySelector('#btn-translate');
const btnClearText = document.querySelector('#btn-clear');
const outputDiv = document.querySelector("#translate-output");

function translateText(){
    let inputText = textarea.value;
    const url = "https://api.funtranslations.com/translate/minion.json?text=";
    fetch(url+inputText)
    .then(response => response.json())
    .then(json => outputDiv.textContent = json.contents.translated);
}

function clearText(){
    textarea.value = "";
    outputDiv.textContent = "";
}

btnTranslate.addEventListener("click", translateText);
btnClearText.addEventListener("click", clearText);

