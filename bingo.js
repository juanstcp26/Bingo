var numInicial = 1;
var numFinal = 75;
var sigue,letra;

do{
    numero = Math.round(Math.random() * (numInicial - numFinal) + numFinal); // Número aleatorio
    
    console.log(numero);
    sigue = prompt("Desea sacar otra bola? S/N");
} while (sigue == "S" || sigue == "s")