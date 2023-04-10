//SIMULADOR INTERACTIVO DE PROMEDIO FINAL DE ALUMNO INGRESADO

let n = parseInt(prompt("¿Cuántas notas desea introducir?"));
let suma = 0;

for (let i = 1; i <= n; i++) {
    let numero = parseInt(prompt("Introduzca la nota N°" + i + ":"));
    while (numero < 0 || numero > 20){
        alert("INTRODUCIR UN NUMERO ENTRE EL 0 Y EL 20")
        numero = parseInt(prompt("Introduzca la nota N°" + i + ":"));
    }
    suma += parseInt(numero);
    promedio = parseInt(suma)/ n;
}

alert("El promedio de las notas es: " + promedio );


