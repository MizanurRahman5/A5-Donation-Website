
// card 1 addEventlistener 
document.getElementById('n-donate-now').addEventListener('click', function(){
    const cardCurrentBlance = getElementText('noakhali-current-blance');
    const inputValue = getInputValue('n-input-amount');
    const myTotalBlance = getElementText('my-total-blance');
    const titleText = getElmentInnerText('noakhali');
    const historyContainer = document.getElementById('history-container');
    if(isNaN(inputValue)){
        alert('invalid Input');
        return;
    }else if(inputValue < 0){
        alert ('invalid Inputs');
        return;
    }else if(myTotalBlance < inputValue){
        alert('Insufience Blance')
        return;
    }
    else{
        const newCardCurrentBlance = inputValue + cardCurrentBlance;
        document.getElementById('noakhali-current-blance').innerText = newCardCurrentBlance;
        myCurrentTotalBlance = myTotalBlance - inputValue;
        document.getElementById('my_modal_5').showModal();
        document.getElementById('my-total-blance').innerText = myCurrentTotalBlance;
        document.getElementById('n-input-amount').value = ' ';
    }
    
   const div = document.createElement('div');
   div.classList.add('border');
   div.classList.add('p-6');
   div.classList.add('rounded');
   div.classList.add('my-4');
   div.innerHTML = `
   <h1 class="text-xl font-bold">${inputValue} Taka is Donated For ${titleText}</h1>
   <p>Date : ${new Date()}</p>
   
   `
   historyContainer.insertBefore(div, historyContainer.firstChild);

})


// card 2

document.getElementById('feni-donation-btn').addEventListener('click', function(){
    // console.log('clicked')
    const myTotalBlance = getElementText('my-total-blance');
    const cardCurrentBlance = getElementText('feni-current-blance');
    const inputValue = getInputValue('input-amount');
    const titleText = getElmentInnerText('feni-title');
    const historyContainer = document.getElementById('history-container');

    if(isNaN(inputValue)){
        alert('invalid Input');
        return;
    }else if(inputValue < 0){
        alert ('invalid Inputs');
        return;
    }else if(myTotalBlance < inputValue){
        alert('Insufience Blance');
        return;
    }else{
        const newCardCurrentBlance = inputValue + cardCurrentBlance;
        document.getElementById('feni-current-blance').innerText = newCardCurrentBlance;
        myCurrentTotalBlance = myTotalBlance - inputValue;
        document.getElementById('my_modal_5').showModal();
        document.getElementById('my-total-blance').innerText = myCurrentTotalBlance;
        document.getElementById('input-amount').value = ' ';
    }


    const div = document.createElement('div');
   div.classList.add('border');
   div.classList.add('p-6');
   div.classList.add('rounded');
   div.classList.add('my-4');
   div.innerHTML = `
   <h1 class="text-xl font-bold">${inputValue} Taka is Donated For ${titleText}</h1>
   <p>Date : ${new Date()}</p>
   
   `
   historyContainer.insertBefore(div, historyContainer.firstChild);
    // console.log(inputValue)

})


document.getElementById('quota-movment-danat-btn').addEventListener('click', function(){
    // console.log('clicked')
    const myTotalBlance = getElementText('my-total-blance');
    const cardCurrentBlance = getElementText('quota-current-blance');
    const inputValue = getInputValue('quota-input-amount');
    const titleText = getElmentInnerText('quota-movment');
    const historyContainer = document.getElementById('history-container');
    // console.log(inputValue)

    if(isNaN(inputValue)){
        alert('invalid Input');
        return;
    }else if(inputValue < 0){
        alert ('invalid Inputs');
        return;
    }else if(myTotalBlance < inputValue){
        alert('Insufience Blance');
        return;
    }else{
        const newCardCurrentBlance = inputValue + cardCurrentBlance;
        document.getElementById('quota-current-blance').innerText = newCardCurrentBlance;
        myCurrentTotalBlance = myTotalBlance - inputValue;
        document.getElementById('my_modal_5').showModal();
        document.getElementById('my-total-blance').innerText = myCurrentTotalBlance;
        document.getElementById('quota-input-amount').value = ' ';
    }
    const div = document.createElement('div');
   div.classList.add('border');
   div.classList.add('p-6');
   div.classList.add('rounded');
   div.classList.add('my-4');
   div.innerHTML = `
   <h1 class="text-xl font-bold">${inputValue} Taka is Donated For ${titleText}</h1>
   <p>Date : ${new Date()}</p>
   
   `
   historyContainer.insertBefore(div, historyContainer.firstChild);

})

