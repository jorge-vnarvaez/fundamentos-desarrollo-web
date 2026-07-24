// DOM
const correo = document.getElementById("correo")

const formulario = document.getElementById("formulario")

formulario.addEventListener("submit", (event) => {
    event.preventDefault()
    // Escribe tu código aquí debajo
    console.log(correo.value)
})