import { Cursos } from "./Cursos.js";
import { Alumno } from "./Alumno.js";
import { Profesor} from "./Profesor.js";

let listadoAlumnos = [
    new Alumno(0, "Pepe", "Tomas", 23, "hombre", "19/04/1998", "loquesea@gmail.com", true),
    new Alumno(1, "Maria", "Lucia", 35, "mujer", "19/04/1986", "loquesea@gmail.com", true),
    new Alumno(2, "Antonia", "Abad", 21, "mujer", "19/04/2000", "loquesea@gmail.com", true),
    new Alumno(3, "Juan", "Martinez", 56, "hombre", "19/04/1965", "loquesea@gmail.com", true),
];
let listadoProfesores = [
    new Profesor(0, "Lucia", "Pulido", 23, "mujer", "19/04/1998", 1, "loquesea@gmail.com", true),
    new Profesor(1, "Maria", "Sabater", 35, "mujer", "19/04/1986", 5, "loquesea@gmail.com", true),
    new Profesor(2, "Antonia", "Muñiz", 21, "mujer", "19/04/2000", 1, "loquesea@gmail.com", true),
    new Profesor(3, "Juan", "Fernandez", 56, "hombre", "19/04/1965", 20, "loquesea@gmail.com", true),


];
let listadoClases = [
    new Cursos(
        0,
        "html forever",
        "https://webhostingespanol.com/wp-content/uploads/2015/10/html-logo.png", 
        8,
        [
            new Alumno(0, "Pepe", "Tomas", 23, "hombre", "19/04/1998", "loquesea@gmail.com", true),
            new Alumno(1, "Maria", "Lucia", 35, "mujer", "19/04/1986", "loquesea@gmail.com", true)
        ],
        [
            new Profesor(3, "Juan", "Fernandez", 56, "hombre", "19/04/1965", 20, "loquesea@gmail.com", true)
        ]
    ),
    new Cursos(
        1,
        "css forever",
        "https://webhostingespanol.com/wp-content/uploads/2015/10/html-logo.png",
        13,
        [
            new Alumno(2, "Antonia", "Abad", 21, "mujer", "19/04/2000", "loquesea@gmail.com", true),
            new Alumno(3, "Juan", "Martinez", 56, "hombre", "19/04/1965", "loquesea@gmail.com", true)
        ],
        [
            new Profesor(1, "Maria", "Sabater", 35, "mujer", "19/04/1986", 5, "loquesea@gmail.com", true)
        ]
    ),


];

export { listadoAlumnos, listadoProfesores, listadoClases};
