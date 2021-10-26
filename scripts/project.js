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
    if (title === "" || director === "" || url === "") {
        ui.showMessages("Tüm alanları doldurun", "danger")
    }

    else {
        const newFilm = new Film(title, director, url);
        ui.addFilmToUI(newFilm);
        ui.clearInputs(titleForm, directorForm, urlForm)
    }
    e.preventDefault();

}