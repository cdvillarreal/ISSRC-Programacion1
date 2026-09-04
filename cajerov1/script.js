// Simulador CAJERO AUTOMÁTICO

let db_user = {
  username: "Daniel",
  password: "1234",
  saldo: 10000,
};

const textoMenu = `
Seleccione una opción para operar:

1- Consulta de saldo
2- Deposito
3- Extracción
4- Salir
`;

// Ejecución
let usuarioLogueado = login();
if (usuarioLogueado) {
  alert(`Bienvenido ${usuarioLogueado}.`);
} else {
  alert("Usuario o contraseña incorrectos.");
}

if (usuarioLogueado) {
  let continuarOperando = true;
  while (continuarOperando) {
    let opcionSeleccionada = parseInt(prompt(textoMenu));
    switch (opcionSeleccionada) {
      case 1:
        consultarSaldo();
        break;
      case 2:
        let montoDeposito = parseFloat(prompt("Ingrese la cantidad de dinero que quiera depositar."));
        deposito(montoDeposito);
        break;
      case 3:
        let montoRetiro = prompt("Ingrese la cantidad de dinero a retirar.");
        extraccion(montoRetiro);
        break;
      case 4:
        continuarOperando = false;
        alert(`Gracias por operar con nosotros. Hasta luego ${db_user.username}.`);
        break;
    }
  }
}

function login() {
  // 1. Solicitar username y password
  // 2. Validar contra `db_user`
  // 3. Retornar el usuario si el login es correcto, sino `undefined`
  let user = prompt("Usuario");
  let pass = prompt("Contraseña");
  if (user === db_user.username && pass === db_user.password) {
    return user;
  } else {
    return undefined;
  }
}

function consultarSaldo() {
  // 1. Muestra un mensaje con el saldo disponible
  alert(`Saldo en la cuenta: $${db_user.saldo}.`);
}

function deposito(monto) {
  // 1. Valida que el monto sea un número válido
  // 2. Actualiza `db_user`
  // 3. Muestra un mensaje con el nuevo saldo
  if (!Number.isNaN(monto)) {
    db_user.saldo += monto;
    alert(`Saldo actualizado: $${db_user.saldo}`);
  } else {
    alert("El valor ingresado es incorrecto. Intente nuevamente.");
  }
}

function extraccion(monto) {
  // 1. Valida que el monto sea un número válido
  // 2. Valida que el monto a extraer no supere al saldo de `db_user`
  // 3. Actualiza `db_user`
  // 4. Muestra un mensaje con el monto extraido y el saldo restante
  if (!Number.isNaN(monto)) {
    if (monto > db_user.saldo) {
      alert(`No se puede retirar esa cantidad porque supera su saldo $${db_user.saldo}.`);
    } else {
      db_user.saldo -= monto;
      alert(`Acaba de retirar $${monto}, su nuevo saldo es $${db_user.saldo}.`);
    }
  }
}
