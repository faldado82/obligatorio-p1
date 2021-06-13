misEventos();

function misEventos() {
  preCargaNiveles();
  preCargaDocentes();
  preCargaAlumnos();

  document.querySelector('#btnLogin').addEventListener('click', logIn);

  inputUsuarioLogIn.addEventListener('click', limpiarUsuarioInput);
  inputPasswordLogIn.addEventListener('click', limpiarPasswordInput);
  // Abrir y cerrar: Ventana Registro Docente
  let btnAbrirVentanaRegistroDocente = document.querySelector(
    '#btnAbrirVentanaRegistroDocente'
  );

  let ventanaRegistroDocente = document.querySelector(
    '.contenedor-ventana-registro-docente'
  );

  let btnCerrarVentanaRegistroDocente = document.querySelector(
    '.cerrarBtnFormDocente'
  );

  btnAbrirVentanaRegistroDocente.addEventListener('click', function () {
    ventanaRegistroDocente.classList.add('mostrar-ventana');
  });

  btnCerrarVentanaRegistroDocente.addEventListener('click', function () {
    ventanaRegistroDocente.classList.remove('mostrar-ventana');
  });

  //Abrir y cerrar: Ventana Registro Alumno
  let btnAbrirVentanaRegistroAlumno = document.querySelector(
    '#btnAbrirVentanaRegistroAlumno'
  );

  let ventanaRegistroAlumno = document.querySelector(
    '.contenedor-ventana-registro-alumno'
  );

  let btnCerrarVentanaRegistroAlumno = document.querySelector(
    '.cerrarBtnFormAlumno'
  );

  btnAbrirVentanaRegistroAlumno.addEventListener('click', function () {
    ventanaRegistroAlumno.classList.add('mostrar-ventana');
  });

  btnCerrarVentanaRegistroAlumno.addEventListener('click', function () {
    ventanaRegistroAlumno.classList.remove('mostrar-ventana');
  });
}
