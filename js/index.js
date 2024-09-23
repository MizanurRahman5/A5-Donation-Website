// const inputValue = getInputValue('n-input-amount');
// if(isNaN(inputValue)){
   
// }else{
//     document.getElementById('n-donate-now').setAttribute('onclick');
// }

document.getElementById('n-donate-now').addEventListener('click', function(){
    const cardCurrentBlance = getElementText('noakhali-current-blance');
    const inputValue = getInputValue('n-input-amount');
    const myTotalBlance = getElementText('my-total-blance');
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
        
    }
    
   


   
})