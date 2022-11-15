function startGame() {
    listaNumeriCasuali.innerHTML = ""
}

function askNumbers() {

    let numeriSelezionati = [];
    let numeriIndovinati = [];
    let quantitaNumeriIndovinati = 0;

    for (let a = 1; a <= 5; a++){
        const numeroSelezionato = prompt("Metti un numero")
        numeriSelezionati.push(numeroSelezionato)

        if (listaNumeriCorretti.includes(parseInt(numeroSelezionato))){
            numeriIndovinati.push(numeroSelezionato);
            quantitaNumeriIndovinati += 1;
            for (let b = 0; b < listaNumeriCorretti.length; b++){
                if (numeroSelezionato == listaNumeriCorretti[b]){
                    listaNumeriCorretti.splice(b, 1)
                    console.log(listaNumeriCorretti)
                }
            }
        }
    }

    let risultato =""

    if (quantitaNumeriIndovinati == 0){
        risultato = "Mi spiace ma non hai indovinato neanche un numero."
    } else {
        risultato = `Hai indovinato ${quantitaNumeriIndovinati} su 5, ovvero i/il numeri/o: ${numeriIndovinati}.`
    }
    risposta.innerHTML = risultato
    
}