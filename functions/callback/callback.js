const button = document.querySelector('button')

function toggle () {
  button.classList.toggle('altColor')
}

button.addEventListener('click', toggle)