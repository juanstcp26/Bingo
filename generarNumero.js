var numInicial = 1;
var numFinal = 75;
var sigue,letra;

do{
    numero = Math.round(Math.random() * (numInicial - numFinal) + numFinal); // Número aleatorio
    // Letras
    if (numero >= 1 && numero <= 15) letra = "B";
    if (numero >= 16 && numero <= 30) letra = "I";
    if (numero >= 31 && numero <= 45) letra = "N";
    if (numero >= 46 && numero <= 60) letra = "G";
    if (numero >= 61 && numero <= 75) letra = "O";
    console.log(letra+numero);
    sigue = prompt("Desea sacar otra bola? S/N");
} while (sigue == "S" || sigue == "s")

