function startGame() {
    listaNumeriCasuali.innerHTML = ""
}

function askNumbers() {
    
    let numeriSelezionati = [];
    let numeriIndovinati = [];
    let quantitaNumeriIndovinati = [];

    for (let a = 1; a <= 5; a++){
        const numeroSelezionato = prompt("Metti un numero")
        numeriSelezionati.push(numeroSelezionato)

        if (listaNumeriCorretti.includes(parseInt(numeroSelezionato))){
            numeriIndovinati.push(numeroSelezionato);
            console.log(numeriIndovinati)
        } else {
        }
    }
    console.log(listaNumeriCorretti)
    console.log(numeriIndovinati)
    console.log(numeriSelezionati)

    return true
}