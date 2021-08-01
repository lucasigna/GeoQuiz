class Pregunta {

    constructor(urlImagenDeLaBandera, respuestaCorrecta, respuestasIncorrectas) {
        this.urlImagenDeLaBandera = urlImagenDeLaBandera;
        this.respuestaCorrecta = respuestaCorrecta;
        this.respuestasIncorrectas = respuestasIncorrectas;
    }

}

// Preguntas

const preguntas = [];

let pregunta1 = new Pregunta('./img/argentina.png','Argentina',['Brasil','Chile','Honduras']);
preguntas.push(pregunta1 );
let pregunta2 = new Pregunta('./img/elsalvador.png','El Salvador',['Nicaragua','Guatemala','Honduras']);
preguntas.push(pregunta2 );
let pregunta3 = new Pregunta('./img/haiti.png','Haití',['Jamaica','Cuba','Antigua y Barbuda']);
preguntas.push(pregunta3 );
let pregunta4 = new Pregunta('./img/rumania.png','Rumania',['Armenia','Andorra','Bulgaria']);
preguntas.push(pregunta4 );
let pregunta5 = new Pregunta('./img/monaco.png','Mónaco',['Singapur','Polonia','Indonesia']);
preguntas.push(pregunta5 );
let pregunta6 = new Pregunta('./img/singapur.png','Singapur',['Polonia','Indonesia','Fijí']);
preguntas.push(pregunta6 );
let pregunta7 = new Pregunta('./img/tuvalu.png','Tuvalu',['Nueva Zelanda','Sri Lanka','Georgia']);
preguntas.push(pregunta7 );
let pregunta8 = new Pregunta('./img/kazajistan.png','Kazajistán',['Mongolia','San Marino','Vaticano']);
preguntas.push(pregunta8 );
let pregunta9 = new Pregunta('./img/sanmarino.png','San Marino',['Luxemburgo','Chipre','Estonia']);
preguntas.push(pregunta9 );
let pregunta10 = new Pregunta('./img/estonia.png','Estonia',['Lituania','Letonia','Bulgaria']);
preguntas.push(pregunta10);
let pregunta11 = new Pregunta('./img/austria.png','Austria',['Polonia','República Checa','Albania']);
preguntas.push(pregunta11);
let pregunta12 = new Pregunta('./img/barbados.png','Barbados',['Islas Virgenes','Islas Marshall','Maldivas']);
preguntas.push(pregunta12);
let pregunta13 = new Pregunta('./img/finlandia.png','Finlandia',['Noruega','Suecia','Dinamarca']);
preguntas.push(pregunta13);
let pregunta14 = new Pregunta('./img/escocia.png','Escocia',['Gales','Irlanda','Marruecos']);
preguntas.push(pregunta14);
let pregunta15 = new Pregunta('./img/irlanda.png','Irlanda',['Costa de Marfil','Chad','Sudán']);
preguntas.push(pregunta15);
let pregunta16 = new Pregunta('./img/somalia.png','Somalia',['Mozambique','Chad','Egipto']);
preguntas.push(pregunta16);
let pregunta17 = new Pregunta('./img/etiopia.png','Etiopía',['Angola','Kenya','Uganda']);
preguntas.push(pregunta17);
let pregunta18 = new Pregunta('./img/srilanka.png','Sri Lanka',['Tunéz','Turquía','Siria']);
preguntas.push(pregunta18);
let pregunta19 = new Pregunta('./img/israel.png','Israel',['Niger','Argelia','San Marino']);
preguntas.push(pregunta19);
let pregunta20 = new Pregunta('./img/niger.png','Niger',['Nigeria','Rusia','Togo']);
preguntas.push(pregunta20);
let pregunta21 = new Pregunta('./img/bielorrusia.png','Bielorrusia',['Croacia','Serbia','Rusia']);
preguntas.push(pregunta21);
let pregunta22 = new Pregunta('./img/portugal.png','Portugal',['Brasil','Granada','Escocia']);
preguntas.push(pregunta22);
let pregunta23 = new Pregunta('./img/peru.png','Perú',['Brasil','Bolivia','Paraguay']);
preguntas.push(pregunta23);
let pregunta24 = new Pregunta('./img/belice.png','Belice',['Honduras','Brunei','San Marino']);
preguntas.push(pregunta24);
let pregunta25 = new Pregunta('./img/islandia.png','Islandia',['Noruega','Groenlandia','Letonia']);
preguntas.push(pregunta25);
let pregunta26 = new Pregunta('./img/liechtenstein.png','Liechtenstein',['Mauricio','Macedonia','Serbia']);
preguntas.push(pregunta26);
let pregunta27 = new Pregunta('./img/nauru.png','Nauru',['Cabo Verde','Lesoto','Tonga']);
preguntas.push(pregunta27);
let pregunta28 = new Pregunta('./img/sancristobalynieves.png','San Cristóbal y Nieves ',['Tuvalu','Belice','Antigua y Barbuda']);
preguntas.push(pregunta28);
let pregunta29 = new Pregunta('./img/seychelles.png','Seychelles',['Comoros','Maldivas','Barein']);
preguntas.push(pregunta29);
let pregunta30 = new Pregunta('./img/surinam.png','Surinam',['República Dominicana','Jamaica','Guyana']);
preguntas.push(pregunta30);
let pregunta31 = new Pregunta('./img/colombia.png','Colombia',['Brasil','Venezuela','Ecuador']);
preguntas.push(pregunta31);
let pregunta32 = new Pregunta('./img/lesoto.png','Lesoto',['Togo','Kuwait','Sudáfrica']);
preguntas.push(pregunta32);
let pregunta33 = new Pregunta('./img/burundi.png','Burundi',['Santo Tomé y Príncipe','Islas Feroe','Barein']);
preguntas.push(pregunta33);
let pregunta34 = new Pregunta('./img/ruanda.png','Ruanda',['Santa Lucía','Bahamas','México']);
preguntas.push(pregunta34);
let pregunta35 = new Pregunta('./img/kuwait.png','Kuwait',['Togo','Vanuatu','Isla de Man']);//
preguntas.push(pregunta35);
let pregunta36 = new Pregunta('./img/vanuatu.png','Vanuatu',['Barein','Burundi','Lesoto']);
preguntas.push(pregunta36);
let pregunta37 = new Pregunta('./img/qatar.png','Qatar',['Emiratos Arabes Unidos','Sri Lanka','Palaos']);
preguntas.push(pregunta37);
let pregunta38 = new Pregunta('./img/uruguay.png','Uruguay',['Brasil','Chile','Paraguay']);
preguntas.push(pregunta38);
let pregunta39 = new Pregunta('./img/puertorico.png','Puerto Rico',['Dominicana','Barbados','Cuba']);
preguntas.push(pregunta39);
let pregunta40 = new Pregunta('./img/kosovo.png','Kosovo',['Mozambique','Togo','Guinea Ecuatorial']);
preguntas.push(pregunta40);
let pregunta41 = new Pregunta('./img/libano.png','Líbano',['Gambia','Georgia','Azerbaiyán']);
preguntas.push(pregunta41);
let pregunta42 = new Pregunta('./img/trinidadytobago.png','Trinidad y Tobago',['Islas Caimán','Barbados','Aruba']);
preguntas.push(pregunta42);
let pregunta43 = new Pregunta('./img/hongkong.png','Hong Kong',['Corea del Norte','Nepal','Vietnam']);
preguntas.push(pregunta43);
let pregunta44 = new Pregunta('./img/curazao.png','Curazao',['Tuvalu','Brasil','Montserrat']);
preguntas.push(pregunta44);
let pregunta45 = new Pregunta('./img/granada.png','Granada',['Barbados','Bahamas','Islas Cook']);
preguntas.push(pregunta45);
let pregunta46 = new Pregunta('./img/islascook.png','Islas Cook',['Islas Caimán','Islas Virgenes','Maldivas']);
preguntas.push(pregunta46);
let pregunta47 = new Pregunta('./img/aruba.png','Aruba',['Fijí','Malta','Polonia']);
preguntas.push(pregunta47);
let pregunta48 = new Pregunta('./img/pakistan.png','Pakistán',['Vietnam','Sri Lanka','Irán']);
preguntas.push(pregunta48);

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
    if ( event.target.innerHTML == preguntaActual.respuestaCorrecta ) {
        // Correcto
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


