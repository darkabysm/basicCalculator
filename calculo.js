let numPantalla = "";
let operador = "";
let n1, n2, resultado = 0;


function num(i) {
    numPantalla += i;
    document.getElementById("pantalla").value = numPantalla;
    return numPantalla;
}

function ope(i) {
    n1 = parseInt(numPantalla);
    operador = i;
    numPantalla = "";
    return numPantalla, operador, n1;
}

function limpieza() {
    numPantalla = "";
    document.getElementById("pantalla").value = 0;
    return numPantalla;
}

function calculo() {
    n2 = parseInt(numPantalla);

    switch (operador) {
        case "+":
            resultado = n1 + n2;
            break;
        case "-":
            resultado = n1 - n2;
            break;
        case "*":
            resultado = n1 * n2;
            break;
        case "/":
            resultado = n1 / n2;
            break;
    }
    n1 = 0;
    n2 = 0;
    document.getElementById("pantalla").value = resultado;
    numPantalla = resultado;
    return numPantalla, n1, n2;
}