import Usuario from "../classes/Usuario.js";

const usuarios = [];

const txtNombre = document.getElementById("nombre");
const txtEmail = document.getElementById("email");
const txtEdad = document.getElementById("edad");
const txtTelefono = document.getElementById("telefono");
const chkActivo = document.getElementById("activo");
const txtPassword = document.getElementById("password");
const txtPassword2 = document.getElementById("password2");
const btnGuardar = document.getElementById("btnGuardar");

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const telefonoRegex = /^[0-9]{10}$/;

const guardarUsuario = (nombre, email, edad, telefono, activo, password, password2) => {
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
    if (edad === "" || isNaN(edad) || edad < 0 || edad > 130) {
        alert("Ingrese una edad válida (entre 0 y 130).");
        return;
    }

    // Validación del teléfono
    if (!telefonoRegex.test(telefono)) {
        alert("Ingrese un teléfono válido de 10 dígitos numéricos (código de área + número, sin 0 ni 15).");
        return;
    }

    // Validación de la contraseña
    if (password.length < 6) {
        alert("La contraseña debe tener al menos 6 caracteres.");
        return;
    }

    // Validar que la contraseña y su repetición coincidan
    if (password !== password2) {
        alert("Las contraseñas no coinciden.");
        return;
    }

    // Creación del usuario y carga al array
    const usuario = Usuario.crear(nombre, Number(edad), email, telefono, activo, password);
    usuarios.push(usuario);

    alert(
        `Usuario creado correctamente:\n` +
        `ID: ${usuario.id}\n` +
        `Nombre: ${usuario.nombre}\n` +
        `Email: ${usuario.email}\n` +
        `Edad: ${usuario.edad}\n` +
        `Teléfono: ${usuario.telefono}\n` +
        `Activo: ${usuario.activo ? "Sí" : "No"}`
    );

    document.getElementById("formulario").reset();
};

btnGuardar.addEventListener("click", () => {
    guardarUsuario(
        txtNombre.value.trim(),
        txtEmail.value.trim(),
        txtEdad.value,
        txtTelefono.value.trim(),
        chkActivo.checked,
        txtPassword.value,
        txtPassword2.value
    );
});

// Mostrar / ocultar contraseñas
document.querySelectorAll(".toggle-password").forEach((btn) => {
    btn.addEventListener("click", () => {
        const input = document.getElementById(btn.dataset.toggle);
        const iconEye = btn.querySelector(".icon-eye");
        const iconEyeSlash = btn.querySelector(".icon-eye-slash");
        const mostrar = input.type === "password";

        input.type = mostrar ? "text" : "password";
        iconEye.classList.toggle("hidden", mostrar);
        iconEyeSlash.classList.toggle("hidden", !mostrar);
        btn.setAttribute("aria-label", mostrar ? "Ocultar contraseña" : "Mostrar contraseña");
    });
});
