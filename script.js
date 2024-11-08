function generarCredenciales() {
    // limpiar msjes de error al iniciar
    document.getElementById('errorNombre').textContent = '';
    document.getElementById('errorRut').textContent = '';

    // obtenemos nombre y rut
    const nombre = document.getElementById('nombre').value.trim();
    const rut = document.getElementById('rut').value.trim();

    let valid = true;

    // verificar campos vacios
    if (!nombre) {
        document.getElementById('errorNombre').textContent = 'Por favor, ingresa tu nombre!';
        document.getElementById('errorNombre').classList.add('show');
        valid = false;
    }

    if (!rut) {
        document.getElementById('errorRut').textContent = 'Por favor, ingresa tu RUT!';
        document.getElementById('errorRut').classList.add('show');
        valid = false;
    }

    // validar formato rut que sea bien ingresado
    const rutPattern = /^[0-9]{1,2}\.[0-9]{3}\.[0-9]{3}-[0-9kK]{1}$/;
    if (rut && !rutPattern.test(rut)) {
        document.getElementById('errorRut').textContent = 'Formato de RUT incorrecto!, ejemplo: 12.345.678-9';
        document.getElementById('errorRut').classList.add('show');
        valid = false;
    }

    // si falla, no continuar con la validacion
    if (!valid) {
        return;
    }

    // formateo del nombre
    const nombreFormateado = nombre.charAt(0).toUpperCase() + nombre.slice(1).toLowerCase();

    // quitar los puntos y el guion del rut para separar partes
    const rutSinPuntos = rut.replace(/\./g, '');  
    const rutParts = rutSinPuntos.split('-');  
    const rutSinDv = rutParts[0];
    const digitoVerificador = rutParts[1];

    // aca recibimos los ultimos tres dígitos antes del dig verificador
    const ultimosTres = rutSinDv.slice(-3);

    const usuario = `${nombreFormateado}-${ultimosTres}-${digitoVerificador}`;
    const contraseña = rutSinDv;

    // resultado final!
    document.getElementById('resultadoUsuario').textContent = `Tu usuario es: ${usuario}`;
    document.getElementById('resultadoContraseña').textContent = `Tu Contraseña es: ${contraseña}`;
}
