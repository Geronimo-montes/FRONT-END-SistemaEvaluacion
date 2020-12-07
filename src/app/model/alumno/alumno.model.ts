export class Alumno {
  constructor (
    public idAlumno ?: number,
    public idEscuela ?: number,
    public nombre ?: string,
    public ap1 ?: string,
    public ap2 ?: string,
    public curp ?: string,
    public grupo ?: string,
    public grado ?: string,
    public turno ?: string,
    public nombreTutor ?: string,
    public direccion ?: string,
    public telefono ?: string,
    public email ?: string,
    public facebook ?: string,
    public preferennciaContacto ?: string,
    public estatus ?: string,
    public rutaExpediente ?: string,
    public rutaPerfil ?: string,
  ) { }
}