const form = document.getElementById("film-form")
const titleForm = document.querySelector("#title")
const directorForm = document.querySelector("#director")
const urlForm = document.querySelector("#url")
const cardBody = document.querySelectorAll(".card-body")[1]
const ui = new UI()
const storage = new Storage()
const clear = document.getElementById("clear-films")
eventlesteners()

function eventlesteners() {
    form.addEventListener("submit", addFilm);
    document.addEventListener("DOMContentLoaded", () => {
        let films = storage.getFilmFromStorage()
        ui.loadFilms(films)
    })
    cardBody.addEventListener("click", deleteFilm)
    clear.addEventListener("click", clearAllFilms)
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
        storage.deleteFilmFromStorage(e.target.parentElement.previousElementSibling.previousElementSibling.textContent)
        ui.showMessages("Film başarıyla silindi", "warning")
    }

}

function clearAllFilms() {
    if (confirm("Tüm filmler silinecek. Emin misiniz?")) {
        ui.clearAllFilmsFromUI()
        storage.clearAllFilmsFromStorage()
        ui.showMessages("Tüm filmler başarıyla silindi", "warning")
    }
}