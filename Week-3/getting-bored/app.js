const dropdown = document.querySelector("#activity-select");
const btnFindActivity = document.querySelector("#btn-find-activity");
const outputDiv = document.querySelector("#activity-output");

function disableButton() {
    if (dropdown.value === "") {
        btnFindActivity.disabled = true;
        btnFindActivity.style.cursor = 'default';
        btnFindActivity.style.backgroundColor = "#C2BDE3";
        btnFindActivity.style.color = "#808080"
    } else {
        btnFindActivity.disabled = false;
        btnFindActivity.style.cursor = 'cursor';
        btnFindActivity.style.backgroundColor = "#796dbc";
        btnFindActivity.style.color = "black";
    }
}

function showGIF(activityType) {
    const showGIFdiv = document.querySelector("#show-gif");
    if (activityType !== "") {
        showGIFdiv.innerHTML = "";
        imgTag = document.createElement("img");
        switch (activityType) {
            case "education":
                imgTag.src = "https://media.giphy.com/media/BJzTmHvWUAnSM/giphy.gif";
                break;
            case "recreational":
                imgTag.src = "https://media.giphy.com/media/jOTXP1uewgpR6/giphy.gif"
                break;
            case "social":
                imgTag.src = "https://media.giphy.com/media/l2R02nQTFHlDIohk4/giphy.gif"
                break;
            case "diy":
                imgTag.src = "https://media.giphy.com/media/OTi7tOoQZOAnu/giphy.gif"
                break;
            case "charity":
                imgTag.src = "https://media.giphy.com/media/xT0xeAHbxtwb3OASUU/giphy.gif"
                break;
            case "cooking":
                imgTag.src = "https://media.giphy.com/media/Z8blEZs9alp16/giphy.gif"
                break;
            case "relaxation":
                imgTag.src = "https://media.giphy.com/media/Q79Xp6bkWLSmvAuPUa/giphy.gif"
                break;
            case "music":
                imgTag.src = "https://media.giphy.com/media/nIAdXLs0ylpvy/giphy.gif"
                break;
        }

        showGIFdiv.appendChild(imgTag);
    }
}

function findFunActivity() {
    const activityType = dropdown.value;
    const baseurl = "http://www.boredapi.com/api/activity?type=";
    fetch(baseurl + activityType)
        .then(response => response.json())
        .then(json => {
            outputDiv.textContent = `" ${json.activity} "`;
            showGIF(activityType);
        })
        .catch(() => {
            outputDiv.textContent = "Sorry! we're experiencing some technical issue. Please try again later."
        });
}

disableButton();
dropdown.addEventListener("change", disableButton);
btnFindActivity.addEventListener("click", findFunActivity);