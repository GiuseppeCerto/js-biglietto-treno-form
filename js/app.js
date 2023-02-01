// 0. dichiarare costanti

const inputNameElement = document.getElementById('name-section')

const inputKmElement = document.getElementById('km-section')

const inputAgeElement = document.getElementById('age-section')

// console.log (inputNameElement, kmTravel)

const btnSendElement = document.querySelector('.btn-send')

const btnSendCancel = document.querySelector('.btn-cancel')

const discount65 = parseInt(inputKmElement.value) * 0.4

const discountUnderage = parseInt(inputKmElement.value) * 0.2

// console.log (btnSendElement, btnSendCancel)

// 1. selezionare nome utente
// 2.selexionare chilometri corsa
// 3.selezionare fascia eta

btnSendElement.addEventListener('click', function() {

    let namePassenger = inputNameElement.value

    let kilometerTravel = parseInt(inputKmElement.value)

    let agePassenger = inputAgeElement.value

    switch (agePassenger) {
        case 'nessuna' : 'inputKmElement.value'
        break

        case 'minorenne' : 'inputKmElement.value - discountUnderage'
        break

        case 'over65' : 'inputKmElement.value - discount65'
    }
})

console.log(btnSendElement)




// 4.moltiplicare i chilometri per il prezzo al km
// 4.aggiungere sconto se min. o over65
