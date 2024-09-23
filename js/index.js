
// console.log(historyContainer)

document.getElementById('n-donate-now').addEventListener('click', function(){
    const cardCurrentBlance = getElementText('noakhali-current-blance');
    const inputValue = getInputValue('n-input-amount');
    const myTotalBlance = getElementText('my-total-blance');
    const titleText = getElmentInnerText('noakhali');
    const historyContainer = document.getElementById('history-container');
   
    if(isNaN(inputValue)){
        alert('invalid Input');
    }else if(inputValue < 0){
        alert ('invalid Inputs')

    }else if(myTotalBlance < inputValue){
        alert('Insufience Blance')

    }
    else{
        const newCardCurrentBlance = inputValue + cardCurrentBlance;
        document.getElementById('noakhali-current-blance').innerText = newCardCurrentBlance;
        myCurrentTotalBlance = myTotalBlance - inputValue;
        document.getElementById('my-total-blance').innerText = myCurrentTotalBlance;
        document.getElementById('my_modal_5').showModal();
        document.getElementById('n-input-amount').value = ' ';
        
    }
    
   const div = document.createElement('div');
   div.classList.add('border');
   div.classList.add('p-6');
   div.classList.add('rounded');
   div.innerHTML = `
   <h1 class="text-xl font-bold">${inputValue} Taka is Donated For ${titleText}</h1>
   <p>Date : ${new Date().toTimeString()}</p>
   
   `
   historyContainer.appendChild(div);

})