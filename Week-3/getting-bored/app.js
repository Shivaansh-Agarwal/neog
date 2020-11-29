const dropdown = document.querySelector("#activity-select");
const btnFindActivity = document.querySelector("#btn-find-activity");
const outputDiv = document.querySelector("#activity-output");

function disableButton(){
    // TODO
}

function findFunActivity(){
    const activityType = dropdown.value;
    const baseurl = "http://www.boredapi.com/api/activity?type=";
    fetch(baseurl+activityType)
    .then(response => response.json())
    .then(json => outputDiv.textContent = json.activity)
    .catch(()=> {outputDiv.textContent = "Sorry! we're experiencing some technical issue. Please try again later."});
}

dropdown.addEventListener("change", disableButton);
btnFindActivity.addEventListener("click", findFunActivity);