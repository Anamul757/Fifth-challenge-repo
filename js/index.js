
// 1st-function
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


    const date = new Date();

    const div = document.createElement('div');
            div.classList.add('border-2', 'border-gray-400', 'rounded-lg');
            div.innerHTML = `
                <p>${inputMoney1} Taka is Donated for famine-2024 at Feni, Bangladesh.</p>
                <p>Date: ${date} </p>
            `

            document.getElementById('history-container').appendChild(div);
}
}
)

// 2nd-function
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
    // 3rd-function
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


// Button function
var count = 0; 
function buttonCall(x){
    var x;
    if(x == 1){
        count ++ ;
    } 
    if( count == 1){
        document.getElementById('donation-btn').style.background= "rgb(180, 244, 97)";
        document.getElementById('history-btn').style.background= "none";

    }
    
    else if(count == 2){
        document.getElementById('donation-btn').style.background="none";
        document.getElementById('history-btn').style.background="rgb(180, 244, 97)";
        count = 0;
    }
}