export class Usuario {
  constructor(
    public idUsuario?: number,
    public idDocente?: number,
    public idAlumno?: number,
    public rol?: string,
    public email?: string,
    public contraseña?: string,
    public token?: string,
    public rutaPerfil?: string,
    public estatus?: string,
  ) { }
}