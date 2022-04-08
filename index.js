let message = document.getElementById('message')

console.log('hello world')

const addMovie = (event) => {

event.preventDefault()

const inputField = document.querySelector('input')
const movieContainer = document.querySelector('ul')
const movie = document.createElement('li')
const movieTitle = document.createElement('span')

movie.textContent = ''
movieTitle.textContent = inputField.value // value(inputField) // ?
movieContainer.appendChild(movie)
movie.appendChild(movieTitle);

const deleteBtn = document.createElement('button') // how does it know where in the document to place it?
deleteBtn.textContent = 'X'
movie.appendChild(deleteBtn)

movieTitle.addEventListener('click', crossOffMovie)
deleteBtn.addEventListener('click', deleteMovie)

inputField.value = '' // makes text delete from box after

}

document.querySelector('form').addEventListener('submit', addMovie)

const deleteMovie = event => {
    event.target.parentNode.remove()
    message.textContent = `you removed ${event.target.parentNode.firstChild}`
    revealMessage()
}

const crossOffMovie = (event) => {
    event.target.classList.toggle('checked')
    if (event.target.classList.contains('checked')) {
        message.textContent = `${event.target.textContent} watched!`
    } else {
        message.textContent = `you still want to watch ${event.target.textContent}, dont you squidward`
    }
    revealMessage()
}

const revealMessage = () => {
    message.classList.remove('hide')
    setTimeout(() => {message.classList.add('hide')}, 1000)
}

