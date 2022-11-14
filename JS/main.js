const listaNumeriCasuali = document.getElementById("lista");

for (let i = 1; i <= 5; i++){

    const randomNumber = Math.floor(Math.random() * 100 + 1);
    listaNumeriCasuali.innerHTML += `<li class="list-group-item">${randomNumber}</li>`
}