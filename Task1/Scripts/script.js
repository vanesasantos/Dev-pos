

function onSubmit(event) {
    if(validatePhoneNumber()){
        if(validateDayRate()){
            showPopupOK();
        }
    }  
    return false;
}

function validatePhoneNumber(){
    let flag = true;
    const phoneNumber = document.getElementById("phoneNumber").value;
    if (phoneNumber.length>0){
        const flag2 = parseInt(phoneNumber) 
        if (isNaN(flag2)){
            flag = false;
            showPopup('Phone number is not a number', 'Alert')
        }
        else{
            if(phoneNumber<0){
                showPopup('Phone number is negative', 'Alert')
                flag = false;
            }
        }
    }
    else{
        showPopup('Phone number is empty', 'Alert')
        flag = false;
    }
    return flag
}

function validateDayRate(){
    let flag = true;
    const dRate = document.getElementById("dRate").value;
    if (dRate.length>0){
        const flag2 = parseInt(dRate) 
        if (isNaN(flag2)){
            showPopup('Day rate is not a number', 'Alert')
            flag = false;
        }
        else{
            if(dRate<0){
                showPopup('Day rate is negative', 'Alert')
                flag = false;
            }
        }
    }
    else{
        showPopup('Day rate is empty', 'Alert')
        flag = false;
    }
    return flag
}

function showPopup(msj, title){
    const popup_container = document.getElementById('popup-container')
    popup_container.classList.add('show');


    const popup = document.getElementById("popup")
    const msjItem = document.getElementById("popup-body")
    const titleItem = document.getElementById("popup-title")
    msjItem.textContent = msj;
    titleItem.textContent = title;
}

function showPopupOK(){
    const popup_container = document.getElementById('popup-container')
    popup_container.classList.add('show');


    const titleItem = document.getElementById("popup-title")
    titleItem.textContent = 'Alert';

    const pNum = document.getElementById("phoneNumber").value
    const dayR = document.getElementById("dRate").value

    const msjItem = document.getElementById("popup-body")
    msjItem.textContent = 'Phone Number: ' + pNum + ' Day rate: ' + dayR;
}

function closePopup(){
    const popup_container = document.getElementById('popup-container')
    popup_container.classList.remove('show');
}

const hamburguer = document.getElementById('hamburguer');
const navUL = document.getElementById('nav-ul');

hamburguer.addEventListener('click', () => {
    navUL.classList.toggle('showH');
});


const payRoll = document.getElementById('payRoll');
const numE = document.getElementById('numberEmployees');

numE.addEventListener('input', updateValue);

function updateValue(e) {
    var option=document.createElement("option");
    option.value=e.target.value;
    option.text=e.target.value;
    payRoll.appendChild(option);
}