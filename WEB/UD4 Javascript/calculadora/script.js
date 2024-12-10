
function iguala(){
    let operacion = document.getElementById("op").value;
    var resu = eval(operacion);
    let  resultado = document.getElementById("resultado");
    resultado.textContent = resu + "   ✅";
}

function borrar(){
    let operacion = document.getElementById("op");
    operacion.value = "";
}

function uno(){
    let operacion = document.getElementById("op");
    let uno = "1";
    operacion.value += uno;
}
function dos(){
    let operacion = document.getElementById("op");
    let dos = "2";
    operacion.value += dos;
}
function tres(){
    let operacion = document.getElementById("op");
    let tres = "3";
    operacion.value += tres;
}
function cuatro(){
    let operacion = document.getElementById("op");
    let cuatro = "4";
    operacion.value += cuatro;
}
function cinco(){
    let operacion = document.getElementById("op");
    let cinco = "5";
    operacion.value += cinco;
}
function seis(){
    let operacion = document.getElementById("op");
    let seis = "6";
    operacion.value += seis;
}
function siete(){
    let operacion = document.getElementById("op");
    let siete = "7";
    operacion.value += siete;
}
function ocho(){
    let operacion = document.getElementById("op");
    let ocho = "8";
    operacion.value += ocho;
}
function nueve(){
    let operacion = document.getElementById("op");
    let nueve = "9";
    operacion.value += nueve;
}
function cero(){
    let operacion = document.getElementById("op");
    let cero = "0";
    operacion.value += cero;
}
function mas(){
    let operacion = document.getElementById("op");
    let mas = "+";
    operacion.value += mas;
}
function menos(){
    let operacion = document.getElementById("op");
    let menos = "-";
    operacion.value += menos;
}
function entre(){
    let operacion = document.getElementById("op");
    let entre = "/";
    operacion.value += entre;
}
function por(){
    let operacion = document.getElementById("op");
    let por = "*";
    operacion.value += por;
}
