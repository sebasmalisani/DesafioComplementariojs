

let titulo = document.getElementById("titulo");

let comida = [ 'Pollo', 'Asado', 'Fideos', 'Caramelos']

let comidaRandom = comida[Math.round(Math.random()*4)]

let nombre = prompt('Ingrese su nombre')
titulo.innerHTML = `<h1> ${nombre} quiere ${comidaRandom} </h1>`