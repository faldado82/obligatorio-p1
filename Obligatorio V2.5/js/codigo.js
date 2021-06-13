// Arrays a utililzar
let usuarios = [];
let niveles = [];
let ejercicios = [];
let entregas = [];

// Elementos útiles para funciones de Login:

// Input Login Usuario
let inputUsuarioLogIn = document.querySelector('#logInUsuarioInput');
// Input Login Password
let inputPasswordLogIn = document.querySelector('#logInPasswordInput');
// Elemento página de inicio (registro y login)
let paginaInicio = document.querySelector('#pagina-inicio');
// Elemento página interior aplicacion (luego del log in exitoso)
let paginaApp = document.querySelector('#contenedor-aplicacion');
// Nombre del usuario que se visualiza al hacer login exitoso
let nombreAMostrar = document.querySelector('#nombreUsuario');

// ################################### Precargas ###################################

// Precarga Niveles
function preCargaNiveles() {
  crearYGuardarNivel(1, 'Inicial');
  crearYGuardarNivel(2, 'Intermedio');
  crearYGuardarNivel(3, 'Avanzado');
}

// Función para crear un nuevo nivel (objeto) y agregarlo al array niveles
function crearYGuardarNivel(numero, nombre) {
  if (!isNaN(numero) && nombre.trim().length > 0 && isNaN(nombre)) {
    // Convertimos a número antes de agregarlo al objeto
    número = Number(numero);
    let unNivel = new Nivel();
    unNivel.numero = numero;
    unNivel.nombre = nombre;
    // Agregamos el objeto nivel al array de niveles
    niveles.push(unNivel);
  }
}

// Función para precargar docentes
function preCargaDocentes() {
  crearYGuardarDocente('Eric Clapton', 'eric1945', 'Tearsinheaven92');
  crearYGuardarDocente('Bob Dylan', 'bobbydylan', 'bWind1962');
  crearYGuardarDocente('Janis Joplin', 'laJanis', 'Rockandroll43');
  crearYGuardarDocente('Amy Winehouse', 'Amyrehab83', 'Isaidnonono11');
}

// Función para crear un nuevo docente (objeto) y agregarlo al array usuarios
function crearYGuardarDocente(nombre, usuario, password) {
  if (
    validarNombre(nombre) &&
    validarUsuario(usuario) &&
    validarPassword(password)
  ) {
    let unDocente = new Docente();
    unDocente.nombre = nombre;
    unDocente.usuario = usuario;
    unDocente.password = password;
    // Agregamos el objeto Docente al array de docentes
    usuarios.push(unDocente);
  }
}

// Función para precargar alumnos
function preCargaAlumnos() {
  crearYGuardarAlumno(
    'Juan Carlos',
    'juanca77',
    'Pass123',
    obtenerNivelConNumero(1),
    obtenerDocenteConUsuario('laJanis')
  );
  crearYGuardarAlumno(
    'María del Mar',
    'lamarydelcap',
    'Firulais88',
    obtenerNivelConNumero(2),
    obtenerDocenteConUsuario('eric1945')
  );
  crearYGuardarAlumno(
    'Roberto Carlos',
    'robbieUru',
    'Roca52',
    obtenerNivelConNumero(3),
    obtenerDocenteConUsuario('eric1945')
  );
  crearYGuardarAlumno(
    'Julia Rivera',
    'juliguitarra',
    'iloveTacos1996',
    obtenerNivelConNumero(1),
    obtenerDocenteConUsuario('eric1945')
  );
  crearYGuardarAlumno(
    'Federico Gimenez',
    'elFederockstar',
    'Fefo34',
    obtenerNivelConNumero(2),
    obtenerDocenteConUsuario('laJanis')
  );
  crearYGuardarAlumno(
    'Laura Gomez',
    'lauraSeTe',
    'lauchita1500A',
    obtenerNivelConNumero(3),
    obtenerDocenteConUsuario('laJanis')
  );
  crearYGuardarAlumno(
    'Gabriel Richieri',
    'gabo87',
    'gaboteElbebote3',
    obtenerNivelConNumero(1),
    obtenerDocenteConUsuario('bobbydylan')
  );
  crearYGuardarAlumno(
    'Ramiro Ortega',
    'elRamaOrteguita',
    'iloveMusic24',
    obtenerNivelConNumero(3),
    obtenerDocenteConUsuario('bobbydylan')
  );
  crearYGuardarAlumno(
    'Erica Ramírez',
    'erica1800',
    'Lapregunta99',
    obtenerNivelConNumero(2),
    obtenerDocenteConUsuario('bobbydylan')
  );
  crearYGuardarAlumno(
    'Rafa Diaz',
    'rafitaMiles',
    'hyperActive17',
    obtenerNivelConNumero(2),
    obtenerDocenteConUsuario('Amyrehab83')
  );
  crearYGuardarAlumno(
    'Ivan Modernell',
    'elIvanSabe',
    'micChecker21',
    obtenerNivelConNumero(1),
    obtenerDocenteConUsuario('Amyrehab83')
  );
  crearYGuardarAlumno(
    'Nicolas Rodriguez',
    'Estudios05',
    'js4Life',
    obtenerNivelConNumero(1),
    obtenerDocenteConUsuario('Amyrehab83')
  );
}

