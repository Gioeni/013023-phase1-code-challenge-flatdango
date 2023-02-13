const firstMovieAPI = 'http://localhost:3000/films/1'
const movieAPI = 'http://localhost:3000/films'
const MovieMenu = document.querySelector('#films')

fetch(firstMovieAPI)
.then(response => response.json())
.then(data => renderFirstMovie(data))

fetch(movieAPI)
.then(response => response.json())
.then(data => {
    data.forEach((data) => {
        renderMovies(data)
    })
    //console.log(data)
});

function el(id){
    return document.getElementById(id)
}
function renderFirstMovie(data) {
    const firstMoviePoster = document.getElementById("poster")
    firstMoviePoster.src= data.poster
    const firstMovieTitle = document.getElementById("title")
    firstMovieTitle.textContent = data.title
    const firstMovieRuntime = document.getElementById("runtime")
    firstMovieRuntime.textContent = data.runtime + " " + "minutes"
    const firstMovieinfo = document.getElementById("film-info")
    firstMovieinfo.textContent = data.description
    const firstMovieShowtime = document.getElementById("showtime")
    firstMovieShowtime.textContent = data.showtime
    
    
    const ticketCount = document.getElementById("ticket-num")
    ticketCount.innerHTML = parseInt(data.capacity) - parseInt(data.tickets_sold)

    const button = document.getElementById("buy-ticket")
    button.addEventListener('click', () => ticketsRemaining(data))


}

function renderMovies(data) {
    const movieLi = document.createElement('li')
    movieLi.innerText = data.title
    MovieMenu.appendChild(movieLi); 

// add event listener here so the list can be clicked 
// and then update the info for that movie.
    movieLi.addEventListener('click', () =>{
         renderFirstMovie(data)
     })

    
}
function ticketsRemaining(data) {
    const ticketCount = document.getElementById("ticket-num")
    ticketCount.innerHTML = Math.max(0, data.capacity - (data.tickets_sold +=1))
    
}















// function movieClickHandler(apiData) {
//     el('title').textContent= apiData.title
//     el('poster').src= apiData.poster
//     el('runtime').textContent= apiData.runtime + " " + "minutes"
//     el('film-info').textContent= apiData.description
//     el('showtime').textContent= apiData.showtime
// }





    

//     movieMenu.src= data.poster
//     const movieTitleMenu = document.getElementById("title")
//     movieTitleMenu.textContent = data.title
//     const firstMovieRuntime = document.getElementById("runtime")
//     movieRuntimeMenu.textContent = data.runtime
//     const movieinfoMenu = document.getElementById("film-info")
//     movieinfoMenu.textContent = data.description
//     const movieShowtimeMenu = document.getElementById("showtime")
//     movieShowtimeMenu.textContent = data.showtime


