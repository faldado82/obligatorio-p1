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

// Esta cuenta va a ser la que logre pasar el log in, y segun su tipo (docente o alumno) se mostraran diferentes datos en las secciones.
let cuentaActiva = null;

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
  crearYGuardarDocente('Eric Clapton', 'eric1945', 'Heaven92');
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
    'elfede',
    'Fefo3',
    obtenerNivelConNumero(1),
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
    'Ejercicios secuenciales para trabajar velocidad y ritmo. Repetir 3 veces cada uno con diferentes articulaciones.',
    'ej1.png',
    obtenerDocenteConUsuario('laJanis')
  );
  crearYGuardarEjercicio(
    obtenerNivelConNumero(2),
    'Repeticiones',
    'Ejercicios repetitivos para mejorar la velocidad y ritmo. Repetir 5 veces con diferentes articulaciones.',
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

// Función para crear un nuevo ejercicio (objeto) y agregarlo al array de ejercicios (TESTING INTERNO)
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

// Función para precargar entregas
function preCargaEntregas() {
  crearYGuardarEntrega(
    obtenerNivelConNumero(1),
    obtenerAlumnoConUsuario('juanca77'),
    obtenerEjercicioConID(1),
    obtenerDocenteConUsuario('laJanis'),
    'ej1.m4a',
    ''
  ),
    crearYGuardarEntrega(
      obtenerNivelConNumero(1),
      obtenerAlumnoConUsuario('elfede'),
      obtenerEjercicioConID(3),
      obtenerDocenteConUsuario('laJanis'),
      'ej3.m4a',
      ''
    );
}

function crearYGuardarEntrega(
  nivel,
  alumno,
  ejercicio,
  docente,
  sonido,
  devolucion
) {
  if (
    nivel !== null &&
    alumno !== null &&
    ejercicio !== null &&
    docente !== null &&
    sonido.length > 4
  ) {
    let unaEntrega = new Entrega();
    unaEntrega.Nivel = nivel;
    unaEntrega.Alumno = alumno;
    unaEntrega.Ejercicio = ejercicio;
    unaEntrega.Docente = docente;
    unaEntrega.sonido = sonido;
    unaEntrega.devolucion = devolucion;
    entregas.push(unaEntrega);
  }
}

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

// Esta función toma un id y devuelve el objeto de Ejercicio de acuerdo a ese id único
function obtenerEjercicioConID(id) {
  let ejercicio = null;
  let i = 0;
  while (i < ejercicios.length && ejercicio === null) {
    if (ejercicios[i].id === id) {
      ejercicio = ejercicios[i];
    }
    i++;
  }

  return ejercicio;
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

// Esta función toma un id y devuelve el objeto de Entrega de acuerdo a ese id
function obtenerEntregaConID(id) {
  let entrega = null;
  let i = 0;
  while (i < entregas.length && entrega === null) {
    if (entregas[i].id === id) {
      entrega = entregas[i];
    }
    i++;
  }
  return entrega;
}

// ################################### Funcionalidad Login y Logout ###################################

function logIn() {
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

  // Chequeamos por contraseña
  if (
    cuentaActiva !== null &&
    cuentaActiva.password === inputPasswordLogIn.value
  ) {
    // Sacamos de vista la página principal de registro y login, agregandole la clase ocultar-ventana
    paginaInicio.classList.add('ocultar-ventana');

    // Hacemos aparecer la ventana de la aplicación con los datos y secciones del docente o alumno, según corresponda
    paginaApp.classList.remove('ocultar-ventana');
    mostrarUISegunUsuario(cuentaActiva);

    // Hacemos desaparecer el span de error de login
    document.querySelector('#mensajeLogIn').innerHTML = '';
  } else {
    // Hacemos aparecer el span del error login, poniendole un mensaje
    document.querySelector('#mensajeLogIn').innerHTML =
      'Usuario o contraseña incorrectos! Ingreselos nuevamente';
  }
}

function mostrarUISegunUsuario(cuentaActiva) {
  nombreAMostrar.innerText = `Hola de nuevo, ${cuentaActiva.nombre}.`;
  mostrarNav(cuentaActiva);
  mostrarSecciones(cuentaActiva);
}

function logOut() {
  // Reseteamos la cuentaActiva
  cuentaActiva = null;

  // Mostramos la pagina de inicio nuevamente, y ocultamos la de la aplicación
  paginaInicio.classList.remove('ocultar-ventana');
  paginaInicio.classList.add('mostrar-ventana');
  paginaApp.classList.add('ocultar-ventana');

  // Limpiamos inputs
  limpiarUsuarioInput();
  limpiarPasswordInput();
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

// ################################### User Interface ###################################

// Mostramos la navegación según el tipo de usuario logeado correctamente
function mostrarNav(usuario) {
  let nav;

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
  <button id="btnLogOut" class="btnlogOut">Cerrar Sesión</button>
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

    <button id="btnLogOut" class="btnlogOut">Cerrar Sesión</button>
  
</nav>`;
  }
  document.querySelector('#navegacion').innerHTML = nav;
  document.querySelector('#btnLogOut').addEventListener('click', logOut);
}

function mostrarSecciones(usuario) {
  // Si es docente
  if (usuario.tipo === 'docente') {
    seccion1Docente(usuario);
    seccion2Docente();
    seccion3Docente();
    // seccion4Docente(); TODO:

    // Si es alumno
  } else if (usuario.tipo === 'alumno') {
    seccion1Alumno(usuario);
    seccion2Alumno(usuario);
    // seccion3Alumno(usuario); TODO:
    // seccion4Alumno(usuario); TODO:
  }
}

/* ######################################################################## */
/* ##################### *** USER INTERFACE DOCENTE ***  ################## */
/* ######################################################################## */

// ###################### Seccion 1 DOCENTE ######################

function seccion1Docente(usuario) {
  let titulo = `<h2>Seleccione uno de sus alumnos para subir su nivel!</h2>`;
  let selectAlumnos = `<select id="selListaAlumnos"><option value="-1">Elija uno de sus alumnos:</option>`;

  // Creamos la el div donde va a estar el select, aparece solo en caso de que se seleccione algún alumno
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
    titulo + selectAlumnos + divSelectNiveles;

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

  let inputTituloEjercicio = `<br/><label for="txtTitulo">Título de Ejercicio: </label><input id="txtTitulo" type="text"
    placeholder="Escriba su Título"><br>`;

  let textAreaPlantearEjercicios = `<label for="txtDescripcion">Descripción: </label><textarea name="textarea" rows="10" cols="50" id="txtDescripcion"
    placeholder="Describa su ejercicio aqui:
Respetar cantidad de caracteres: 
20 (min), 200(max) entre Título y Descripción."></textarea><br>`;

  let archivoImagen = `<br/><label for="archivoImagen">Imagen:</label><input id="fileImagen" type="file"><br>`;

  let botonEnviarEjercicio = `<button id="btnAgregarEjercicio">Agregar Ejercicio</button> <br/>
    `;

  let divMensajeEjercicioPlanteado = `<div id="divMensajeEjercicioPlanteado" class="divMensajes"></div>`;

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

  if (
    nivelSeleccionado !== null &&
    titulo.trim().length + descripcion.trim().length < 200 &&
    archImagen.length > 4
  ) {
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
  } else if (nivelSeleccionado === null) {
    msg = 'Debe seleccionar un nivel ❌';
  } else if (
    titulo.trim().length + descripcion.trim().length > 200 ||
    titulo.trim().length + descripcion.trim().length < 20
  ) {
    msg =
      'El título y la descripción deben tener como mínimo 20 caracteres, máximo 200.❌';
  } else if (archImagen.length < 4) {
    msg = 'Debe seleccionar una imagen ❌';
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

// ###################### Seccion 3 DOCENTE ######################

// nombre de alumno, nombre de ejercicio, escuchar audio, text area para devolución, boton enviar devolucion

//
function seccion3Docente() {
  let titulo = `<h2>Ver entregas y redactar devoluciones a sus alumnos </h2>`;
  let tabla = `<table id="tablaTareasPorCorregir" class="tablaDevoluciones" ><th>Nombre alumno</th><th>Ejercicio</th><th>Audio del alumno</th><th>Redacte devolución</th><th>Enviar entrega</th>`;
  let divMensaje = '<div id="msgAlEntregarTarea"></div>';

  for (let i = 0; i < entregas.length; i++) {
    unaEntrega = entregas[i];
    let sonido = `<audio controls><source src="Ejercicios/audio/${unaEntrega.sonido}"></audio>`;

    if (
      unaEntrega.devolucion.length === 0 &&
      unaEntrega.Alumno.Docente.usuario === cuentaActiva.usuario
    ) {
      // Le creamos un atributo data-set para guardar el id único de cada entrega en cada fila.
      //Cada entrega, por más que sean la misma de distintos alumnos, tendran un id único.

      tabla += `<tr data-id="${unaEntrega.id}"><td>${unaEntrega.Alumno.nombre}</td><td>${unaEntrega.Ejercicio.tituloEjercicio}</td><td>${sonido}</td><td><input type="text" placeholder="Escriba devolución" class="inputDevolucion" /> </td> <td><button class="btnFila">Enviar devolución</button></td></tr>`;
    }
  }
  tabla += `</table>`;

  document.querySelector('#seccion3').innerHTML = titulo + divMensaje + tabla;

  // Esta función comprobará si la tabla esta vacia (tiene solo 1 fila, osea los title headers), en caso de estarlo, mostrara un mensaje de que no hay tareas pendientes para corregir
  mensajeSiTablaVacia();

  // Hacemos un nodeList de todos los botones de la tabla para agregarles un evento
  let botonesEnviarDevolucion = document.querySelectorAll('.btnFila');

  for (let j = 0; j < botonesEnviarDevolucion.length; j++) {
    botonesEnviarDevolucion[j].addEventListener('click', enviarDevolucion);
  }
}

function enviarDevolucion() {
  // Acedemos a los elementos de la fila del boton apretado, como al input que necesitamos.
  let botonApretado = this;
  let fila = botonApretado.parentElement.parentElement; // el padre del padre del boton es su fila
  // Capturamos el value de el input de la fila
  let inputDeFila = fila.querySelector('input').value;
  let divMensaje = document.querySelector('#msgAlEntregarTarea');
  // Accedemos al objeto único de entrega usando el dataset del id y la funcion obtenerEntregaConID
  let ejercicioDeLaFilaObjeto = obtenerEntregaConID(Number(fila.dataset.id));

  if (inputDeFila.trim().length > 0 && isNaN(inputDeFila)) {
    ejercicioDeLaFilaObjeto.devolucion = inputDeFila;
    // Actualizamos la sección 3, no se deberán ver las tareas que tengan devolución
    divMensaje.innerHTML =
      '<p> ✅ Devolución enviada con éxito ✅, ⏳ ¡Actualizando tareas! ⏳ </p>';

    //NOTA IMPORTANTE: Lo que nos pasaba acá era que al actualizar la sección (para ver las siguientes tareas sin devolución( llamando a seccion3Docente ), no se mostraba nunca el mensaje de éxito de arriba obviamente, entonces le pusimos un pequeño delay de 2.5 segundos, para que se vea el mensaje de que fue enviada, mientras anunciamos que actualizaremos la tabla. Desactivamos los botones e inputs de esa fila para que no se pueda escribir nada durante esos 2.5 segundos.

    fila.querySelector('input').setAttribute('disabled', 'true');
    botonApretado.setAttribute('disabled', 'true');

    // Se actualiza la tabla luego de 2.5 segundos
    setTimeout(seccion3Docente, 2500);
  } else {
    divMensaje.innerHTML = '<p> ❌ Debe escribir algo de devolución! ❌</p>';
  }
}

function mensajeSiTablaVacia() {
  tabla = document.querySelector('#tablaTareasPorCorregir');

  if (tabla.rows.length === 1) {
    document.querySelector('#tablaTareasPorCorregir').innerHTML =
      '<p>Por ahora no tiene tareas pendientes para corregir!</p>';
  }
}

// ###################### Seccion 4 DOCENTE ###################### TODO:

/* ######################################################################## */
/* ##################### *** USER INTERFACE ALUMNO ***  ###################  */
/* ######################################################################## */

// ###################### Seccion 1 ALUMNO ######################

function seccion1Alumno(usuario) {
  // Capturamos el objeto docente del alumno
  let docenteDelAlumno = usuario.Docente;

  let inputBuscador = `<h2>Buscar Ejercicios planteados por tu docente (${usuario.Docente.nombre}):</h2><input type="search" class="inputBusqueda" id="inputBusquedaTxt" placeholder="Busque su ejercicio por título o descripción">`;

  let btnBuscador = `<button id="buscaEjercicio" class="btnBusqueda">Buscar</button>`;

  let resultadoBusquedaDiv = `<div id="resultadoBusqueda" class="resultadoBusqueda"></div>`;

  let tablaEjercicios = `<table><tr><th>Título del Ejercicio </th><th>Descripción</th><th>Imagen</th></tr>`;

  for (let i = 0; i < ejercicios.length; i++) {
    let unEjercicio = ejercicios[i];

    if (
      unEjercicio.Docente.usuario === docenteDelAlumno.usuario &&
      unEjercicio.Nivel === usuario.Nivel
    ) {
      let img = `<img src="Ejercicios/img/${unEjercicio.imagen}" >`;
      tablaEjercicios += `<tr><td>${unEjercicio.tituloEjercicio}</td><td>${unEjercicio.descripcionEjercicio}</td><td>${img}</td></tr>`;
    }
  }

  tablaEjercicios += `</table>`;

  // Mostramos la sección
  document.querySelector('#seccion1').innerHTML =
    inputBuscador + btnBuscador + resultadoBusquedaDiv + tablaEjercicios;

  // Le agregamos un evento al boton de busqueda
  document
    .querySelector('#buscaEjercicio')
    .addEventListener('click', btnBuscarEjercicio);
}

function btnBuscarEjercicio() {
  let docenteDelAlumno = cuentaActiva.Docente;

  let inputBusquedaTxt = document.querySelector('#inputBusquedaTxt').value;

  let resultado = '';
  let mensaje = '';
  let encontroPalabra = false;

  if (inputBusquedaTxt.trim().length > 0) {
    for (let i = 0; i < ejercicios.length; i++) {
      let unEjercicio = ejercicios[i];
      let img = `<img src="Ejercicios/img/${unEjercicio.imagen}" >`;

      if (
        unEjercicio.Docente.usuario === docenteDelAlumno.usuario &&
        unEjercicio.Nivel === cuentaActiva.Nivel
      ) {
        if (!encontroPalabra) {
          mensaje =
            '<p>No hay más resultados que coincidan con su busqueda!</p>';
        }

        if (
          unEjercicio.tituloEjercicio
            .toLowerCase()
            .indexOf(inputBusquedaTxt.toLowerCase()) !== -1
        ) {
          encontroPalabra = true;
          resultado += `<h2>${unEjercicio.tituloEjercicio}</h2> <br> <p> ${unEjercicio.descripcionEjercicio}</p><br> ${img} <br>`;
        } else if (
          unEjercicio.descripcionEjercicio
            .toLowerCase()
            .indexOf(inputBusquedaTxt.toLowerCase()) !== -1
        ) {
          encontroPalabra = true;
          resultado += `<h2>${unEjercicio.tituloEjercicio}</h2> <br> <p> ${unEjercicio.descripcionEjercicio}</p><br> ${img} <br>`;
        }
      }
    }
  } else {
    resultado = '<p>Escriba algo antes de buscar</p>';
  }

  document.querySelector('#resultadoBusqueda').innerHTML = resultado + mensaje;
}

// ###################### Seccion 2 ALUMNO ######################

function seccion2Alumno(usuario) {
  let titulo = `<h2>Realizar entrega de Ejercicios pendientes:</h2>`;
  let docenteDelAlumno = usuario.Docente;
  let selectDeEjercicios =
    '<select id="selectEjercicios"><option value="-1">Elija un ejercicio a entregar</option>';
  let botonEntrega = `<button id="btnEntrega" class="btnEntrega">Enviar tarea</button>`;
  let divMensajeEntrega =
    '<div id="mensajeEntregaTarea" class="divMensajes"></div>';
  for (let i = 0; i < ejercicios.length; i++) {
    unEjercicio = ejercicios[i];

    if (
      unEjercicio.Docente.usuario === docenteDelAlumno.usuario &&
      unEjercicio.Nivel === usuario.Nivel &&
      !checkObjetoRepetidoEnEntregas(unEjercicio, cuentaActiva)
    ) {
      selectDeEjercicios += `<option value="${unEjercicio.id}"> ${unEjercicio.tituloEjercicio}</option>`;
    }
  }

  let archivoSonido = `<br/><label for="archivoSonido">Adjunte archivo de sonido:</label><input id="fileSonido" type="file"><br>`;

  selectDeEjercicios += `</select>`;

  document.querySelector('#seccion2').innerHTML =
    titulo +
    selectDeEjercicios +
    archivoSonido +
    botonEntrega +
    divMensajeEntrega;

  document
    .querySelector('#btnEntrega')
    .addEventListener('click', btnEntregarTarea);
}

function checkObjetoRepetidoEnEntregas(obj, usuario) {
  for (let i = 0; i < entregas.length; i++) {
    if (entregas[i].Ejercicio === obj && entregas[i].Alumno === usuario) {
      return true;
    }
  }
  return false;
}

function btnEntregarTarea() {
  let docenteDelAlumno = obtenerDocenteConUsuario(cuentaActiva.Docente.usuario);

  let ejercicioAEntregar = obtenerEjercicioConID(
    Number(document.querySelector('#selectEjercicios').value)
  );
  let sonido = document.querySelector('#fileSonido').value;
  let archivoSonido = quitarFakePath(sonido);
  let mensaje = '';

  if (ejercicioAEntregar !== null && archivoSonido.length > 4) {
    let entrega = new Entrega();

    entrega.Alumno = cuentaActiva;
    entrega.Ejercicio = ejercicioAEntregar;
    entrega.Docente = docenteDelAlumno;
    entrega.sonido = archivoSonido;
    entrega.devolucion = '';
    entregas.push(entrega);
    // Llamamos a seccion 2 de nuevo, para que se actualize el select con SOLO las tareas pendientes
    seccion2Alumno(cuentaActiva);

    mensaje = 'Tarea enviada con éxito ✅';
  } else if (ejercicioAEntregar === null) {
    mensaje = 'Debe elegir una tarea ❌';
  } else if (archivoSonido.length < 4) {
    mensaje = 'Debe adjuntar un archivo ❌';
  }

  document.querySelector('#mensajeEntregaTarea').innerHTML = mensaje;
}

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
