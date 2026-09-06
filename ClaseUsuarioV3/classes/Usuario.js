class Usuario {
    nombre;
    email;
    edad;
    #pin = "1234";

    constructor(nombre, email, edad) {
        this.nombre = nombre;
        this.email = email;
        this.edad = edad;
    }

    static crear(nombre, email, edad) {
        return new Usuario(nombre, email, edad);
    }

    cambiarPin = (pinActual, nuevoPin) => {
        if (String(pinActual) !== this.#pin) {
            alert("PIN actual incorrecto.");
            return false;
        } else if (!/^\d{4}$/.test(String(nuevoPin))) {
            alert("Formato de PIN incorrecto. Ingrese un PIN numérico de 4 dígitos.");
            return false;
        } else {
            this.#pin = String(nuevoPin);
            return true;
        }
    }
}

export default Usuario;