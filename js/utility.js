function getElementText(id){
    const elementTextNumber = parseFloat(document.getElementById(id).innerText);
    return elementTextNumber;
}

function getInputValue (id){
    const inputValueNumber = parseFloat(document.getElementById(id).value);
    return inputValueNumber;
}

function getElmentInnerText(id){
    const elementInnerText = document.getElementById(id).innerText;
    return elementInnerText;
}