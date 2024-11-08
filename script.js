function generarCredenciales() {
    // obtenemos nombre y rut
    const nombre = document.getElementById('nombre').value.trim();
    const rut = document.getElementById('rut').value.trim();

    // Verificar si los campos están vacíos
    if (!nombre || !rut) {
        alert("Datos mal ingresados! Por favor, completa ambos campos.");
        return; // Detiene la ejecución si los campos están vacíos
    }

    // validacion del formato del rut
    const rutPattern = /^[0-9]{1,2}\.[0-9]{3}\.[0-9]{3}-[0-9kK]{1}$/;
    if (!rutPattern.test(rut)) {
        alert("Formato de RUT incorrecto. Debe ser como: 12.345.678-9");
        return; // Detiene la ejecución si el RUT no está en el formato correcto
    }

    // formateo del nombre
    const nombreFormateado = nombre.charAt(0).toUpperCase() + nombre.slice(1).toLowerCase();

    // Quitar los puntos y el guion del RUT para separar partes
    const rutSinPuntos = rut.replace(/\./g, '');  
    const rutParts = rutSinPuntos.split('-');  
    const rutSinDv = rutParts[0];
    const digitoVerificador = rutParts[1];

    // recibir los últimos 3 dígitos antes del dig verificador
    const ultimosTres = rutSinDv.slice(-3);

    const usuario = `${nombreFormateado}-${ultimosTres}-${digitoVerificador}`;
    const contraseña = rutSinDv;

    // resultado
    document.getElementById('resultadoUsuario').textContent = `Tu usuario es: ${usuario}`;
    document.getElementById('resultadoContraseña').textContent = `Contraseña: ${contraseña}`;
}
