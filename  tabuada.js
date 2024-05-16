function calcularTabuada() {
    for (var i = 1; i <= 10; i++) {
        console.log("Tabuada do", i + ":");

        for (var j = 1; j <= 10; j++) {
            var resultado = i * j;
            console.log(i + " x " + j + " = " + resultado);
        }

        console.log("");
    }
}


calcularTabuada();
