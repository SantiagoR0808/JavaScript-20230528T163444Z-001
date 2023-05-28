function convertirAFahrenheit(gradosCelsius) {
  return (gradosCelsius * 9/5) + 32;
}

// Utilizamos la función para convertir 350°F a Celsius
var temperaturaFahrenheit = 350;
var temperaturaCelsius = (temperaturaFahrenheit - 32) * 5/9;

console.log("La temperatura en grados Celsius es: " + temperaturaCelsius + "°C");
