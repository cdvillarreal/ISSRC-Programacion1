import Usuario from "../classes/Usuario.js";

const txtNombre = document.getElementById("nombre");
const txtEmail = document.getElementById("email");
const txtEdad = document.getElementById("edad");
const txtPinActual = document.getElementById("pinActual");
const txtNuevoPin = document.getElementById("pinNuevo");
const txtNuevoPin2 = document.getElementById("pinNuevo2");
const btnCrear = document.getElementById("btnCrear");
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const crearUsuario = (nombre, email, edad, pinActual, nuevoPin, nuevoPin2) => {
    // Validación del nombre
    if (nombre === "" || nombre.length < 3) {
        alert("Ingrese un nombre de al menos 3 caracteres.");
        return;
    }

    // Validación del e-mail
    if (!emailRegex.test(email)) {
        alert("Ingrese un e-mail válido.");
        return;
    }

    // Validación de la edad
    if (edad < 0 || edad > 130 || isNaN(edad)) {
        alert("Ingrese una edad válida (Entre 0 y 130).");
        return;
    }

    // Validación del nuevo PIN
    if (nuevoPin.length !== 4 || isNaN(nuevoPin)) {
        alert("Ingrese un nuevo PIN válido de 4 dígitos.");
        return;
    }

    // Validar que el nuevo PIN y la confirmación coincidan
    if (nuevoPin !== nuevoPin2) {
        alert("Los PINs nuevos no coinciden.");
        return;
    }

    // Creación del usuario y cambio del PIN
    const usuario = Usuario.crear(nombre, email, edad);

    const cambioPin = usuario.cambiarPin(pinActual, nuevoPin);
    if (!cambioPin) {
        return;
    }

    alert(`Usuario creado correctamente:\nNombre: ${usuario.nombre}\nE-mail: ${usuario.email}\nEdad: ${usuario.edad}\n\nPIN cambiado exitosamente.`);
    txtNombre.value = "";
    txtEmail.value = "";
    txtEdad.value = "";
    txtPinActual.value = "";
    txtNuevoPin.value = "";
    txtNuevoPin2.value = "";
}

btnCrear.addEventListener("click", () => {
    crearUsuario(txtNombre.value, txtEmail.value, txtEdad.value, txtPinActual.value, txtNuevoPin.value, txtNuevoPin2.value);
});