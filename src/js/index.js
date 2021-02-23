// Importar módulos
import { Alumno } from "./Alumno.js";
import { Profesor } from "./Profesor.js";
import { Cursos } from "./Cursos.js";
import { mostrarCurso } from "./mostrarCurso.js";

// mejor realizar la persistencia desde el navegador con un localstorage, etc...
//para practicar generamos el html en las secciones necesarias simulando click en otro html
import { listadoAlumnos, listadoClases, listadoProfesores } from "./Persistencia.js";
import { textoDashboard, templateAlumnoFormulario, templateProfesorFormulario, templateCurso } from "./Templates.js";


//variables
const dashBoardClick = document.getElementById("click_dashboard");
const cursosClick = document.getElementById("click_cursos");
const alumnosClick = document.getElementById("click_alumnos");
const profesorClick = document.getElementById("click_profesor");
const cerrarClick = document.getElementById("click_cerrar");

const contenido = document.getElementById("divcontenido");
const main = document.getElementById("main");





//variables Alumno
let formularioProfesores = undefined;
let formularioCursos = undefined;
let formularioProfesor = undefined;


const mostrarEstadisticas = () =>
{
    const total_alumnos = document.getElementById("total_alumnos");
    const total_clases = document.getElementById("total_clases");
    const total_profesores = document.getElementById("total_profesores");

    total_alumnos.textContent = listadoAlumnos.length.toString();
    total_clases.textContent = listadoClases.length.toString();
    total_profesores.textContent = listadoProfesores.length.toString();

};

const mostrarUltimoCursoAñadido = () =>
{

    const titulo = document.getElementById("titulo");
    const rutaimagen = document.getElementById("rutaimagen");
    const fechainicio = document.getElementById("fechainicio");
    const profesor = document.getElementById("profesor");
    const activo = document.getElementById("activo");

    const ultimo = listadoClases.length - 1;
    titulo.textContent = listadoClases[ultimo].getNombre.toUpperCase();
    rutaimagen.src = listadoClases[ultimo].getPoster;
    fechainicio.textContent = "21/03/2021";

    if (listadoClases[ultimo].getProfesores[0].length === 0)
    {
        profesor.textContent = "Profesor TODAVIA NO ASIGNADO";
    }
    else
    {
        profesor.textContent = "Impartido por " + 
            listadoClases[ultimo].getProfesores[0][0].nombre + " " + 
            listadoClases[ultimo].getProfesores[0][0].apellidos;

    }

    
    if (listadoClases[ultimo].getActivo === true)
    {
        activo.textContent = "Activo";
    }
    else
    {
        activo.textContent = "No Activo";
    }

};

mostrarUltimoCursoAñadido();
mostrarEstadisticas();

const activarTab = (elemento) =>
{

    //quitamos el css
    dashBoardClick.classList.remove("link-elemento-activo");
    cursosClick.classList.remove("link-elemento-activo");
    alumnosClick.classList.remove("link-elemento-activo");
    profesorClick.classList.remove("link-elemento-activo");
    cerrarClick.classList.remove("link-elemento-activo");


    //reset variables por si acaso hay alguna interaccion entre los formularios
    formularioProfesores = undefined;
    formularioCursos = undefined;
    formularioProfesor = undefined;


    elemento.classList.add("link-elemento-activo");
};

const crearElementoLi = (cadena, listadoli) =>
{
    //cremaos el elemnto li
    let n3 = document.createElement("li");
    //insertamos el html
    n3.innerHTML = cadena;
    //insertamos en las primeras posiciones
    listadoli.insertBefore(n3, listadoli.children[4]);

};

const crearListadoLiAlumno = (id, apellidos, nombre) =>
{

    let listadoli = document.getElementById("listado-alumnos");

    crearElementoLi(
        `<button id="" class="boton-borrar-alumno" name="borrar" value="${id}">Borrar Alumno</button>`,
        listadoli
    );

    crearElementoLi(
        `<button id="" class="boton-ver-alumno" name="ver" value="${id}">Ver Alumno</button>`,
        listadoli
    );

    crearElementoLi(
        `<p class="">${apellidos}</p>`,
        listadoli
    );

    crearElementoLi(
        `<p class="">${nombre}</p>`,
        listadoli
    );

};


