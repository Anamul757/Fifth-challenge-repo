// function getInputValueById(id){
//     const inputValue = document.getElementById(id).value;
//     const inputNumber = parseFloat(inputValue);
//     return inputNumber;
// }

// function getTextValueById(id){
//     const textValue = document.getElementById(id).innerText;
//     const textNumber = parseFloat(textValue);
//     return textNumber;
// }



document.getElementById('donate-1st-btn')
.addEventListener('click', function(event){
event.preventDefault();
const inputMoney1 = getInputValueById('input-1st');

if(isNaN(inputMoney1) || inputMoney1 <=0){
    alert('Failed to donate money');
    return;
}
else{
    const cardBalance = getTextValueById('n-d-tk');
    const newCardBalance = cardBalance + inputMoney1;
    document.getElementById('n-d-tk').innerText = newCardBalance;
    const mainBalance = getTextValueById('total-amount');
    const newMainBalance = mainBalance - inputMoney1;
    document.getElementById('total-amount').innerText = newMainBalance;
}
}
)


document.getElementById('donate-2nd-btn')
.addEventListener('click', function(event){
    event.preventDefault();
    const inputMoney2 = getInputValueById('input-2nd');
    
    if(isNaN(inputMoney2) || inputMoney2 <=0){
        alert('Failed to donate money');
        return;
    }
    else{
        const cardBalance = getTextValueById('f-d-tk');
        const newCardBalance = cardBalance + inputMoney2;
        document.getElementById('f-d-tk').innerText = newCardBalance;
        const mainBalance = getTextValueById('total-amount');
        const newMainBalance = mainBalance - inputMoney2;
        document.getElementById('total-amount').innerText = newMainBalance;
    }
    }
    )
    document.getElementById('donate-3rd-btn')
.addEventListener('click', function(event){
    event.preventDefault();
    const inputMoney3 = getInputValueById('input-3rd');
    
    if(isNaN(inputMoney3) || inputMoney3 <=0){
        alert('Failed to donate money');
        return;
    }
    else{
        const cardBalance = getTextValueById('a-d-tk');
        const newCardBalance = cardBalance + inputMoney3;
        document.getElementById('a-d-tk').innerText = newCardBalance;
        const mainBalance = getTextValueById('total-amount');
        const newMainBalance = mainBalance - inputMoney3;
        document.getElementById('total-amount').innerText = newMainBalance;
    }
    }
    )