// Función para crear un nuevo alumno (objeto) y agregarlo al array de usuarios
function crearYGuardarAlumno(nombre, usuario, password, nivel, docente) {
  if (
    validarNombre(nombre) &&
    validarUsuario(usuario) &&
    validarPassword(password) &&
    docente !== null &&
    nivel !== null
  ) {
    let unAlumno = new Alumno();
    unAlumno.nombre = nombre;
    unAlumno.usuario = usuario;
    unAlumno.password = password;
    unAlumno.Nivel = nivel;
    unAlumno.Docente = docente;

    usuarios.push(unAlumno);
  }
}

// Funcion para precargar Ejercicios
function preCargaEjercicios() {
  crearYGuardarEjercicio(
    obtenerNivelConNumero(1),
    'Permutaciones',
    'Ejercicios secuenciales para trabajar velocidad y ritmo.Repetir 3 veces cada uno con diferentes articulaciones.',
    'ej1.png',
    obtenerDocenteConUsuario('laJanis')
  );
  crearYGuardarEjercicio(
    obtenerNivelConNumero(2),
    'Repeticiones',
    'Ejercicios repetitivos para mejorar la velocidad y ritmo.Repetir 5 veces con diferentes articulaciones.',
    'ej2.png',
    obtenerDocenteConUsuario('laJanis')
  );
  crearYGuardarEjercicio(
    obtenerNivelConNumero(1),
    'The Caterpillar',
    'Ejercicios cromaticos descendentes para trabajar lentamente la digitacion por todo el traste de la guitarra. Realizar a 60bpm, 75bpm y 90bpm por cada negra.',
    'ej3.png',
    obtenerDocenteConUsuario('laJanis')
  );
  crearYGuardarEjercicio(
    obtenerNivelConNumero(3),
    'Cromaticos a velocidad',
    'Ejercicios cromaticos para trabajar velocidad de la digitacion en todo el traste. Realizar con diferentes articulaciones a 80, 90 y 100 bpm por cada tiempo de negra.',
    'ej4.png',
    obtenerDocenteConUsuario('bobbydylan')
  );
  crearYGuardarEjercicio(
    obtenerNivelConNumero(2),
    'Acordes de Septimas',
    'Ejercicios de acordes con septimas mayor y menor. Repetir varias veces cada uno hasta memorizar la secuencia completa.',
    'ej5.png',
    obtenerDocenteConUsuario('bobbydylan')
  );
  crearYGuardarEjercicio(
    obtenerNivelConNumero(3),
    'Yankee Doodle',
    'Aprenderemos este tema clásico del folk estadounidense y que gracias a las series de dibujos animados y a las películas de Hollywood es conocida en muchas partes del mundo.',
    'ej6.png',
    obtenerDocenteConUsuario('Amyrehab83')
  );
  crearYGuardarEjercicio(
    obtenerNivelConNumero(1),
    'Old McDonald has A Farm',
    'El viejo MacDonald tenía una granja es una popular canción infantil perteneciente al folklore musical estadounidense, de autor anónimo. Tocar de memoria',
    'ej7.png',
    obtenerDocenteConUsuario('Amyrehab83')
  );
  crearYGuardarEjercicio(
    obtenerNivelConNumero(2),
    'La marcha de los Santos',
    'Es un himno góspel que toma elementos de música folkórica. Autor desconocido, y si bien es música espiritual hoy día es tocada por bandas de jazz. Tocar de memoria.',
    'ej8.png',
    obtenerDocenteConUsuario('eric1945')
  );
  crearYGuardarEjercicio(
    obtenerNivelConNumero(1),
    'REM - Everybody Hurts',
    'Es una canción del grupo estadounidense R.E.M. La canción está incluida en el álbum Automatic for the people de 1992 y fue lanzada como single al año siguiente. Tocar de memoria.',
    'ej9.png',
    obtenerDocenteConUsuario('eric1945')
  );
}

