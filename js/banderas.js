let puntos = 0;
let ronda = 0;

function getRandomNumber(max) {
    return Math.floor(Math.random() * (max+1));
}

let preguntaActual = preguntas[getRandomNumber(48)];

let imagenBandera = document.getElementById('imagenBandera');

imagenBandera.src = preguntaActual.urlImagenDeLaBandera;

let opciones = document.getElementsByClassName('btnTextoOpcion');

opciones[getRandomNumber(3)].innerHTML = preguntaActual.respuestaCorrecta;

let j = 0;
for (const i in opciones) {
    if (opciones[i].innerHTML === '') {
        opciones[i].innerHTML = preguntaActual.respuestasIncorrectas[j];
        j++;
    }
}

opciones[0].addEventListener("click", corroborarRespuesta);
opciones[1].addEventListener("click", corroborarRespuesta);
opciones[2].addEventListener("click", corroborarRespuesta);
opciones[3].addEventListener("click", corroborarRespuesta);

// Declaro el main/padre
let main = document.getElementById('mainBanderas');

function corroborarRespuesta(event) {
    event.preventDefault();
    ronda++;
    if ( event.target.innerHTML == preguntaActual.respuestaCorrecta ) {
        // Correcto
        puntos += 50;
        // Pongo en verde la correcta
        let element = event.target;
        element.style.backgroundColor = '#219653';
        element.style.color = '#FFFFFF';
    } else {
        // Incorrecto
        // Pongo en rojo la incorrecta
        let element = event.target;
        element.style.backgroundColor = '#92140C';
        element.style.color = '#FFFFFF';
        // Pongo en verda la correcta
        for (const i in opciones) {
            if (opciones[i].innerHTML == preguntaActual.respuestaCorrecta) {
                opciones[i].style.backgroundColor = '#219653';
                opciones[i].style.color = '#FFFFFF';
            }
        }
    }
    for (const opcion of opciones) {
        opcion.removeEventListener('click', corroborarRespuesta);
    }
    agregarBotonSiguiente();
}

// Declaro el boton siguiente
let btnSiguiente = document.createElement('button');

function agregarBotonSiguiente() {
    btnSiguiente.classList.add('btnSiguiente');
    btnSiguiente.innerHTML = 'Siguiente';
    if (ronda == 10) {
        btnSiguiente.innerHTML = 'Jugar de nuevo';
        let resultado = document.createElement('p');
        resultado.innerHTML = `¡Obtuviste ${puntos}/500 puntos!`
        resultado.classList.add('puntosFinalesParrafo');
        main.appendChild(resultado);
        main.appendChild(btnSiguiente);
        puntos = 0;
        ronda = 0;
        return;
    }
    main.appendChild(btnSiguiente);
}

btnSiguiente.addEventListener('click', nuevaPregunta);

function nuevaPregunta(event) {
    event.preventDefault();
    event.target.remove();
    generarNuevaPregunta();
}

function generarNuevaPregunta() {
    preguntaActual = preguntas[getRandomNumber(47)];
    imagenBandera.src = preguntaActual.urlImagenDeLaBandera;
    
    for (const i in opciones) {
        opciones[i].innerHTML = '';
    }
    // Agrego la respuesta correcta
    opciones[getRandomNumber(3)].innerHTML = preguntaActual.respuestaCorrecta;

    let k = 0;
    // Agrego las respuestas incorrectas
    for (const i in opciones) {
        if (opciones[i].innerHTML === '') {
            opciones[i].innerHTML = preguntaActual.respuestasIncorrectas[k];
            k++;
        }
    }
    // Reseteo los eventos y las apariencias
    for (const opcion of opciones) {
        opcion.style.backgroundColor = '#EAC435';
        opcion.style.color = '#0A090C';
        opcion.addEventListener('click', corroborarRespuesta);
    }
}


