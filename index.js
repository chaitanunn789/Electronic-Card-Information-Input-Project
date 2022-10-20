

//======== Owner Name Input =========

function getOwnerName() {
    const value = document.querySelector(".owner-name-input").value;
    document.querySelector(".owner-name").innerHTML = value.toUpperCase();
    if (value.length == 0) {
        document.querySelector(".owner-name").innerHTML = "OWNER NAME"
    }
}

document.querySelector(".owner-name-input").addEventListener("keyup", (event) => {
    getOwnerName();
})

//======== Bank Name Input =========

document.querySelector(".bank-name-input").addEventListener("keyup", (event) => {
    getBankName();
})

function getBankName() {
    const value = document.querySelector(".bank-name-input").value;
    document.querySelector(".bank-name em").innerHTML = value;
}

//======== Card Number Input =========

addSpace();



document.querySelector(".card-number-input").addEventListener("keyup", (event) => {
    getCardNum();
    addSpace();

})


function getCardNum() {
    let inputValue = document.querySelector(".card-number-input").value;
    let setValue = document.querySelector(".front-card-number").innerHTML = inputValue;
    if (inputValue.length == 0) document.querySelector(".front-card-number").innerHTML = ("1234567890123456");

}

function addSpace() {
    let frontCardNum = document.querySelector(".front-card-number").innerHTML;
    const numOne = frontCardNum.slice(0, 4) + " ";
    const numTwo = frontCardNum.slice(4, 8) + " ";
    const numThree = frontCardNum.slice(8, 12) + " ";
    const numFour = frontCardNum.slice(12, 16) + " ";
    let newCardNum = document.querySelector(".front-card-number").innerHTML = numOne + numTwo + numThree + numFour;
}


//======== exp (MM/YY) Input =========


document.querySelector(".exp-input").addEventListener("keyup", (event) => {
    updateExp();
    addSlash();
})

function updateExp() {
    let expInput = document.querySelector(".exp-input").value;
    let expValue = document.querySelector(".exp-date").innerHTML
    let expNewValue = document.querySelector(".exp-date").innerHTML = expInput;
    if (expInput.length == 0) document.querySelector(".exp-date").innerHTML = "0821"
}

function addSlash() {
    let value = document.querySelector(".exp-date").innerHTML;
    let mmValue = value.slice(0, 2);
    let yyvValue = value.slice(2, 4);
    document.querySelector(".exp-date").innerHTML = mmValue + "/" + yyvValue;
}

//======== CVC Input =========

document.querySelector(".cvc-input").addEventListener("keyup", (event) => {
    updateCVC();
})

function updateCVC() {
    let cvcInput = document.querySelector(".cvc-input").value;
    let cvcValue = document.querySelector(".cvc").innerHTML;
    let cvcNewValue = document.querySelector(".cvc").innerHTML = cvcInput;
    if (cvcInput.length == 0) document.querySelector(".cvc").innerHTML = "536";
}