// Función para crear un nuevo ejercicio (objeto) y agregarlo al array de ejercicios
function crearYGuardarEjercicio(
  nivelObj,
  tituloEjercicio,
  descripcionEjercicio,
  imagen,
  docenteObj
) {
  if (
    nivelObj !== null &&
    docenteObj !== null &&
    tituloEjercicio.trim().length + descripcionEjercicio.trim().length >= 20 &&
    tituloEjercicio.trim().length + descripcionEjercicio.trim().length <= 200 &&
    imagen.trim().length > 4
  ) {
    let unEjercicio = new Ejercicio();
    unEjercicio.Nivel = nivelObj;
    unEjercicio.tituloEjercicio = tituloEjercicio;
    unEjercicio.descripcionEjercicio = descripcionEjercicio;
    unEjercicio.imagen = imagen;
    unEjercicio.Docente = docenteObj;
    ejercicios.push(unEjercicio);
  }
}

// ################################### Fin Precargas ###################################





// ################################### Funciones para obtener objetos con su nombre o número ###################################

// Esta función toma un nombre de usuario y devuelve el objeto de Docente con ese Usuario unico (en caso de existir) Nos aseguramos que sea de ese tipo poniendole el .tipo = 'docente' en el if statement
function obtenerDocenteConUsuario(usuario) {
  let docente = null;
  let i = 0;
  while (i < usuarios.length && docente === null) {
    // Chequeamos que coincida el usuario y el tipo para asegurarnos que devuelve un docente y no un alumno por error
    if (usuarios[i].usuario === usuario && usuarios[i].tipo === 'docente') {
      docente = usuarios[i];
    }
    i++;
  }
  return docente;
}

// Esta función toma un nombre de usuario y devuelve el objeto de Alumno con ese Usuario unico (en caso de existir) Nos aseguramos que sea de ese tipo poniendole el .tipo = 'alumno' en el if statement
function obtenerAlumnoConUsuario(usuario) {
  let alumno = null;
  let i = 0;
  while (i < usuarios.length && alumno === null) {
    // Chequeamos que coincida el usuario y el tipo para asegurarnos que devuelve un alumno y no un alumno por error
    if (usuarios[i].usuario === usuario && usuarios[i].tipo === 'alumno') {
      alumno = usuarios[i];
    }
    i++;
  }
  return alumno;
}

// Esta función toma un número y devuelve el objeto de Nivel de acuerdo a ese número
function obtenerNivelConNumero(numero) {
  let nivel = null;
  let i = 0;
  while (i < niveles.length && nivel === null) {
    if (niveles[i].numero === numero) {
      nivel = niveles[i];
    }
    i++;
  }
  return nivel;
}

// ################################### Funcionalidad Login ###################################

// Esta cuenta va a ser la que logre pasar el log in, y segun su tipo (docente o alumno) se mostraran diferentes datos en las secciones.
let cuentaActiva;

