const form = document.getElementById("film-form");
const titleForm = document.querySelector("#title");
const directorForm = document.querySelector("#director");
const urlForm = document.querySelector("#url");

const ui = new UI()
const storage = new Storage()
eventlesteners()

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
        storage.addFilmToStorage(newFilm)
        ui.clearInputs(titleForm, directorForm, urlForm)
        ui.showMessages("Film listeye eklendi","success")
        
    }
    e.preventDefault();

}