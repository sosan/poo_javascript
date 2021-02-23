import { Usuario } from "./Usuario.js";

// Crear la clase Profesores
export class Profesor extends Usuario {

    constructor(id, nombre, apellidos, edad, sexo, fechaNacimiento, anyosensenanza, email, activo) 
    {

        super(id, nombre, apellidos, edad, sexo, fechaNacimiento, email, activo);
        this.anyosensenanza = anyosensenanza;

    }
    // getters propios
    get getAnyosEnsenanza() { return this.anyosensenanza; }

    // setters propios
    set setAnyosEnsenanza(ensenanza) { this.anyosensenanza = ensenanza; }


}