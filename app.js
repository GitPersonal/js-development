let h1 = document.querySelector('h1')

h1.style.color = 'red'
h1.style.fontFamily = 'sans-serif'

let textChange = document.querySelector('h2')
textChange.addEventListener('click', function () {
    console.log('h2 clicked')
})