let jokeTextEl = document.getElementById("jokeText");
let jokeBtnEl = document.getElementById("jokeBtn");
let spinnerEl = document.getElementById("spinner");

function displayJoke(event) {
    spinnerEl.classList.remove("d-none");
    let option = {
        method: "GET"
    };

    let url = "https://apis.ccbp.in/jokes/random";
    fetch(url, option)
        .then(function(response) {
            return response.json()
        })
        .then(function(jsonData) {
            let {
                value
            } = jsonData;
            spinnerEl.classList.add("d-none");
            jokeTextEl.textContent = value;
        })
}


jokeBtnEl.addEventListener("click", displayJoke);