export class Actividad {
  constructor(
    public idPlanTrabajo?: number,
    public idDocente?: number,
    public nombre?: string,
    public duracionMinutos?: number,
    public tipoActividad?: string,
    public idAprendizajeEsperado?: AprendizajeEsperado[],
    /**Pendientes*/
    public idDiagnostico?: number,
    public inicio?: string,
    public desarrollo?: string,
    public cierre?: string,
    public recursos?: string,
    public evaluacion?: string,

    public evidencia?: Evidencia[],
    public fechaModificacion?: string,
    public estatus?: string,
  ) { }
}

export class AprendizajeEsperado {
  constructor(
    public idAprendizajeEsperado?: number,
    public idAreaFormacion?: AreaFormacion[],
    public descripcion?: string,
    public estatus?: string,
  ) { }
}

export class Evidencia {
  constructor(
    public idEvidencia?: number,
    public idPlanTrabajo?: number,
    public nombreEvidencia?: number,
    public descripcion?: number,
    public idFormato?: number,
  ) { }
}

export class AreaFormacion {
  constructor(
    public idAreaFormacion?: number,
    public descripcion?: string,
    public estatus?: string,
  ) { }
}

export const FORMATOS = [
  //Para el menu lateral: se crea un arreglo con las rutas, agregando nombre e icono luego se recorre en el html
  { id: 0, descripcion: 'Seleccione un area de formación' },
  { id: 1, descripcion: '*.PDF', icon: 'ni-2x ni-book-bookmark text-red' },
  { id: 2, descripcion: '*.PNG', icon: 'ni-2x ni-image text-blue' },
  { id: 3, descripcion: '*.*', icon: 'ni-2x ni-collection text-green' },
];