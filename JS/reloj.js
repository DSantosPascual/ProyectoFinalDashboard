function formatoTiempo(unit) {
    return unit < 10 ? '0' + unit : unit;     //!agregar un cero delante de los números menores de 10
}

function actualizarReloj() {
    const now = new Date();
    
    const horas = formatoTiempo(now.getHours());
    const minutos = formatoTiempo(now.getMinutes());
    const segundos = formatoTiempo(now.getSeconds());
    
    const dia = formatoTiempo(now.getDate());
    const mes = formatoTiempo(now.getMonth() + 1); //! Para qué los meses empiecen desde 1
    const año = now.getFullYear();
    
    document.getElementById('clock-time').textContent = `${horas}:${minutos}:${segundos}`;
    document.getElementById('current-date').textContent = `${dia}/${mes}/${año}`;
    
    
    let mensaje;                                //! Mensajes personalizados según el tramo horario
    if (horas >= 0 && horas < 7) {
        mensaje = "Es hora de dormir. Mañana será otro día";
    } else if (horas >= 7 && horas < 12) {
        mensaje = "GOOD MORNING! Un buen desayuno y a codear";
    } else if (horas >= 12 && horas < 14) {
        mensaje = "Puedes currar un rato más pero no olvides el almuerzo";
    } else if (horas >= 14 && horas < 16) {
        mensaje = "¿Has comido ya? Es el momento";
    } else if (horas >= 16 && horas < 18) {
        mensaje = "Buenas tardes, ¿un cafelito y el último empujón?";
    } else if (horas >= 18 && horas < 22) {
        mensaje = "Estás echando horas extras...";
    } else {
        mensaje = "Buenas noches, es un buen momento para el ocio";
    }
    
    document.getElementById('time-message').textContent = mensaje;
}

setInterval(actualizarReloj, 1000);

actualizarReloj();


/*
La función formatoTiempo() hace qué siempre se muestren dos dígitos de las horas, minutos y segundos (01 en lugar de 1).
La función actualizarReloj() obtiene la hora y la fecha actual con new Date(), y luego actualiza los elementos HTML correspondientes (#clock-time y #current-date).
En función de la hora, se muestra un mensaje diferente con un if para definir las frases.
setInterval() se utiliza para actualizar el reloj cada segundo, lo que permite que la hora y los segundos se actualicen automáticamente.
Resultado esperado:
El reloj se actualizará cada segundo, mostrando la hora y la fecha en formato correcto.
Dependiendo de la hora, aparecerá una frase diferente.
El diseño será oscuro con texto claro y bien organizado.
*/