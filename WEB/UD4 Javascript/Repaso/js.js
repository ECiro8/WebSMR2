
let nota = parseFloat(prompt("Tu nota👇👇"))

if (nota >= 5 && nota <= 6){
    alert("Aprobado✅✅");
    } else if(nota >= 7 && nota < 9){
    alert("Notable🗣️✅");
    } else if (nota >= 9 && nota <= 10){
    alert("Sobresaliente🐀");
    } else if ( nota < 5){
    alert("Suspenso🤣🤣🤣🤣");
    } else {
        alert("❌Nota invalida❌")
    }