const crearListadoLiProfesor = (id, apellidos, nombre) => {

    let listadoli = document.getElementById("listado-alumnos");

    crearElementoLi(
        `<button id="" class="boton-borrar-alumno" name="borrar" value="${id}">Borrar Profesor</button>`,
        listadoli
    );

    crearElementoLi(
        `<button id="" class="boton-ver-alumno" name="ver" value="${id}">Ver Profesor</button>`,
        listadoli
    );

    crearElementoLi(
        `<p class="">${apellidos}</p>`,
        listadoli
    );

    crearElementoLi(
        `<p class="">${nombre}</p>`,
        listadoli
    );


};


const mostrarListadoCursos = () =>
{

    //quitamos el html de main
    const contenido = main.firstElementChild;
    if (contenido !== null) {
        main.firstElementChild.remove();
    }

    //mostramos el nuevo html
    let elementoHTML = document.createElement("div");
    elementoHTML.innerHTML = templateCurso;
    let listadoelementos = elementoHTML.children[0].children[2].children[0];

    for (let i = 0; i < listadoClases.length; i++) {
        listadoelementos.innerHTML += `
        <li><p class="">${listadoClases[i].getNombre}</p></li>
        <li><p class="">${listadoClases[i].getClases}</p></li>
        <li><button id="" class="boton-ver-alumno" name="ver" value="${listadoClases[i].getId}">Ver Curso</button></li>
        <li><button id="" class="boton-borrar-alumno" name="borrar" value="${listadoClases[i].getId}">Borrar Curso</button></li>
        `;

    }

    main.innerHTML = elementoHTML.innerHTML;

};


//eventos
dashBoardClick.addEventListener("click", (evento) =>
{

    evento.preventDefault();

    activarTab(dashBoardClick);
    
    const contenido = main.firstElementChild;
    if (contenido !== null)
    {
        main.firstElementChild.remove();

    }
    // document.getElementById("divcontenido").remove();

    main.innerHTML = textoDashboard;

    mostrarEstadisticas();
    mostrarUltimoCursoAñadido();


});


cursosClick.addEventListener("click", (evento) => 
{

    evento.preventDefault();

    activarTab(cursosClick);

    //quitamos el html de main
    const contenido = main.firstElementChild;
    if (contenido !== null) {
        main.firstElementChild.remove();
    }


    //mostramos el nuevo html
    let elementoHTML = document.createElement("div");
    elementoHTML.innerHTML = templateCurso;
    let listadoelementos = elementoHTML.children[0].children[2].children[0];

    for (let i = 0; i < listadoClases.length; i++) 
    {
        listadoelementos.innerHTML += `
        <li><p class="">${listadoClases[i].getNombre}</p></li>
        <li><p class="">${listadoClases[i].getClases}</p></li>
        <li><button id="" class="boton-ver-alumno" name="ver" value="${listadoClases[i].getId}">Ver Curso</button></li>
        <li><button id="" class="boton-borrar-alumno" name="borrar" value="${listadoClases[i].getId}">Borrar Curso</button></li>
        `;

    }

    main.innerHTML = elementoHTML.innerHTML;

    //seteamos las varialbes undefined
    formularioCursos = document.getElementById("formulario");

    //creamos el evento cuando se envie el formulario
    formularioCursos.addEventListener("submit", (evento) => 
    {

        evento.preventDefault();

        const formularioObtenido = evento.target;

        //inseramos en la persistencia
        //Clase alumno - nombre, apellidos, sexo, edad
        listadoClases.push(
            new Cursos(
                listadoClases.length,
                formularioObtenido.nombreCurso.value,
                formularioObtenido.rutaImagen.value,
                formularioObtenido.cantidadHoras.value,
                [], // de momento 0, luego se lo asignamos
                []
            )
        );

        //actualizamos el listado de Cursos
        //no tener mas tiempo un for por todo el listado de cursos
        mostrarListadoCursos();

        //reset al formulario
        formularioObtenido.reset();


    });



});

