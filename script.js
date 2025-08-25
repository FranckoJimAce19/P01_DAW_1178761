function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}


//Ejercicio 1
const titulo = document.getElementById("titulo");
titulo.textContent = "¡Manipulación del DOM!";

const elementos = document.querySelectorAll(".parrafo");
elementos.forEach(p=> {
    p.style.color = "blue";
});

const primero = document.querySelector("#lista li");
primero.textContent = "Elemento modificado";

//Ejercicio 2
const lista = document.getElementById("lista");
const nuevo = document.createElement("li");
nuevo.textContent = "Elemento 3";
lista.appendChild(nuevo);

const parrafos = document.getElementsByClassName("parrafo");
const parrafoSegundo = parrafos[1];
const parrafoNuevo = document.createElement("p");
parrafoNuevo.textContent = "Este es un nuevo párrafo";
parrafoSegundo.parentNode.insertBefore(parrafoNuevo, parrafoSegundo.nextSibling);

const listaElementos = lista.getElementsByTagName("li");
const listaSegundo = listaElementos[1];
if (listaSegundo) {
    lista.removeChild(listaSegundo);
}

//Ejercicio 3
const boton = document.getElementById("boton");
boton.addEventListener("click", () => {
    const color = getRandomColor();
    document.body.style.backgroundColor = color;
});

//Ejercicio 4
const h1 = document.getElementById("titulo");
h1.style.fontSize = "48px";

const parrafoPrimero = document.getElementsByClassName("parrafo")[0];
parrafoPrimero.style.border = "2px solid red";

const ul = document.getElementById("lista");
const items = ul.getElementsByTagName("li");
for (let i = 0; i < items.length; i++) {
    items[i].style.display = "inline-block";
}