// To get started:
// 1. add an event listener to the window object, listening for the "DOMContentLoaded" event
// 2. use an anonymous function as the listener
window.addEventListener('DOMContentLoaded', function(event) {
    // when page is opened and loaded, first variable is what you're listening for, second is function. Function always takes event as parameter.
    
    // console.log('page is loaded')
    // this will only run if page loads, not guaranteed to run

    let clickMeButton = document.querySelector('.click-me-button')
    clickMeButton.addEventListener('click', function(event) {
        // alert('how dare u click this button')

        event.preventDefault()
        // prevents what would usually happen to interfere, overrides
        
        let output = document.querySelector('.output')
        output.insertAdjacentHTML('beforeend','<p>The button was clicked</p>')
    })

    let googleButton = document.querySelector('.google-link')
    googleButton.addEventListener('click', function(event) {
        event.preventDefault()
        let output = document.querySelector('.output')
        output.insertAdjacentHTML('beforeend','<p>Google button was clicked</p>')
    })

    let firstNameInput = document.querySelector('#firstName')
    firstNameInput.addEventListener('keyup', function(event) {
        // console.log(firstNameInput.value)
        let greetElement = document.querySelector('#greet')
        if (firstNameInput.value.length > 0) {
            greetElement.innerHTML = `Hi, ${firstNameInput.value}`
        } else {
            greetElement.innerHTML = ''
        }
        
    })   

})