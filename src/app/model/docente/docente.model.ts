export class Docente {
    constructor (
        public idDocente ?: number,
        public idEscuela ?: number,
        public nombre ?: string,
        public ap1 ?: string,
        public ap2 ?: string,
        public curp ?: string,
        public rfc ?: string,
        public direccion ?: string,
        public telefono ?: string,
        public email ?: string,
        public facebook ?: string,
        public grupo ?: string,
        public grado ?: string,
        public turno ?: string,
        public rol ?: string,
        public estatus ?: string,
        public idEscuelaEscuela ?: number,
        public nombreEscuela ?: string,
        public claveEscuela ?: string,
        public zonaEscolarEscuela ?: string,
        public sectorEscuela ?: string,
        public direccionEscuela ?: string,
        public telefonoEscuela ?: string,
        public idCicloEscolarCiclo ?: number,
        public inicioCicloCiclo ?: string,
        public finCicloCiclo ?: string,
        public diasHabilesCiclo ?: number,
        public estatusCiclo ?: string,
    ) { }
}