function saludarAJebus() {
    let miNombre = prompt("¿Cuál es tu nombre?");
    if (miNombre) {
        alert("Hola " + miNombre + "!");
    }
}

let boton = document.getElementById("boton-saludar");
boton.onclick = saludarAJebus;
