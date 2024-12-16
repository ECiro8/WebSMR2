
function si(){
    let num1 = parseInt(prompt("Dame el numero 1🕛"))
    let num2 = parseInt(prompt("Dame el numero 2🕑"))
    if ( num1 > num2){
        alert("🗣️🗣️🗣️🚨🚨El numero 1 es mayor 🗣️🗣️🗣️🚨🚨")

    }else if (num1 < num2){
        alert("🗣️🗣️🗣️🚨🚨El numero 2 es mayor 🗣️🗣️🗣️🚨🚨")

    }else{
        alert("SON IGUALES🟰🟰 🗣️🗣️🗣️🚨🚨")

    }
}

function bucle(){
    let num1 = parseInt(prompt("Dame el numero ✖️"))
    for (let i = 0; i <= 10; i++) {
        let  multiplicasao = num1 *i;
        console.log(multiplicasao);
        
    }

}

// valor1=uno valor2=dos valor3=tres

function array(){

    let arrai = ["cero", "uno", "dos", "tres"];
    let numer = parseInt(prompt("Dame un numero del 0 al 3"));
   alert(arrai[numer]);

}

function dom(){
    let parrafo = document.getElementById("parrafinho");
    parrafo.style.backgroundColor = "red";
    parrafo.style.fontFamily = "Comic Sans MS";
    parrafo.style.fontSize = "30px";
    parrafo.style.border = "dotted 10px";
    let prom = prompt("dame el texto");
    parrafo.textContent = prom;
}