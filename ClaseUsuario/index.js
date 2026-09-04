import Usuario from "./classes/Usuario.js";

// const usuario = Usuario.crear("Daniel", "cdvillarreal@gmail.com", 45, 1234);

let nombre, email, edad, pin;
let nombreOK = false, emailOK = false, edadOK = false, pinOK = false;

// Nombre
do {
    nombre = prompt("Ingrese los datos del usuario para crearlo.\nNombre:");
    if (nombre === "" || nombre.length < 3) {
        alert("Ingrese un nombre válido.")
    } else {
        nombreOK = true;
    }
} while (!nombreOK);

// E-mail
do {
    email = prompt("E-mail:");
    if (email === "" || email.length < 5 || !email.includes("@") || !email.includes(".")) {
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

// Pin
do {
    pin = prompt("Pin (4 dígitos):");
    if (pin < 0 || pin > 9999 || isNaN(pin)) {
        alert("Ingrese un pin numérico de 4 dígitos.")
    } else {
        pinOK = true;
    }
} while (!pinOK);

const usuario = Usuario.crear(nombre, email, edad, pin);

alert(`Usuario creado:\n
Nombre: ${usuario.nombre}
E-mail: ${usuario.email}
Edad: ${usuario.edad}`);