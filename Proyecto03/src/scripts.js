//Tiempo limite puesto en milisegundos para poder cambiar todos los timeout e Interval necesarios
let tiempo = 30000;
let segundos;

const enviar = document.getElementById("sendBttn")

function tiempoLimite(){
    setTimeout(getRespuestas, tiempo);
}

async function actualizarContador(tiempoVisible){
    while (segundos > 0) {
        segundos--;
        tiempoVisible.textContent = segundos;
    await new Promise(resolve=> setTimeout(resolve, 1000));
    }
}

//getter de las respuestas del usuario, no uso un bucle for ya que son una cantidad fija

function getRespuestas() {

    let r1 = document.getElementById("pregunta1")
    console.log(r1.value);
    let r2 = document.getElementById("pregunta2")
    let r3 = document.getElementById("pregunta3")
    let r4 = document.getElementById("pregunta4")
    let r5 = document.getElementById("pregunta5")

//revisa si las respuestas estan vacias. al solo responder si o no
//el que una respueta esté vacia entrará dentro del else

    if (r1.value != "" && r2.value != "" && r3.value != "" && r4.value != "" && r5.value != "") {
        alert("Respuestas completas\n"+ ` Fecha: ${new Date()}\n
        Respuesta 1: ${r1.value}\n
        Respuesta 2: ${r2.value}\n
        Respuesta 3: ${r3.value}\n
        Respuesta 4: ${r4.value}\n
        Respuesta 5: ${r5.value}\n`)
        location.reload();
    }else{
        alert("Game Over")
        location.reload();
    }
}

document.addEventListener("DOMContentLoaded", () => {
    const tiempoVisible = document.getElementById("temporizador");
    segundos = tiempo/1000
    setInterval(actualizarContador(tiempoVisible), tiempo);
    tiempoLimite();
});

function enviarFormulario(){
    clearTimeout(tiempoLimite);
    getRespuestas();
}