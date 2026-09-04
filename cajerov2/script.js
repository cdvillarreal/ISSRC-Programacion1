// Simulador CAJERO AUTOMÁTICO v2

let db_user = [
    {
      username: "Daniel",
      password: "1234",
      saldo: 10000,
    },
    {
      username: "Cynthia",
      password: "1111",
      saldo: 100000
    },
    {
      username: "Pepe",
      password: "0000",
      saldo: 100000
    }
]

const textoMenu = `
Seleccione una opción para operar:

1- Consulta de saldo
2- Deposito
3- Extracción
4- Salir
`;

let usuarioLogueado = login();

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
  let usuarioEncontrado;
  while (!usuarioEncontrado) {
    let user = prompt("Usuario");
    let pass = prompt("Contraseña");
    for (let i = 0; i < db_user.length; i++) {
      if (user === db_user[i].username && pass === db_user[i].password) {
        usuarioEncontrado = db_user[i];
        break;
      }
    }
    if (!usuarioEncontrado) {
      alert("Usuario o contraseña incorrectos. Intente nuevamente.");
    } else {
      alert(`Bienvenido ${usuarioEncontrado.username}.`);
    }
  }
  db_user = usuarioEncontrado;
  return usuarioEncontrado ? usuarioEncontrado.username : undefined;
}

function consultarSaldo() {
  alert(`Saldo en la cuenta: $${db_user.saldo}.`);
}

function deposito(monto) {
  if (!Number.isNaN(monto)) {
    db_user.saldo += monto;
    alert(`Saldo actualizado: $${db_user.saldo}`);
  } else {
    alert("El valor ingresado es incorrecto. Intente nuevamente.");
  }
}

function extraccion(monto) {
  if (!Number.isNaN(monto)) {
    if (monto > db_user.saldo) {
      alert(`No se puede retirar esa cantidad porque supera su saldo $${db_user.saldo}.`);
    } else {
      db_user.saldo -= monto;
      alert(`Acaba de retirar $${monto}, su nuevo saldo es $${db_user.saldo}.`);
    }
  }
}
