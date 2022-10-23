var contactForm = document.forms['contact-form'];
var problem_name = document.getElementById('problemName');
var problem_email = document.getElementById('problemEmail');
var problem_city = document.getElementById('problemCity');
var problem_address = document.getElementById('problemAddress');
var problem_payment = document.getElementById('problemPayment');
var problem_agree = document.getElementById('problemAgree');
var problem_Date = document.getElementById('problem_Date');
var problem_Cvv = document.getElementById('problem_CVV');
var day_show = document.getElementById('fill_day');
var cvv_show = document.getElementById('fill_cvv');
day_show.style.display = 'none'
cvv_show.style.display = 'none'

function Validation(check){
    if(contactForm['name'].value.length < 1 || contactForm['name'].value.length > 20){
        problem_name.innerText = "*The Number of Characters Must be Between 1 - 20 "
        check.preventDefault()
    }

    if(contactForm['email'].value.length == 0 ){
        problem_email.innerText = "*Your email must be filed "
        check.preventDefault()
    }

    if(contactForm['city'].value.length == 0 ){
        problem_city.innerText = "*Your city must be filed "
        check.preventDefault()
    }

    if(contactForm['address'].value.length == 0 ){
        problem_address.innerText = "*Your address must be filed"
        check.preventDefault()
    }

    if(contactForm['payment'].value.length == 0 ){
        problem_payment.innerText = "*Please choose payment method"
        check.preventDefault()
    }

    if((contactForm['month'].value < 1 || contactForm['year'].value < 0)){
        problem_Date.innerText = "*Please fill date of card"
        check.preventDefault()
    }

    if(contactForm['cvv'].value < 0 || contactForm['cvv'].value > 999 ||  contactForm['cvv'].value.length == 0){
        problem_Cvv.innerText = "*Please fill CVV number (0-999)"
        check.preventDefault()
    }

    if(!contactForm['agree'].checked){
        problem_agree.innerText = "*Please check terms and conditions"
        check.preventDefault()
    }
}

function payment_show(){
    day_show.style.display = 'block'
    cvv_show.style.display = 'block'
}

function payment_hide(){
    day_show.style.display = 'none'
    cvv_show.style.display = 'none'
}
