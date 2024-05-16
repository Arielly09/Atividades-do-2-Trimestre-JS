function gerarNumerosRandomicos(tamanhoArray, min, max) {
    var array = [];
    for (var i = 0; i < tamanhoArray; i++) {
        var numero = Math.floor(Math.random() * (max - min + 1)) + min; // Gera um número randômico no intervalo [min, max]
        array.push(numero); // Adiciona o número ao array
    }
    return array;
}


var tamanhoArray = 10;
var min = 1;
var max = 100;


var numerosRandomicos = gerarNumerosRandomicos(tamanhoArray, min, max);

console.log("Array com números randômicos:", numerosRandomicos);