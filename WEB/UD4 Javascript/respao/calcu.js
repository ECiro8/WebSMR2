function igual(){
    let operacion = document.getElementById("pantalla").value;
    var resu = eval(operacion);
    let resolucion = document.getElementById("pantalla");
    resolucion.value = resu + "   ✅";
}

function borrar(){
    let operacion = document.getElementById("pantalla");
    operacion.value = "";
}

function uno(){
    let operacion = document.getElementById("pantalla");
    let uno = "1";
    operacion.value += uno;
}
function dos(){
    let operacion = document.getElementById("pantalla");
    let dos = "2";
    operacion.value += dos;
}
function tres(){
    let operacion = document.getElementById("pantalla");
    let tres = "3";
    operacion.value += tres;
}
function cuatro(){
    let operacion = document.getElementById("pantalla");
    let cuatro = "4";
    operacion.value += cuatro;
}
function cinco(){
    let operacion = document.getElementById("pantalla");
    let cinco = "5";
    operacion.value += cinco;
}
function seis(){
    let operacion = document.getElementById("pantalla");
    let seis = "6";
    operacion.value += seis;
}
function siete(){
    let operacion = document.getElementById("pantalla");
    let siete = "7";
    operacion.value += siete;
}
function ocho(){
    let operacion = document.getElementById("pantalla");
    let ocho = "8";
    operacion.value += ocho;
}
function nueve(){
    let operacion = document.getElementById("pantalla");
    let nueve = "9";
    operacion.value += nueve;
}
function cero(){
    let operacion = document.getElementById("pantalla");
    let cero = "0";
    operacion.value += cero;
}
function mas(){
    let operacion = document.getElementById("pantalla");
    let mas = "+";
    operacion.value += mas;
}
function menos(){
    let operacion = document.getElementById("pantalla");
    let menos = "-";
    operacion.value += menos;
}
function entre(){
    let operacion = document.getElementById("pantalla");
    let entre = "/";
    operacion.value += entre;
}
function por(){
    let operacion = document.getElementById("pantalla");
    let por = "*";
    operacion.value += por;
}
