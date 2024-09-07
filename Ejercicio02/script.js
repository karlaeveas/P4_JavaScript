function convertTemperature() {
    //Se optiene el número ingresado
    const temperatureInput = document.getElementById('temperature');
    //Se obtiene la escala elegida
    const scaleSelect = document.getElementById('scale');
    const resultDiv = document.getElementById('result');
  
    const temperature = parseFloat(temperatureInput.value);
    const scale = scaleSelect.value;
  
    let result;
    if (scale === 'celsius') { //Si se desea convertir a celsius
      result = celsiusToFahrenheit(temperature);
      resultDiv.textContent = `${temperature}°C = ${result.toFixed(2)}°F`;
    } else {
      result = fahrenheitToCelsius(temperature);
      resultDiv.textContent = `${temperature}°F = ${result.toFixed(2)}°C`;
    }
  }
  
  function celsiusToFahrenheit(celsius) { //Funcion individual de calculo a fahrenheit
    return (celsius * 9/5) + 32;
  }
  
  function fahrenheitToCelsius(fahrenheit) { //Funcion individual de calculo a celcius
    return (fahrenheit - 32) * 5/9;
}