const textarea = document.querySelector('textarea');
const btnTranslate = document.querySelector('#btn-translate');
const btnClearText = document.querySelector('#btn-clear');
const outputDiv = document.querySelector("#translate-output");

function translateText(){
    let inputText = textarea.value;
    const url = "https://api.funtranslations.com/translate/emoji.json?text=";
    document.querySelector('.loading-div').style.display = "block";
    fetch(url+inputText)
    .then(response => response.json())
    .then(json => outputDiv.innerHTML = json.contents.translated)
    .catch(()=> { outputDiv.innerHTML = "Sorry! we're experiencing some technical issue. Please try again later." })
    .finally(()=>{
        document.querySelector('.loading-div').style.display = "none";
    });
}

function clearText(){
    textarea.value = "";
    outputDiv.innerHTML = "";
}

btnTranslate.addEventListener("click", translateText);
btnClearText.addEventListener("click", clearText);

