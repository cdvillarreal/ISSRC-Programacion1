class Usuario {
    static #ultimoId = 0;

    id;
    nombre;
    edad;
    email;
    telefono;
    activo;
    #password;

    constructor(nombre, edad, email, telefono, activo, password) {
        this.id = ++Usuario.#ultimoId;
        this.nombre = nombre;
        this.edad = edad;
        this.email = email;
        this.telefono = telefono;
        this.activo = activo;
        this.#password = password;
    }

    static crear(nombre, edad, email, telefono, activo, password) {
        return new Usuario(nombre, edad, email, telefono, activo, password);
    }

    setPassword(password) {
        this.#password = password;
    }

    verificarPassword(password) {
        return this.#password === password;
    }
}

export default Usuario;