const listaNumeriCasuali = document.getElementById("lista");
const risposta = document.getElementById("risposta")
let listaNumeriCorretti = [];
const timer = setTimeout( startGame, 1000*30);

for (let i = 1; i <= 5; i++){

    const randomNumber = Math.floor(Math.random() * 100 + 1);

    if (listaNumeriCorretti.includes(randomNumber)){
        i--
    } else {
    listaNumeriCasuali.innerHTML += `<li class="list-group-item">${randomNumber}</li>`;
    listaNumeriCorretti.push(randomNumber);
    }
}

const timerSecondo = setTimeout( askNumbers, 1000*31)