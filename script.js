const form = document.getElementsByTagName('form')[0]
const email = document.getElementById('email')
const password = document.getElementById('password')
const emailError = document.querySelector('#email + span.validation-form__message-error')

email.addEventListener('input', function (event) {
    //Every time when user enters smth, script checks, is form valid
    if(email.validity.valid) {
        //If at the moment of validation message error is visible,
        //and if form is valid, delete message error
        emailError.textContent = ''
        emailError.className = 'validation-form__message-error'
    } else {
        showError()
    }
})

form.addEventListener('submit', function (event) {
    if(!email.validity.valid) && (!password.validity.valid) {
        showError()
        event.preventDefault()
    }
})

function showError() {
    if(email.validity.valueMissing) || (password.validity.valueMissing) {
        emailError.textContent = 'Please enter an email'

    }
}