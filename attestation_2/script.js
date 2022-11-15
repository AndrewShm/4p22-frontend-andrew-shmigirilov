`use strict`
 
let inputEmail = document.querySelector(`.form__input-email`);
let emailSubtitle = document.querySelector(`.emailSubtitle.form__label-email-error`);
let inputPasswordFirst = document.querySelector(`.form__input-password`);
let passwordFirstSubtitle = document.querySelector(`.passwordFirstSubtitle.form__label-password-error`);
let inputPasswordSecond = document.querySelector(`input[placeholder="Подтвердите пароль"]`);
let passwordSecondSubtitle = document.querySelector(`.passwordSecondSubtitle.form__label-confirm-password-error`);

let button = document.querySelector(`.form__button`);

button.addEventListener(`click`, (event) => {
    event.preventDefault();

    function validateEmail(email) {   
        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;   
        return re.test(String(email).toLowerCase());};

 
        let radioButtonSex = document.querySelectorAll(`input[name="gender"]`);
        let dataRadioButton = false;
        for (let i = 0 ; i < radioButtonSex.length; i++) {
            if(radioButtonSex[i].checked) {
                dataRadioButton = radioButtonSex[i].value;
                break;
            }
        };
        
let aboutMe = document.querySelector(`.form__input-aboutme`).value;      
        

let email = inputEmail.value;
   
if(!email) {
    inputEmail.classList.add(`error`);
    emailSubtitle.classList.remove(`hidden`); 
    emailSubtitle.innerHTML = `Поле обязательно для заполнения`;
} else

if (validateEmail(email) !== true) {
    inputEmail.classList.add(`error`);
    emailSubtitle.classList.remove(`hidden`);
    emailSubtitle.innerHTML = `Email введён некорректно`;
} else {
    inputEmail.classList.remove(`error`);
    emailSubtitle.classList.add(`hidden`);
};

let password = inputPasswordFirst.value;

if(!password) {
    inputPasswordFirst.classList.add(`error`);
    passwordFirstSubtitle.classList.remove(`hidden`); 
    passwordFirstSubtitle.innerHTML = `Поле обязательно для заполнения`;
} else
if (password.length <! 8) {
    inputPasswordFirst.classList.add(`error`);
    passwordFirstSubtitle.classList.remove(`hidden`);
    passwordFirstSubtitle.innerHTML = `Пароль введён некорректно`;
} else {
    inputPasswordFirst.classList.remove(`error`);
    passwordFirstSubtitle.classList.add(`hidden`);

let passwordSecond = inputPasswordSecond.value;

if(!passwordSecond) {
    inputPasswordSecond.classList.add(`error`);
    passwordSecondSubtitle.classList.remove(`hidden`); 
    passwordSecondSubtitle.innerHTML = `Поле обязательно для заполнения`;
} else
if (  (passwordSecond !== password) || (passwordSecond.length <! 8)) {
    inputPasswordSecond.classList.add(`error`);
    passwordSecondSubtitle.classList.remove(`hidden`);
    passwordSecondSubtitle.innerHTML = `Пароли не совпадают`;
} else {
    inputPasswordSecond.classList.remove(`error`);
    passwordSecondSubtitle.classList.add(`hidden`);
    if(validateEmail(email) === true) {submitForm();};
};

function submitForm() {
let formData = new Object();

    formData.aboutMe = aboutMe;
    formData.password = passwordSecond;
    formData.email = email;
    formData.Sex = dataRadioButton;
   
    return console.log(formData);
};};});