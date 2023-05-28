let numero = parseInt(prompt("Ingrese un número:"));

if (numero > 0) {
  console.log("El número ingresado es positivo.");
} else if (numero < 0) {
  console.log("El número ingresado es negativo.");
} else {
  console.log("El número ingresado es cero.");
}

//2--------
let numero5 = parseFloat(prompt("Ingrese el primer número:"));
let numero4 = parseFloat(prompt("Ingrese el segundo número:"));

if (numero5 > numero4) {
  console.log("El primer número ingresado es el mayor.");
  console.log("El segundo número ingresado es el menor.");
} else if (numero4 > numero5) {
  console.log("El segundo número ingresado es el mayor.");
  console.log("El primer número ingresado es el menor.");
} else {
  console.log("Ambos números son iguales.");
}
//3-------
let numero1 = parseInt(prompt("Ingrese el primer número:"));
let numero2 = parseInt(prompt("Ingrese el segundo número:"));
let numero3 = parseInt(prompt("Ingrese el tercer número:"));

let mayor = numero1;
let menor = numero1;

if (numero2 > mayor) {
  mayor = numero2;
} else if (numero2 < menor) {
  menor = numero2;
}

if (numero3 > mayor) {
  mayor = numero3;
} else if (numero3 < menor) {
  menor = numero3;
}

console.log("El número mayor es: " + mayor);
console.log("El número menor es: " + menor);
