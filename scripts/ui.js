function UI() {

}

UI.prototype.addFilmToUI = function (newFilm) {
    console.log(newFilm)
    const filmList = document.getElementById("films")

    filmList.innerHTML += `
    <tr>
    <td><img src="${newFilm.url}" class="img-fluid img-thumbnail"></td>
    <td>${newFilm.title}</td>
    <td>${newFilm.director}</td>
    <td><a href="#" id = "delete-film" class = "btn btn-danger">Filmi Sil</a></td>
   </tr>`
}

UI.prototype.clearInputs = function (input1, input2, input3) {
    input1.value = ""
    input2.value = ""
    input3.value = ""
}

UI.prototype.showMessages = function (message, type) {
    const cardBody = document.querySelector(".card-body")
    const div = document.createElement("div")
    div.className = `alert alert-${type}`
    div.textContent = message
    cardBody.appendChild(div)

    setTimeout(function () {
        div.remove()
    }, 3000)



}

UI.prototype.loadFilms = function (films) {
    const filmList = document.getElementById("films")
    films.forEach(function (film) {
        filmList.innerHTML +=
            `
    <tr>
    <td><img src="${film.url}" class="img-fluid img-thumbnail"></td>
    <td>${film.title}</td>
    <td>${film.director}</td>
    <td><a href="#" id = "delete-film" class = "btn btn-danger">Filmi Sil</a></td>
   </tr>`
    });
}

UI.prototype.deleteFilmFromUI = function (element) {
    element.parentElement.parentElement.remove()
}