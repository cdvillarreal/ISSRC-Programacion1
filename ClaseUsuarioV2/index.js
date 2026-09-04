import Usuario from "./classes/Usuario.js";

let nombre, email, edad;
let nombreOK = false, emailOK = false, edadOK = false, pinOK = false;
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// Nombre
do {
    nombre = prompt("Ingrese los datos que se solicitan para crear un nuevo usuario.\nNombre:");
    if (nombre === "" || nombre.length < 3) {
        alert("Ingrese un nombre válido.")
    } else {
        nombreOK = true;
    }
} while (!nombreOK);

// E-mail
do {
    email = prompt("E-mail:");
    if (!emailRegex.test(email)) {
        alert("Ingrese un e-mail válido.")
    } else {
        emailOK = true;
    }
} while (!emailOK);

// Edad
do {
    edad = prompt("Edad:");
    if (edad < 0 || edad > 130 || isNaN(edad)) {
        alert("Ingrese una edad válida.")
    } else {
        edadOK = true;
    }
} while (!edadOK);

const usuario = Usuario.crear(nombre, email, edad);
alert(`Usuario creado:\nNombre: ${usuario.nombre}\nE-mail: ${usuario.email}\nEdad: ${usuario.edad}`);

// Pin
do {
    let pinActual = parseInt(prompt("Ingrese el PIN por defecto para cambiarlo por uno personalizado."));
    let nuevoPin = parseInt(prompt(`Ingrese un nuevo PIN de 4 dígitos para el usuario: ${usuario.nombre}`));
    let cambioPIN = usuario.cambiarPin(pinActual, nuevoPin);
    if (cambioPIN) {
        pinOK = true;
    }
} while (!pinOK);