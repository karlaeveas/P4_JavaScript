function showWindowProperties() {
    // Obtener el elemento div donde se mostrará la información
    const outputDiv = document.getElementById('output');
    
    // Limpiar el contenido previo del div
    outputDiv.innerHTML = ""; 

    // Agregar un encabezado para las propiedades del objeto Window
    outputDiv.innerHTML += "<strong>Propiedades del objeto Window:</strong><br>";
    
    // Iterar sobre las propiedades del objeto Window
    for (let prop in window) {
        // Agregar cada propiedad al div
        outputDiv.innerHTML += prop + "<br>";
    }

    // Agregar un encabezado para los métodos del objeto Window
    outputDiv.innerHTML += "<br><strong>Métodos del objeto Window:</strong><br>";
    
    // Iterar sobre los métodos del objeto Window
    for (let method in window) {
        // Verificar si la propiedad es una función (método)
        if (typeof window[method] === 'function') {
            // Agregar cada método al div
            outputDiv.innerHTML += method + "<br>";
        }
    }

    // Agregar un encabezado para las dimensiones de la ventana
    outputDiv.innerHTML += "<br><strong>Dimensiones de la ventana:</strong><br>";
    // Mostrar el ancho de la ventana
    outputDiv.innerHTML += "Ancho: " + window.innerWidth + "<br>";
    // Mostrar la altura de la ventana
    outputDiv.innerHTML += "Alto: " + window.innerHeight + "<br>";

    // Agregar un encabezado para la URL actual
    outputDiv.innerHTML += "<br><strong>URL actual:</strong><br>";
    // Mostrar la URL actual de la página
    outputDiv.innerHTML += window.location.href + "<br>";

    // Agregar un encabezado para el navegador y sistema operativo
    outputDiv.innerHTML += "<br><strong>Navegador y sistema operativo:</strong><br>";
    // Mostrar el agente del navegador que incluye información del sistema operativo
    outputDiv.innerHTML += window.navigator.userAgent + "<br>";
}