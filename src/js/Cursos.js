// Crear la clase Cursos
export class Cursos
{
    inscritos = [];
    profesores = [];

    constructor(id, nombre, poster, clases, alumnos, profesores)
    {
        this.id = id;
        this.nombre = nombre;
        this.poster = poster;
        this.clases = clases;
        this.inscritos.push(alumnos);
        this.profesores.push(profesores);
        this.activo = true;
    }
    // getters
    get getId() { return this.id; }
    get getNombre() { return this.nombre };
    get getPoster() { return this.poster };
    get getClases() { return this.clases };
    get getIncritos() { return this.inscritos };
    get getProfesores() { return this.profesores; }
    get getActivo() { return this.activo; }

    // setters
    set setId(id) { this.id = id; }
    set setNombre(nombre) { this.nombre = nombre };
    set setPoster(poster) { this.poster = poster };
    set setClases(clases) { this.clases = clases };
    set setIncritos(inscritos) { this.inscritos = inscritos };
    set setProfesores(profesores) { this.profesores = profesores; }


}