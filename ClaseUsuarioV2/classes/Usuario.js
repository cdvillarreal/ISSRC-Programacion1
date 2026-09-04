class Usuario {
    nombre;
    email;
    edad;
    #pin = 1234;

    constructor(nombre, email, edad) {
        this.nombre = nombre;
        this.email = email;
        this.edad = edad;
    }

    static crear(nombre, email, edad) {
        return new Usuario(nombre, email, edad);
    }

    cambiarPin = (pinActual, nuevoPin) => {
        if (pinActual !== this.#pin) {
            alert("PIN actual incorrecto. No se puede cambiar el PIN.");
            return false;
        } else if (nuevoPin < 1000 || nuevoPin > 9999 || isNaN(nuevoPin)) {
            alert("Formato de PIN incorrecto. Ingrese un PIN numérico de 4 dígitos.");
            return false;
        } else {
            alert(`PIN cambiado exitosamente para el usuario: ${this.nombre}`);
            this.#pin = nuevoPin;
            return true;
        }
    }
}

export default Usuario;