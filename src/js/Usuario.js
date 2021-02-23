//create usuario que usaremos como template para profesor y alumno
export class Usuario
{

    /**
     * @param {number} id
     * @param {string} nombre
     * @param {string} apellidos
     * @param {number} edad
     * @param {string} sexo
     * @param {string} fechaNacimiento
     * @param {string} email
     * @param {boolean} activo
     */
    
    constructor(id, nombre, apellidos, edad, sexo, fechaNacimiento, email, activo) 
    {
        this.id = id;
        this.nombre = nombre;
        this.apellidos = apellidos;
        this.edad = edad;
        this.sexo = sexo;
        this.fechaNacimiento = fechaNacimiento;
        this.email = email;
        this.activo = activo;

    }

    // getters
    get getId() { return this.id; }
    get getNombre() { return this.nombre; }
    get getApellidos() { return this.apellidos; }
    get getEdad() { return this.edad; }
    get getSexo() { return this.sexo; }
    get getfechaNacimiento() { return this.fechaNacimiento; }
    get getEmail() { return this.email; }
    get getActivo() { return this.activo; }

    // setters
    set setNombre(nombre) { this.nombre = nombre; }
    set setApellidos(apellidos) { this.apellidos = apellidos; }
    set setEdad(edad) { this.edad = edad; }
    set setSexo(sexo) { this.sexo = sexo; }
    set setfechaNacimiento(fechaNacimiento) { this.fechaNacimiento = fechaNacimiento; }
    set setEmail(email) { this.email = email; }
    set setActivo(activo) { this.activo = activo; }
    

}