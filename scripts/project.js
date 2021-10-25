const form = document.getElementById("film-form");
const titleForm = document.querySelector("#title");
const directorForm = document.querySelector("#director");
const urlForm = document.querySelector("#url");

ui = new UI();
eventlesteners();

function eventlesteners() {
    form.addEventListener("submit", addFilm);
}

function addFilm(e) {
    const title = titleForm.value;
    const director = directorForm.value;
    const url = urlForm.value

    const newFilm = new Film(title, director, url);
    ui.addFilmToUI(newFilm);
    e.preventDefault();
    ui.clearInputs(titleForm, directorForm, urlForm)
}