function logIn() {
  cuentaActiva = null;

  let i = 0;

  // Buscamos la cuenta ingresada, si la encontramos pasamos a la contraseña
  while (cuentaActiva === null && i < usuarios.length) {
    // usuarios[i] es cada objeto del array usuarios, el elemento actual en cada iteración
    // Se dejará de buscar una vez que encontramos el objeto
    if (
      usuarios[i].usuario.toLowerCase().trim() ===
      inputUsuarioLogIn.value.toLowerCase().trim()
    ) {
      cuentaActiva = usuarios[i];
    }
    i++;
  }

  if (
    cuentaActiva !== null &&
    cuentaActiva.password === inputPasswordLogIn.value
  ) {
    // Hacemos desaparecer el span de error de login
    document.querySelector('#mensajeLogIn').innerHTML = '';

    // Sacamos de vista la pagina principal de registro y login, agregandole la clase ocultar-ventana
    paginaInicio.classList.add('ocultar-ventana');

    // Hacemos aparecer la ventana de la aplicación con los datos y secciones del docente o alumno, según corresponda
    paginaApp.classList.remove('ocultar-ventana');
    mostrarUISegunUsuario(cuentaActiva);
  } else {
    // Hacemos aparecer el span del error login, poniendole un mensaje
    document.querySelector('#mensajeLogIn').innerHTML =
      'Usuario o contraseña incorrectos! Ingreselos nuevamente';
  }
}

// Limpieza de inputs de Login (usuario y contraseña)
function limpiarUsuarioInput() {
  document.querySelector('#mensajeLogIn').innerHTML = '';
  inputUsuarioLogIn.value = '';
}

function limpiarPasswordInput() {
  document.querySelector('#mensajeLogIn').innerHTML = '';
  inputPasswordLogIn.value = '';
}





function mostrarUISegunUsuario(cuentaActiva) {
  nombreAMostrar.innerHTML = `Hola de nuevo, ${cuentaActiva.nombre}.`;

  mostrarNav(cuentaActiva);
  mostrarSeccion1(cuentaActiva);
  mostrarSeccion2(cuentaActiva);
  // mostrarSeccion3(cuentaActiva)
  // mostrarSeccion4(cuentaActiva)
}






// ################################### User Interface ###################################

// Mostramos la navegación según el tipo de usuario logeado correctamente
function mostrarNav(usuario) {
  let nav = '';

  // tipo Docente
  if (usuario.tipo === 'docente') {
    nav = `<nav>
  <ul>
    <li class="item-lista">
      <a href="#seccion1">Cambiar nivel de alumnos</a>
    </li>
  </ul>
  <ul>
    <li class="item-lista">
      <a href="#seccion2">Plantear ejercicios</a>
    </li>
  </ul>
  <ul>
    <li class="item-lista">
      <a href="#seccion3">Redactar devoluciones</a>
    </li>
  </ul>
  <ul>
    <li class="item-lista"><a href="#seccion4">Ver información estadística</a></li>
  </ul>
</nav>`;
    // tipo Alumno
  } else if (usuario.tipo === 'alumno') {
    nav = `<nav>
<ul>
  <li class="item-lista">
    <a href="#seccion1">Ver ejercicios planteados</a>
  </li>
</ul>
<ul>
  <li class="item-lista">
    <a href="#seccion2">Realizar entrega de ejercicio</a>
  </li>
</ul>
<ul>
  <li class="item-lista">
    <a href="#seccion3">Ver ejercicios resueltos</a>
  </li>
</ul>
<ul>
  <li class="item-lista"><a href="#seccion4">Ver información estadística</a></li>
</ul>
</nav>`;
  }
  document.querySelector('#navegacion').innerHTML = nav;
}

FIXME: // HACER UNA UNICA FUNCION QUE LLAME AL RESTO DE LAS SECCIONES
// function mostrarSecciones(usuario){
//  // Si es docente
//  if (usuario.tipo === 'docente') {
//   seccion1Docente(usuario);
//   seccion2Docente();
//   // Si es alumno
// } else if (usuario.tipo === 'alumno') {

// }

// }

// Mostramos la sección 1 según el usuario y su tipo
function mostrarSeccion1(usuario) {
  // Si es docente
  if (usuario.tipo === 'docente') {
    seccion1Docente(usuario);

    // Si es alumno
  } else if (usuario.tipo === 'alumno') {
    seccion1Alumno(usuario);

  }
}
// Mostramos la sección 2 según el usuario y su tipo
function mostrarSeccion2(usuario) {
  if (usuario.tipo === 'docente') {
    seccion2Docente();

    // Si es alumno
  } else if (usuario.tipo === 'alumno') {
  }
}


/* ######################################################################## */
/* ##################### *** USER INTERFACE DOCENTE ***  ##################  */
/* ######################################################################## */


