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
    this.Nivel; // objeto
    this.Docente; // objeto
    this.tipo = 'alumno';
  }
}

// Clase para crear Ejercicio
class Ejercicio {
  static nro = 1;
  constructor() {
    this.Nivel; // objeto
    this.id = Ejercicio.nro++; // identificador unico
    this.tituloEjercicio; // string
    this.descripcionEjercicio; // string
    this.imagen; // image file
    this.Docente;
  }
}

// Clase para crear Entrega
class Entrega {
  static nro = 1;
  constructor() {
    this.id = Entrega.nro++; // identificador unico
    this.Alumno; // objeto
    this.Ejercicio; // objeto
    this.Docente; // objeto
    this.sonido; // audio file
    this.devolucion; // string
  }
}
