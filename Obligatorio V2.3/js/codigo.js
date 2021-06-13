let usuarios = []
let niveles = [];
let ejercicios = [];



// Elementos útiles para funciones de logIn

// Input Login Usuario
let inputUsuarioLogIn = document.querySelector('#logInUsuarioInput');
// Input Login Password
let inputPasswordLogIn = document.querySelector('#logInPasswordInput');
// Elemento página de inicio (registro y login)
let paginaInicio = document.querySelector('#pagina-inicio');
// Elemento página interior aplicacion (luego del log in exitoso)
let paginaApp = document.querySelector('#contenedor-aplicacion');





// ################################### Precargas ###################################

// Precarga Niveles
function preCargaNiveles() {
  crearYGuardarNivel(1, 'Inicial');
  crearYGuardarNivel(2, 'Itermedio');
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
  crearYGuardarDocente('Bob Dylan', 'bobbydylan', 'blowingtheWind1962');
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
    'lauraSeTeVe',
    'lauchita1500A',
    obtenerNivelConNumero(1),
    obtenerDocenteConUsuario('laJanis')
  );
  crearYGuardarAlumno(
    'Gabriel Richieri',
    'gabo87',
    'gaboteElbebote3',
    obtenerNivelConNumero(3),
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
    'Eric Ramírez',
    'eric99',
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

// Esta función toma un nombre de usuario y devuelve el objeto de Docente con ese Usuario Unico (en caso de existir)
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




// Funcionalidad login (LA CLAVE PARA TODO (incluida la vida))

let cuentaActiva;
// Esta cuenta va a ser la que logre pasar el log in, y segun su tipo(docente o alumno) se mostraran diferentes datos en las secciones.

function logIn(){

cuentaActiva = null;

let i = 0;

// Buscamos la cuenta ingresada, si la encontramos pasamos a la contraseña
while(cuentaActiva === null && i < usuarios.length){
// usuarios[i] es cada objeto del array usuarios, el elemento actual en cada iteración
  if(usuarios[i].usuario.toLowerCase().trim() === inputUsuarioLogIn.value.toLowerCase().trim()){
    cuentaActiva = usuarios[i]
  }
i++
}

if(cuentaActiva !== null && cuentaActiva.password === inputPasswordLogIn.value ){

console.log('Log in exitoso!');

// Hacemos desaparecer el span de error de login
document.querySelector('#mensajeLogIn').innerHTML = ''
  


// Sacamos de vista la pagina principal de registro y login, agregandole la clase ocultar-ventana
paginaInicio.classList.add('ocultar-ventana')

// Hacemos aparecer la ventana de la applicacion con los datos del docente o alumno, segun corresponda (eso se evalua un cada función)
paginaApp.classList.remove('ocultar-ventana')


mostrarUISegunUsuario(cuentaActiva)


} else {
  // Hacemos aparecer el span del error logIn, sacandole la clase de ocultar, y agregandole la clase mostrar-ventana
  document.querySelector('#mensajeLogIn').innerHTML = 'Usuario o contraseña incorrectos! Ingreselos nuevamente'
  
}
}


function mostrarUISegunUsuario(){
mostrarNav(cuentaActiva)
mostrarSeccion1(cuentaActiva)
mostrarSeccion2(cuentaActiva)
mostrarSeccion3(cuentaActiva)
mostrarSeccion4(cuentaActiva)
}


// Mostramos la navegación segun el tipo de usuario logado correctamente
function mostrarNav(usuario){
let nav = '';

// tipo Docente
if(usuario.tipo === 'docente'){

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
    <li class="item-lista"><a href="#seccion4">Ver informacion estadística</a></li>
  </ul>
</nav>`
// tipo Alumno
} else if(usuario.tipo === 'alumno'){

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
  <li class="item-lista"><a href="#seccion4">Ver informacion estadística</a></li>
</ul>
</nav>`
}
document.querySelector('#navegacion').innerHTML = nav
}


function mostrarSeccion1(usuario){

 



  if(usuario.tipo === 'docente'){

    let selectAlumnos = `<select id="selListaAlumnos"><option value="-1">Elija uno de sus alumnos:</option>`
    
   
    for (let i = 0; i < usuarios.length; i++) {
      unAlumno = usuarios[i]; // current element

      if(unAlumno.tipo === 'alumno' && unAlumno.Docente.usuario === usuario.usuario){

        selectAlumnos += `<option value="${unAlumno.Nivel.numero}"> ${unAlumno.nombre} - (${unAlumno.usuario})</option>`;

      }


    }


    selectAlumnos += `</select> <div id="testing"></div>`
    

    document.querySelector('#seccion1').innerHTML = selectAlumnos


document.querySelector('#selListaAlumnos').addEventListener('click', mostrarNivelDeAlumnoSeleccionado)


  } else if (usuario.tipo === 'alumno'){


  }

}


function mostrarNivelDeAlumnoSeleccionado(){
  

  
// 1 la posicion de array de niveles es index 0
// 2 la posicion de array de niveles es index 1
// 3 la posicion de array de niveles es index 2


let current = document.querySelector('#selListaAlumnos').value;



  let selectNiveles = `<select id="selListaNiveles"><option value="-1">Elija uno de los niveles:</option>`;


  selectNiveles +=  `<option value="${current}"> ${current}</option>`


selectNiveles += `</select>`

console.log('SE DISPARA EVENTO');

document.querySelector('#testing').innerHTML = selectNiveles


}






// Limpieza de inputs de Login (usuario y contraseña)
function limpiarUsuarioInput(){
  document.querySelector('#mensajeLogIn').innerHTML = ''
  inputUsuarioLogIn.value = '';  
}

function limpiarPasswordInput(){
  document.querySelector('#mensajeLogIn').innerHTML = ''
  inputPasswordLogIn.value = '';
}








FIXME:
TODO: 
// VALIDAR QUE SEA PARA EL PROFESOR LOGEADO, FUNCIONALIDAD DEL BOTON, SOLO SE PUEDE AVANZAR HACIA ADELANTE - VERIFICAR VALIDACIONES PDF TODO:
// Mostramos lista de alumnos para que el docente pueda cambiar de nivel a los que cumplan los requisitos
// function mostrarSelectAlumnosSeccion1() {
//   let elementoSelectAlumnos = `<h2>Cambiar nivel alumno</h2> <select id="selListaAlumnos" class="selectNiveles" > <option value="-1">Elija un alumno</option>`;
//   let botonCambiarNivel = `<button id="cambiarNivel">Cambiar nivel</button>`;

//   for (let i = 0; i < alumnos.length; i++) {
//     unAlumno = alumnos[i];
//     elementoSelectAlumnos += `<option value="${unAlumno.usuario}"> ${unAlumno.nombre} - (${unAlumno.usuario})</option>`;
//   }

//   let elementoSelectNiveles = `<select id="selListaNiveles" > <option value="-1">Elija un Nivel</option>`;

//   for (let i = 0; i < niveles.length; i++) {
//     unNivel = niveles[i];
//     elementoSelectNiveles += `<option value="${unNivel.numero}"> ${unNivel.numero} - (${unNivel.nombre})</option> `;
//   }

//   elementoSelectAlumnos += `</select>`;
//   elementoSelectNiveles += `</select>`;

//   document.querySelector('#seccion1').innerHTML =
//     elementoSelectAlumnos + elementoSelectNiveles + botonCambiarNivel;
// }


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
  if (usuario.length >= 4 && isNaN(usuario) && !tieneEspacioEntreMedio(usuario)) {
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
