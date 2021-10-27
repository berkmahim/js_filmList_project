const form = document.getElementById("film-form")
const titleForm = document.querySelector("#title")
const directorForm = document.querySelector("#director")
const urlForm = document.querySelector("#url")
const cardBody = document.querySelectorAll(".card-body")[1]
const ui = new UI()
const storage = new Storage()
eventlesteners()

function eventlesteners() {
    form.addEventListener("submit", addFilm);
    document.addEventListener("DOMContentLoaded", () => {
        let films = storage.getFilmFromStorage()
        ui.loadFilms(films)
    })
    cardBody.addEventListener("click", deleteFilm)
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
        storage.addFilmToStorage(newFilm)
        ui.clearInputs(titleForm, directorForm, urlForm)
        ui.showMessages("Film listeye eklendi", "success")

    }
    e.preventDefault();

}

function deleteFilm(e) {
    if (e.target.id === "delete-film") {
        ui.deleteFilmFromUI(e.target)
    }

}