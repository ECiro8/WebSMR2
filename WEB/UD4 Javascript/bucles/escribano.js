
let resultado = 0 ;

for (let number = 1; number <= 10;number ++){
    resultado = resultado + number;
    console.log("el numero vale " + number);
    console.log("El resultado vale " + resultado);
    document.body.innerHTML += "<p>Resultado vale = " + resultado + "</p>";
}

console.log("El resultado es " + resultado)