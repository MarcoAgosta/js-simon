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
                    listaNumeriCorretti.splice(b, b+1)
                }
            }
        }
    }

    const risultato = `Hai indovinato ${quantitaNumeriIndovinati} su 5, ovvero ${numeriIndovinati}.`
    risposta.innerHTML = risultato
    
}