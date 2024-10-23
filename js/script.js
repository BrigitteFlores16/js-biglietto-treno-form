const userName = document.getElementById('firstnamelastname'); 
const km = document.getElementById('km');
const ageSelect = document.getElementById('age');
const calcButton = document.getElementById('calc');
const annullaButton = document.getElementById('annulla');
const discountTypeDiv = document.getElementById('discount-type');
const resultContainerDiv = document.getElementById('result-container');


calcButton.addEventListener('click', function() {

    console.log('km.value', km.value, typeof km.value);
    console.log('age.value', age.value, typeof age.value);

    const kmNumber = parseInt(km.value);
    const ageNumber = parseInt(age.value);

    let discount20 = ('Biglietto under 18 - Sconto 20%');
    let discount40 = ('Biglietto over 65 - Sconto 40%');
    let nodiscount = ('Biglietto Standard');


    let price =(kmNumber * 0.21);
    console.log('price', price, typeof price);



    if (ageNumber < 18) {
        price *= 0.8;
        const discountType = document.querySelector('#discount-type');
        discountType.innerHTML = discount20;

    }

    else if (ageNumber > 65) {
        price *= 0.6;
        const discountType = document.querySelector('#discount-type');
        discountType.innerHTML = discount40;
    }

    else if (ageNumber >= 65 <= 18) {
        const discountType = document.querySelector('#discount-type');
        discountType.innerHTML = nodiscount;
    }

    const resultContainer = document.querySelector('#result-container');
    console.log ('resultContainer', resultContainer, typeof resultContainer);
    
    resultContainer.innerHTML = 'Il prezzo è € ' + (price ).toFixed(2);


});
