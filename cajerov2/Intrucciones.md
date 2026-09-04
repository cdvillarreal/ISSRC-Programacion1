### Agregamos la implementación de un array de usuarios:

```
let db_user = [
    {
        username: "carlos25",
        password: "1dos3",
        saldo: 100000
    },
    {
        username: "benja24",
        password: "2uno3",
        saldo: 100000
    },
    {
        username: "jose26",
        password: "3uno2",
        saldo: 100000
    }
]
```

Se deben modificar todas las funciones para soportar el logueo multi-usuario.

### Cambios:
* `login()` ahora debe retornar el usuario autenticado (ya no **db_user** porque es el array con todos los usuarios).
* Las funciones `consultarSaldo()`, `deposito()` y `extraccion()` ahora deben recibir el objeto del usuario para realizar la operación.
* Se deben mostrar obligatoriamente un mensaje de bienvenida y despedida al usuario que se loguea.