// ###################### Seccion 1 DOCENTE ######################

function seccion1Docente(usuario) {
  let selectAlumnos = `<h2>Seleccione un alumno para subir su nivel!</h2> <select id="selListaAlumnos"><option value="-1">Elija uno de sus alumnos:</option>`;
  // Creamos la el div donde va a estar el select, en caso de que se seleccione algún alumno
  let divSelectNiveles = `<div id="mostrarNiveles" class="selectNiveles"></div>`;

  for (let i = 0; i < usuarios.length; i++) {
    unAlumno = usuarios[i];

    if (
      unAlumno.tipo === 'alumno' &&
      unAlumno.Docente.usuario === usuario.usuario
    ) {
      selectAlumnos += `<option value="${unAlumno.usuario}"> ${unAlumno.nombre} - (${unAlumno.usuario}) </option>`;
    }
  }
  selectAlumnos += `</select>`;

  document.querySelector('#seccion1').innerHTML =
    selectAlumnos + divSelectNiveles;

  // Evento que se activa al seleccionar un alumno de select, sirve para cambiar de nivel
  document
    .querySelector('#selListaAlumnos')
    .addEventListener('click', mostrarSelectCambiarNivel);
}

function mostrarSelectCambiarNivel() {
  // El value del select de los alumnos del docente de arriba, es el nombre de usuario, asi obtenemos el objeto de ese alumno con esta funcion:
  let alumnoSeleccionado = obtenerAlumnoConUsuario(
    document.querySelector('#selListaAlumnos').value
  );

  let botonCambiarNivel = `<button id="btnCambiarNivel">Subir nivel</button>`;
  let divMensaje = `<div id="mensajeCambioDeNivel" class="mensajeCambioDeNivel"></div>`;

  if (alumnoSeleccionado !== null) {
    let selectNiveles = `<select class="selListaNiveles" id="selListaNiveles"><option disabled  value="${alumnoSeleccionado.Nivel.numero}"> Nivel actual (${alumnoSeleccionado.Nivel.numero}) : ${alumnoSeleccionado.Nivel.nombre}</option>`;

    if (alumnoSeleccionado.Nivel.numero === 1) {
      selectNiveles += `<option selected value="${2}"> Siguiente Nivel: Intermedio (2)</option>`;
    } else if (alumnoSeleccionado.Nivel.numero === 2) {
      selectNiveles += `<option selected="true" value="${3}"> Siguiente Nivel: Avanzado (3)</option>`;
    } else {
      selectNiveles += `<option disabled selected value="-1"> Ya no hay más niveles para avanzar!</option>`;
    }

    // Mostramos el select de los niveles dinámicamente según alumno, y mostramos el botón para cambiarlo, junto con un div que puede mostrar mensajes
    selectNiveles += `</select>`;

    // Esto esta dentro del div
    document.querySelector('#mostrarNiveles').innerHTML =
      selectNiveles + botonCambiarNivel + divMensaje;

    document
      .querySelector('#btnCambiarNivel')
      .addEventListener('click', btnCambiarNivel);
  } else {
    document.querySelector('#mostrarNiveles').innerHTML = ' ';
  }
}

function btnCambiarNivel() {
  // Capturamos en una variable el alumno (objeto) seleccionado
  let alumnoSeleccionado = obtenerAlumnoConUsuario(
    document.querySelector('#selListaAlumnos').value
  );
  // Capturamos en una variable el nivel (objeto) seleccionado
  let nivelSeleccionado = obtenerNivelConNumero(
    Number(document.querySelector('#selListaNiveles').value)
  );

  if (
    alumnoSeleccionado.Nivel !== nivelSeleccionado &&
    nivelSeleccionado !== null
  ) {
    // Le cambiamos el nivel efectivamente al usuario
    alumnoSeleccionado.Nivel = nivelSeleccionado;

    // Se actualiza el select de niveles
    mostrarSelectCambiarNivel();
    document.querySelector(
      '#mensajeCambioDeNivel'
    ).innerHTML = `Nivel cambiado a ${alumnoSeleccionado.Nivel.numero} (<b>${alumnoSeleccionado.Nivel.nombre})</b> con éxito!`;
  } else {
    document.querySelector(
      '#mensajeCambioDeNivel'
    ).innerHTML = `Este es el máximo nivel! <b>No puedes cambiarlo</b>`;
  }
}

