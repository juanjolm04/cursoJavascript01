let opA;
let opB;
let res;

function suma() {

    opA = document.getElementById("operadorA");
    opB = document.getElementById("operadorB");

    res = parseFloat(opA.value) + parseFloat(opB.value);

    document.getElementById("resultado").value = res;
    
}

function resta() {

    opA = document.getElementById("operadorA");
    opB = document.getElementById("operadorB");

    res = parseFloat(opA.value) - parseFloat(opB.value);

    document.getElementById("resultado").value = res;
    
}

function mult() {

    opA = document.getElementById("operadorA");
    opB = document.getElementById("operadorB");

    res = parseFloat(opA.value) * parseFloat(opB.value);

    document.getElementById("resultado").value = res;
    
}

function div() {

    opA = document.getElementById("operadorA");
    opB = document.getElementById("operadorB");

    res = parseFloat(opA.value) / parseFloat(opB.value);

    document.getElementById("resultado").value = res;
    
}

function potencia() {

    opA = document.getElementById("operadorA");
    opB = document.getElementById("operadorB");

    res = Math.pow(parseFloat(opA.value), parseFloat(opB.value));  

    document.getElementById("resultado").value = res;
    
}

function raiz() {

    opA = document.getElementById("operadorA");

    res = Math.sqrt(parseFloat(opA.value));  

    document.getElementById("resultado").value = res;
    
}

function absoluto() {

    opA = document.getElementById("operadorA");

    res = Math.abs(parseFloat(opA.value));

    document.getElementById("resultado").value = res;
    
}

function aleatorio() {

    opA = document.getElementById("operadorA");
    opB = document.getElementById("operadorB");

    res = Math.random() * (parseFloat(opA.value) - parseFloat(opB.value) + parseFloat(opB.value));  

    document.getElementById("resultado").value = res;
    
}

function redondear() {

    opA = document.getElementById("operadorA");

    res = Math.round(parseFloat(opA.value));

    document.getElementById("resultado").value = res;
    
}

function suelo() {

    opA = document.getElementById("operadorA");

    res = Math.floor(parseFloat(opA.value));  

    document.getElementById("resultado").value = res;
    
}

function techo() {

    opA = document.getElementById("operadorA");

    res = Math.ceil(parseFloat(opA.value));  

    document.getElementById("resultado").value = res;
    
}
