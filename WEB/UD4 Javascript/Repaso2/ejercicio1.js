function ejercicio1(){
    let numero = parseInt(prompt("Dame un numero y te dire si es par o impar"))
    if( esPar( numero )){
        alert("es par")
    } else {
        alert("impar")
    }
}

function esPar( numero ){
    if (numero % 2 === 0){
        return true;
    } else{
        return false;
    }
}