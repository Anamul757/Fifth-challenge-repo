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

    // // add history section
    // const time = new Date();
    // document.getElementById('date').innerText = Date: ${now};
    // const div = document.createElement('div');
    // div.innerHTML = `
    // <div class="card border-2 border-gray-400 rounded-lg>
    // <h2 class="card-title>
    // ${inputMoney1} Taka is Donate for Flood at Noakhali, Bangladesh </h2>
    // <p>Date: ${now}</p>
    // </div>
    // `
    // const historyContainer = document.getElementById('history-container');
    // historyContainer.appendChild(div);

    const div = document.createElement('div');
            div.classList.add('bg-yellow-300');
            div.innerHTML = `
                <h4 class="text-2xl font-bold">Cash Out</h4>
                <p>${inputMoney1} withdraw.</p>
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
