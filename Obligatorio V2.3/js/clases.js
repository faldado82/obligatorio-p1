// Clase para crear Nivel
class Nivel {
  constructor() {
    this.numero; // number
    this.nombre; // string
  }
}

// Clase para crear Docente
class Docente {
  constructor() {
    this.nombre; // string
    this.usuario; // string
    this.password; // string
    this.tipo = 'docente';
  }
}

// Clase para crear Alumno
class Alumno {
  constructor() {
    this.nombre; // string
    this.usuario; // string
    this.password; // string
    this.Nivel; // Objeto
    this.Docente; // Objeto
    this.tipo = 'alumno';
  }
}

// Clase para crear Ejercicio
class Ejercicio {
  static nro = 0;
  constructor() {
    this.Nivel; // Obj
    this.id = Ejercicio.nro++; // identificador unico
    this.tituloEjercicio; //txt
    this.descripcionEjercicio; //txt
    this.imagen; // image file
    this.sonido; // audio file
    this.estado; // boolean
    this.devolucion; // txt
  }
}
