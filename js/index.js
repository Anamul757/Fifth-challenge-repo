
// 1st-function
document.getElementById('donate-1st-btn')
.addEventListener('click', function(event){
event.preventDefault();
const inputMoney1 = getInputValueById('input-1st');
const mainBalance = getTextValueById('total-amount');
if(isNaN(inputMoney1) || inputMoney1 <=0 || inputMoney1 > mainBalance){
    alert('Failed to donate money');
    return;
}
else{
    const cardBalance = getTextValueById('n-d-tk');
    const newCardBalance = cardBalance + inputMoney1;
    document.getElementById('n-d-tk').innerText = newCardBalance;
    const newMainBalance = mainBalance - inputMoney1;
    document.getElementById('total-amount').innerText = newMainBalance;


    const date = new Date();

    const div = document.createElement('div');
            div.classList.add('border-2', 'border-gray-400', 'rounded-lg','my-4','px-4');
            div.innerHTML = `
                <p>${inputMoney1} Taka is Donate for Flood at Noakhali, Bangladesh</p>
                <p>Date: ${date} </p>
            `

            document.getElementById('history-container').appendChild(div);
// btn-modal

}}
)

// 2nd-function
document.getElementById('donate-2nd-btn')
.addEventListener('click', function(event){
    event.preventDefault();
    const inputMoney2 = getInputValueById('input-2nd');
    
    const mainBalance = getTextValueById('total-amount');
    if(isNaN(inputMoney2) || inputMoney2 <=0 || inputMoney2 > mainBalance){
        alert('Failed to donate money');
        return;
    }
    else{
        const cardBalance = getTextValueById('f-d-tk');
        const newCardBalance = cardBalance + inputMoney2;
        document.getElementById('f-d-tk').innerText = newCardBalance;
        const newMainBalance = mainBalance - inputMoney2;
        document.getElementById('total-amount').innerText = newMainBalance;

        const date = new Date();

        const div = document.createElement('div');
                div.classList.add('border-2', 'border-gray-400', 'rounded-lg','my-4','px-4');
                div.innerHTML = `
                    <p>${inputMoney2} Taka is Donated for Flood Relief in Feni,Bangladesh</p>
                    <p>Date: ${date} </p>
                `
    
                document.getElementById('history-container').appendChild(div);
    }
    }
    )
    // 3rd-function
    document.getElementById('donate-3rd-btn')
.addEventListener('click', function(event){
    event.preventDefault();
    const inputMoney3 = getInputValueById('input-3rd');
    
    const mainBalance = getTextValueById('total-amount');
    if(isNaN(inputMoney3) || inputMoney3 <=0 || inputMoney3 > mainBalance){
         const myButton = document.getElementById("myButton");

    // Assign an onclick function to the button
    myButton.onclick = function () {
      alert("Hello! You clicked the button.");
    };

    // Remove the onclick event by calling getElementById
    document.getElementById("removeOnClick").onclick = function () {
      myButton.onclick = null; // Remove the onclick function
      alert("The 'onclick' event has been removed!");
        alert('Failed to donate money');
        return;
    }
    else{
        const cardBalance = getTextValueById('a-d-tk');
        const newCardBalance = cardBalance + inputMoney3;
        document.getElementById('a-d-tk').innerText = newCardBalance;
        const newMainBalance = mainBalance - inputMoney3;
        document.getElementById('total-amount').innerText = newMainBalance;

        const date = new Date();

        const div = document.createElement('div');
                div.classList.add('border-2', 'border-gray-400', 'rounded-lg','my-4','px-4');
                div.innerHTML = `
                    <p>${inputMoney3} Taka is Donated for Aid for Injured in the Quota Movement, Bangladesh</p>
                    <p>Date: ${date} </p>
                `
    
                document.getElementById('history-container').appendChild(div);
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