// ###################### Seccion 2 DOCENTE ######################

function seccion2Docente() {
  let titulo = `<h2>Plantear Ejercicios</h2>`;

  let selectNivel = `<label>Seleccione Nivel para Enviar Ejercicio: </label><select id="selListaNivelesEjS2"><option value="-1">Elija Nivel de Alumno:</option>
    <br>`;

  let inputTituloEjercicio = `<br/><label for="txtTitulo">Titulo de Ejercicio: </label><input id="txtTitulo" type="text"
    placeholder="Escriba su Titulo"><br>`;

  let textAreaPlantearEjercicios = `<label for="txtDescripcion">Descripcion: </label><textarea name="textarea" rows="10" cols="50" id="txtDescripcion"
    placeholder="Describa su ejercicio aqui:
Respetar cantidad de caracteres: 
20 (min), 200(max) entre Título y Descripción."></textarea><br>`;

  let archivoImagen = `<br/><label for="archivoImagen">Imagen:</label><input id="fileImagen" type="file"><br>`;

  let botonEnviarEjercicio = `<button id="btnAgregarEjercicio">Agregar Ejercicio</button> <br/>
    `;

  let divMensajeEjercicioPlanteado = `<div id="divMensajeEjercicioPlanteado" class="divMensajeEjercicioPlanteado"></div>`;

  for (let i = 0; i < niveles.length; i++) {
    let unNivel = niveles[i]; // current element

    selectNivel += `<option value="${unNivel.numero}"> ${unNivel.numero} - (${unNivel.nombre})</option>`;
  }
  selectNivel += `</select>`;

  document.querySelector('#seccion2').innerHTML =
    titulo +
    selectNivel +
    inputTituloEjercicio +
    textAreaPlantearEjercicios +
    archivoImagen +
    botonEnviarEjercicio +
    divMensajeEjercicioPlanteado;

  document
    .querySelector('#btnAgregarEjercicio')
    .addEventListener('click', btnAgregarEjercicio);
}

function btnAgregarEjercicio() {
  let msg;
  let nivelSeleccionado = obtenerNivelConNumero(
    Number(document.querySelector('#selListaNivelesEjS2').value)
  );
  let titulo = document.querySelector('#txtTitulo').value;
  let descripcion = document.querySelector('#txtDescripcion').value;
  let imagen = document.querySelector('#fileImagen').value;
  let archImagen = quitarFakePath(imagen);

  if (nivelSeleccionado === null) {
    msg = 'Debe seleccionar un nivel ❌';
  } else if (
    titulo.trim().length + descripcion.trim().length > 200 ||
    titulo.trim().length + descripcion.trim().length < 20
  ) {
    msg =
      'El título y la descripción deben tener como mínimo 20 caracteres, máximo 200.❌';
  } else if (archImagen.length < 4) {
    msg = 'Debe seleccionar una imagen ❌';
  } else {
    msg = `Se agregó correctamente.✅`;

    crearYGuardarEjercicio(
      nivelSeleccionado,
      titulo,
      descripcion,
      archImagen,
      cuentaActiva
    );
    // Vaciamos campos luego de agregar exitosamente
    document.querySelector('#txtTitulo').value = '';
    document.querySelector('#txtDescripcion').value = '';
    document.querySelector('#fileImagen').value = '';
    document.querySelector('#selListaNivelesEjS2').value = '-1';
  }
  document.querySelector('#divMensajeEjercicioPlanteado').innerHTML = msg;
}

// Limpia barras
function quitarFakePath(pNom) {
  let nombreOk = '';
  let encontreBarra = false;
  let posBarra = -1;
  let i = pNom.length - 1;
  while (i >= 0 && !encontreBarra) {
    let car = pNom[i];
    if (car === '\\' || car === '/') {
      encontreBarra = true;
      posBarra = i;
    }
    i--;
  }

  if (encontreBarra) {
    nombreOk = pNom.substr(posBarra + 1);
  }
  return nombreOk;
}

// ###################### Seccion 3 DOCENTE ###################### TODO:


// ###################### Seccion 4 DOCENTE ###################### TODO:




