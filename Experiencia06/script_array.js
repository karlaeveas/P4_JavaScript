function visualizarArray(arr) {
    // Verificar si el argumento es un array
    if (!Array.isArray(arr)) {
        console.log("El argumento proporcionado no es un array.");
        return;
    }

    // Mostrar las propiedades del array
    console.log("Propiedades del array:");
    console.log("Longitud:", arr.length);
    console.log("Contenido:", arr);

    // Usar algunos métodos del objeto Array
    console.log("\nMétodos del objeto Array:");
    
    // Método push: Agregar un elemento al final del array
    arr.push("Nuevo elemento");
    console.log("Después de agregar un elemento:", arr);

    // Método pop: Eliminar el último elemento del array
    const elementoEliminado = arr.pop();
    console.log("Elemento eliminado:", elementoEliminado);
    console.log("Después de eliminar el último elemento:", arr);

    // Método forEach: Iterar sobre los elementos del array
    console.log("Iterando sobre los elementos del array:");
    arr.forEach((elemento, indice) => {
        console.log(`Índice ${indice}: ${elemento}`);
    });
}

// Definir un array de ejemplo
const miArray = [5, 4, 3 , 2 , 1];

// Llamar a la función para visualizar las propiedades del array
visualizarArray(miArray);