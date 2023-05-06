const button = document.querySelector('button')

function toggle () {
  button.classList.toggle('altColor')
}

// Example 1
button.addEventListener('click', toggle)

// Example 2
button.addEventListener('click', function () {
  button.classList.toggle('altColor')
})

//example 3
button.addEventListener('click', () => { button.classList.toggle('altColor') })

