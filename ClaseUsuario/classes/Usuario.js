class Usuario {
    nombre;
    email;
    edad;
    #pin;

    constructor(nombre, email, edad, pin) {
        this.nombre = nombre;
        this.email = email;
        this.edad = edad;
        this.#pin = pin;
    }

    static crear(nombre, email, edad, pin) {
        return new Usuario(nombre, email, edad, pin);
    }
}

export default Usuario;