let operacion1 = "";
let operDigitada = document.getElementById("operacionDigitada");
let resul = document.getElementById("resultado");

let operador = "";
let numero = "";
let ultimoDigito ="";

function borrar() {
    operacion1 = "";
    operador = "";
    ultimoDigito = "";
    numero = "";
    operDigitada.innerHTML = "";
    resul.innerHTML = "";    
}

function calcular() {
    operDigitada.innerHTML = operacion1;
    operacion1 = eval(operacion1);
    if (operacion1 == Infinity) {
        resul.innerHTML = '<div class="error">No valida por cero!</div>';
        operDigitada.innerHTML = "";
    } else {
        resul.innerHTML = operacion1;
        operacion1 = operacion1.toString();
        numero = "";
    }
}

function digito(num) {
    numero = numero + num;
    operacion1 = operacion1 + num;
    operDigitada.innerHTML = operacion1;
    if (ultimoDigito == "operacion") {
        ultimoDigito = "numero";
    }
}

function operacion(operador) {
    operDigitada = operador;
    ultimoDigito = "operacion";
    operacion1 = operacion1 + operador;
    numero = "";
    operDigitada.innerHTML = operacion1;
}

function raizCuadrada() {
    if (numero !== "") {
        if (parseFloat(numero) < 0) {
            resul.innerHTML = '<div class="error">Número negativo!</div>';
            operDigitada.innerHTML = "";
        } else {
        numero = Math.sqrt(parseFloat(numero));
        if (Number.isInteger(numero)) {
            numero = numero.toFixed(0);
        } else {
            numero = numero.toFixed(7);
        }
        operacion1 = numero.toString();
        ultimoDigito = "numero";
        resul.innerHTML = operacion1;
        }
    }
}

function elevarAlCuadrado() {
    if (numero !== "") {
        numero = Math.pow(parseInt(numero), 2);
        operacion1 = numero.toString();
        ultimoDigito = "numero";
        resul.innerHTML = operacion1;
    }
}

function factorial() {
    if (numero !== "") {
        if (numero < 0) {
            resul.innerHTML = '<div class="error">Número negativo!</div>';
            operDigitada.innerHTML = "";
        } else {
        numero = parseInt(numero);
        var resultado = 1;
        for (var i = 2; i <= numero; i++) {
            resultado *= i;
        }
        numero = numero.toFixed(7);
        operacion1 = resultado.toString();
        ultimoDigito = "numero";
        resul.innerHTML = operacion1;
        }
    }
}

