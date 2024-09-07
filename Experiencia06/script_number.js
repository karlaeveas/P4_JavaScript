function showNumberProperties(num) {
    // Imprimir encabezado para la salida
    console.log("Propiedades y métodos de Number:");
    
    // Mostrar el valor del número proporcionado
    console.log("Valor:", num);
    
    // Mostrar el tipo de dato del número
    console.log("Tipo:", typeof num);
    
    // Mostrar el valor máximo que puede tener un número en JavaScript
    console.log("Valor máximo:", Number.MAX_VALUE);
    
    // Mostrar el valor mínimo que puede tener un número en JavaScript
    console.log("Valor mínimo:", Number.MIN_VALUE);
    
    // Mostrar el valor especial NaN (Not-a-Number)
    console.log("NaN:", Number.NaN);
    
    // Mostrar el valor positivo infinito
    console.log("Valor positivo infinito:", Number.POSITIVE_INFINITY);
    
    // Mostrar el valor negativo infinito
    console.log("Valor negativo infinito:", Number.NEGATIVE_INFINITY);
    
    // Mostrar el valor de epsilon, que representa la diferencia más pequeña entre dos números representables
    console.log("Número de bits usados para representar un número:", Number.EPSILON);
    
    // Mostrar el número formateado con dos decimales usando el método toFixed
    console.log("Método toFixed():", num.toFixed(2));
    
    // Mostrar el número en notación exponencial con dos decimales usando el método toExponential
    console.log("Método toExponential():", num.toExponential(2));
    
    // Mostrar el número con una precisión de dos dígitos usando el método toPrecision
    console.log("Método toPrecision():", num.toPrecision(2));
    
    // Mostrar el número como una cadena usando el método toString
    console.log("Método toString():", num.toString());
}
  //Ejemplo con Pi
  showNumberProperties(3.141592653);