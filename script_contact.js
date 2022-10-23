var contactForm = document.forms['contact-form'];

function Validation(check){
    if(contactForm['name'].value.length < 1 || contactForm['name'].value.length > 20){
        document.getElementById('problemName').innerText = "*The Number of Characters Must be Between 1 - 20 "
        check.preventDefault()
    }

    if(contactForm['email'].value.length == 0 ){
        document.getElementById('problemEmail').innerText = "*Your email must be filed "
        check.preventDefault()
    }

    if(contactForm['message'].value.length < 10 ){
        document.getElementById('problemMessage').innerText = "*The Minimum Number of Messages is 10 Characters"
        check.preventDefault()
    }
}