/* ######################################################################## */
/* ##################### *** USER INTERFACE ALUMNO ***  ###################  */
/* ######################################################################## */


// ###################### Seccion 1 ALUMNO ######################

function seccion1Alumno(usuario) {

// Capturamos el objeto docente del alumno
let docenteDelAlumno = usuario.Docente;


let buscadorEjercicios = `<label>Buscar Ejercicios planteados por tu docente (${usuario.Docente.nombre}):</label><input type="search" class="inputBusqueda" placeholder="Busque su ejercicio por título o descripción"> <button id="buscaEjercicio">Buscar</button>`
let tablaEjercicios = `<table><tr><th>Título del Ejercicio </th><th>Descripción</th><th>Imagen</th></tr>`

let resultadoBusqueda = `<div id="resultadoBusqueda">Aca van los resultados</div>`


for(let i = 0; i < ejercicios.length; i++){
  let unEjercicio = ejercicios[i];

  if(unEjercicio.Docente.usuario === docenteDelAlumno.usuario && unEjercicio.Nivel === usuario.Nivel){

    let img = `<img src="Ejercicios/img/${unEjercicio.imagen}" >`
    tablaEjercicios+=`<tr><td>${unEjercicio.tituloEjercicio}</td><td>${unEjercicio.descripcionEjercicio}</td><td>${img}</td></tr>`
  }

}

tablaEjercicios += `</table>`

document.querySelector('#seccion1').innerHTML = buscadorEjercicios + resultadoBusqueda + tablaEjercicios;

}




// ###################### Seccion 2 ALUMNO ###################### TODO:



// ###################### Seccion 3 ALUMNO ###################### TODO:





// ###################### Seccion 4 ALUMNO ###################### TODO:




// ################################### Validaciones ###################################

// Función para validar contraseñas (al menos: 4 caracteres, una minuscula, una maysucula, un número y sin espacios entre medio)
function validarPassword(password) {
  if (password.length >= 4) {
    let mayuscula = false;
    let minuscula = false;
    let numero = false;

    for (let i = 0; i < password.length; i++) {
      // Chequea el carácter por en busca de mayusculas
      if (password.charCodeAt(i) >= 65 && password.charCodeAt(i) <= 90) {
        mayuscula = true;
      }
      // Chequea el carácter por en busca de minúsculas
      if (password.charCodeAt(i) >= 97 && password.charCodeAt(i) <= 122) {
        minuscula = true;
      }
      // Chequea el carácter por en busca de números
      if (password.charCodeAt(i) >= 48 && password.charCodeAt(i) <= 57) {
        numero = true;
      }
    }

    if (mayuscula && minuscula && numero && !tieneEspacioEntreMedio(password)) {
      return true;
    }
  }
  return false;
}

// Función para validar que el usuario no tenga espacios entre medio y sea mayor a 4 caracteres (puede incluir algun número si se quiere, ya que no se especifica en el obligatorio(Por ej: ericClapton1996).

function validarUsuario(usuario) {
  //Le sacamos el espacio de los costados
  usuario = usuario.trim();
  if (
    usuario.length >= 4 &&
    isNaN(usuario) &&
    !tieneEspacioEntreMedio(usuario)
  ) {
    return true;
  }

  return false;
}

// El nombre no puede contener números, pero si puede contener espacios entre medio (Por ej: JC Martinez Gimenez). Debe ser mayor o igual a 4 carácteres
function validarNombre(nombre) {
  let validado = false;

  if (isNaN(nombre) && nombre.trim().length >= 4) {
    validado = true;
    let i = 0;
    while (validado && i < nombre.trim().length) {
      if (nombre.charCodeAt(i) >= 48 && nombre.charCodeAt(i) <= 57) {
        validado = false;
      }
      i++;
    }
  }

  return validado;
}

// Función que detecta si hay un espacio entre medio entre un string ingresado, si es asi, devuelve true
function tieneEspacioEntreMedio(string) {
  let tieneEspacio = false;

  string = string.trim();
  let i = 0;

  while (!tieneEspacio && i < string.length) {
    if (string.charAt(i) === ' ') {
      tieneEspacio = true;
    }
    i++;
  }

  return tieneEspacio;
}