alumnosClick.addEventListener("click", (evento) => 
{

    evento.preventDefault();

    //activamos el tab que hemos hecho click
    activarTab(alumnosClick);

    //quitamos el html de main
    const contenido = main.firstElementChild;
    if (contenido !== null) 
    {
        main.firstElementChild.remove();
    }

    //mostramos el nuevo html
    let elementoHTML = document.createElement("div");
    elementoHTML.innerHTML = templateAlumnoFormulario;
    let listadoelementos = elementoHTML.children[0].children[1].children[0];

    for (let i = 0; i < listadoAlumnos.length; i++)
    {
        listadoelementos.innerHTML += `
        <li><p class="">${listadoAlumnos[i].getNombre}</p></li>
        <li><p class="">${listadoAlumnos[i].getApellidos}</p></li>
        <li><button id="" class="boton-ver-alumno" name="ver" value="${listadoAlumnos[i].getId}">Ver Alumno</button></li>
        <li><button id="" class="boton-borrar-alumno" name="borrar" value="${listadoAlumnos[i].getId}">Borrar Alumno</button></li>
        `;

    }

    main.innerHTML = elementoHTML.innerHTML;

    //seteamos las varialbes undefined
    formularioProfesores = document.getElementById("formulario-alumnos");

    //creamos el evento cuando se envie el formulario
    formularioProfesores.addEventListener("submit", (evento) =>
    {

        evento.preventDefault();

        const formularioObtenido = evento.target;
        
        //inseramos en la persistencia
        //Clase alumno - nombre, apellidos, sexo, edad
        listadoAlumnos.push(
            new Alumno(
                listadoAlumnos.length,
                formularioObtenido.nombre.value,
                formularioObtenido.apellidos.value,
                formularioObtenido.edad.value,
                formularioObtenido.sexo.value,
                "19/04/1998",
                "loquesea@gmail.com",
                true
            )
        );

        //actualizamos el listado de Alumnos
        crearListadoLiAlumno(
            listadoAlumnos.length,
            formularioObtenido.apellidos.value,
            formularioObtenido.nombre.value
        );

        //reset al formulario
        formularioObtenido.reset();


    });


});


profesorClick.addEventListener("click", (evento) =>
{

    evento.preventDefault();

    activarTab(profesorClick);

    //quitamos el html de main
    const contenido = main.firstElementChild;
    if (contenido !== null) {
        main.firstElementChild.remove();
    }

    //mostramos el nuevo html
    let elementoHTML = document.createElement("div");
    elementoHTML.innerHTML = templateProfesorFormulario;
    let listadoelementos = elementoHTML.children[0].children[1].children[0];

    for (let i = 0; i < listadoProfesores.length; i++) {
        listadoelementos.innerHTML += `
        <li><p class="">${listadoProfesores[i].getNombre}</p></li>
        <li><p class="">${listadoProfesores[i].getApellidos}</p></li>
        <li><button id="" class="boton-ver-alumno" name="ver" value="${listadoProfesores[i].getId}">Ver Profesor</button></li>
        <li><button id="" class="boton-borrar-alumno" name="borrar" value="${listadoProfesores[i].getId}">Borrar Profesor</button></li>
        `;

    }

    main.innerHTML = elementoHTML.innerHTML;

    //seteamos las varialbes undefined
    formularioProfesores = document.getElementById("formulario-profesor");

    //creamos el evento cuando se envie el formulario
    formularioProfesores.addEventListener("submit", (evento) => {

        evento.preventDefault();

        const formularioObtenido = evento.target;

        //inseramos en la persistencia
        //Clase alumno - nombre, apellidos, sexo, edad
        listadoProfesores.push(
            new Profesor(
                listadoProfesores.length,
                formularioObtenido.nombre.value,
                formularioObtenido.apellidos.value,
                formularioObtenido.edad.value,
                formularioObtenido.sexo.value,
                "19/04/1998",
                formularioObtenido.ensenanza.value,
                "loquesea@gmail.com",
                true
            )
        );

        //actualizamos el listado de Alumnos
        crearListadoLiProfesor(
            listadoAlumnos.length,
            formularioObtenido.apellidos.value,
            formularioObtenido.nombre.value
        );

        //reset al formulario
        formularioObtenido.reset();


    });


});


cerrarClick.addEventListener("click", (evento) =>
{
    evento.preventDefault();

    activarTab(cerrarClick);



});




// // acceder al elemento de HTML
// const formulario = document.getElementById("formulario")

// // Funciones

// // acceder al formulario
// // escuchar el envio del formulario
// formulario.addEventListener("submit", evento => 
// {
//     // hacer que el formulario no se ejecute
//     evento.preventDefault()
//     // guardar el FORMULARIO
//     // recoger el formulario entero
//     const formObtenido = evento.target

//     // ******
//     // crear el nuevo curso
//     const curso = new Cursos(formObtenido.nombreCurso.value, formObtenido.rutaImagen.value, formObtenido.cantidadHoras.value)
//     // mostrar curso
//     mostrarCurso(curso)
//     // refrescar formulario
//     formObtenido.reset()
// })