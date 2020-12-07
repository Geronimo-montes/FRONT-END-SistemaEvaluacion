export class AreaFormacion {
  constructor (
    public idAreaFormacion ?: number,
    public descripcion ?: string,
    public estatus ?: string,
  ) { }
}

export class AprendizajeEsperado {
  constructor (
    public idAprendizajeEsperado ?: number,
    public idAreaFormacion ?: number,
    public descripcion ?: string,
    public estatus ?: string,
  ) { }
}

export class Actividad {
  constructor (
    public idDocente ?: number,
    public nombre ?: string,
    public duracionMinutos ?: number,
    public tipoActividad ?: string,
    public idAprendizajeEsperado ?: number,
    public idDiagnostico ?: number,
    public inicio ?: string,
    public desarrollo ?: string,
    public cierre ?: string,
    public recursos ?: string,
    public evaluacion ?: string
  ) { }
}