const apiUrl = 'http://localhost:3000/films'

const movieMenu = document.querySelector('#films');

fetch(apiUrl)
.then(response => response.json())
.then((movieData) => movieData.forEach(renderMovie))

function renderMovie(movies) {
const movieli = document.createElement('li');
movieli.innerText = movies.title;
movieMenu.appendChild(movieli);

movieli.addEventListener('click', (e) => movieClickHandler(movies))
}
function movieClickHandler(movies) {
    el('title').textContent =movies.title;
    el('runtime').textContent = movies.runtime + " " + "Minutes";
    //el('capacity').textContent = movies.capacity;
    el('showtime').textContent = movies.showtime;
    //el("tickets_sold").textContent= movie.tickets_sold;
    el('film-info').textContent = movies.description;
    el('poster').src = movies.poster;
}
function el(id){
    return document.getElementById(id)
}
function movieHandler(e){
    e.preventDefault();
    
    const newMovie = {
    title: e.target.title.value,
    runtime: e.target.runtime.value,
    capacity: e.target.capacity.value,
    showtime: e.target.showtime.value,
    tickets_sold: e.target.tickets_sold.value,
    description: e.target.description.value,
    posterImage: e.target.poster.value,
    }
    
}

renderMovie(newMovie);



