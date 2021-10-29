const form = document.getElementById("film-form")
const titleForm = document.querySelector("#title")
const directorForm = document.querySelector("#director")
const urlForm = document.querySelector("#url")
const cardBody = document.querySelectorAll(".card-body")[1]

const clear = document.getElementById("clear-films")
eventlesteners()

function eventlesteners() {
    form.addEventListener("submit", addFilm);
    document.addEventListener("DOMContentLoaded", () => {
        let films = Storage.getFilmFromStorage()
        UI.loadFilms(films)
    })
    cardBody.addEventListener("click", deleteFilm)
    clear.addEventListener("click", clearAllFilms)
}

function addFilm(e) {
    const title = titleForm.value;
    const director = directorForm.value;
    const url = urlForm.value
    if (title === "" || director === "" || url === "") {
        UI.showMessage("Tüm alanları doldurun", "danger")
    }

    else {
        const newFilm = new Film(title, director, url);
        UI.addFilmToUI(newFilm);
        Storage.addFilmToStorage(newFilm)
        UI.clearInputs(titleForm, directorForm, urlForm)
        UI.showMessage("Film listeye eklendi", "success")

    }
    e.preventDefault();

}

function deleteFilm(e) {
    if (e.target.id === "delete-film") {
        UI.deleteFilmFromUI(e.target)
        Storage.deleteFilmFromStorage(e.target.parentElement.previousElementSibling.previousElementSibling.textContent)
        UI.showMessage("Film başarıyla silindi", "warning")
    }

}

function clearAllFilms() {
    if (confirm("Tüm filmler silinecek. Emin misiniz?")) {
        UI.clearAllFilmsFromUI()
        Storage.clearAllFilmsFromStorage()
        UI.showMessage("Tüm filmler başarıyla silindi", "warning")
    }
}