// 0. dichiarare costanti

const inputNameElement = document.getElementById('name-section')

const inputKmElement = document.getElementById('km-section')

const inputAgeElement = document.getElementById('age-section')

const btnSendElement = document.querySelector('.btn-send')

const btnSendCancel = document.querySelector('.btn-cancel')

// 3.selezionare fascia eta

btnSendElement.addEventListener('click', function() {

    // 1. selezionare nome utente

    let namePassenger = inputNameElement.value

    // 2.selexionare chilometri corsa

    let kilometerTravel = parseInt(inputKmElement.value)

    // console.log(kilometerTravel)    

    const pricePerKm = 0.21

    // console.log(pricePerKm)

    let kmPrice = kilometerTravel * pricePerKm

    // 3.selezionare fascia eta

    let kmPriceDiscounted  = document.getElementById('ticket-discount')

    let agePassenger = inputAgeElement.value

    if (agePassenger === 'minorenne') {
        kmPriceDiscounted = kmPrice * 0.8;

    }else if(agePassenger === 'adulto') {
        kmPriceDiscounted = kmPrice;

    }else if(agePassenger === 'over-65') {
        kmPriceDiscounted = kmPrice * 0.6;
    }
    
    console.log *kmPriceDiscounted
    // .5 spamapre su biglietto i dati

    let ticketName = namePassenger

    ticketName = document.getElementById('ticket-name')

    ticketName.innerHTML =  namePassenger

    let ticketKm = kilometerTravel

    ticketKm = document.getElementById('ticket-km')

    ticketKm.innerHTML = kilometerTravel

    let ticketAge = agePassenger

    ticketAge = document.getElementById('ticket-age')

    ticketAge.innerHTML = agePassenger

    let ticketPrice  

    ticketPrice = document.getElementById('ticket-price')

    ticketPrice.innerHTML = (kmPrice).toFixed(2)

    kmPriceDiscounted.innerHTML = (kmPriceDiscounted).toFixed(2)

    console.log(kmPriceDiscounted)

    




    
})





// 4.moltiplicare i chilometri per il prezzo al km
// 4.aggiungere sconto se min. o over65
