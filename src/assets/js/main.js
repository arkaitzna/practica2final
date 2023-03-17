
//Ejercicio 6 y 7
let nombre = prompt(
    "Escribeme tu nombre"
)
nombre = nombre[0].toUpperCase() + nombre.substring(1)
console.log(nombre[0].toUpperCase()
);

let elementohtml = document.querySelector("#nombre")
elementohtml.innerHTML= `Hola ${nombre}! Aprendamos Front-End`
console.log(elementohtml.innerHTML);

//Ejercicio 9

const a = prompt(
  "Escribe un numero y te digo si es par o impar"
);if (isNaN(a) || a < 0) {
  alert(`${a} no es un valor correcto.`);
}if (a % 2 === 0) {
  alert(`${a} es un número par`);
  } if (a % 2== 1) {
  alert(`${a} es un número impar`);
  }

let numero = parseInt(prompt("Introduce un número entero positivo:"));
if (isNaN(numero) || numero < 0) {
  alert("El número introducido no es válido.");
} else {
  let mensaje = "";
  for (let i = numero; i <= 20; i++) {
    mensaje += i + "\n";
  }
  if (numero > 20) {
    mensaje = "El número introducido es mayor que 20.\n" + mensaje;
  }
  alert(mensaje);
}
//Ejercicio 10

function invertirCadena(text) {
    let resultado = "";
    for (let i = text.length - 1; i >= 0; i--) {
      resultado += text[i];
    }
    return resultado;
  }

  let text = prompt("Introduce un texto y te diré si es un palindromo:");
  let textInvertido = invertirCadena(text);

  if (text === textInvertido) {
    alert(`${text} es un palíndromo`);
  } else {
    alert(`${text} no es un palíndromo`);
  }


  // Ejercicio 11
const colores = ['rojo', 'verde', 'azul'];
const coloresClon = [];

for (let color of colores) {

  coloresClon.push(color);
}

console.log('Array original:', colores);
console.log('Copia del array:', coloresClon);

alert('Array original:', colores);
alert(colores)
alert('Copia del array:', coloresClon);
alert(coloresClon)

