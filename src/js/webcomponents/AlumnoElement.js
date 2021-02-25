import { Alumno } from "../Alumno.js";
import { listadoAlumnos } from "../Persistencia.js";

class AlumnoElement extends HTMLElement {
    constructor() {
        super();

        this.attachShadow({ mode: "open" });
        this.instanciaAlumno = undefined;

    }

    connectedCallback()
    {
        // console.log("Alumno conectado");

        this.generarInterfazAlumno();
        this.shadowRoot.appendChild(this.instanciaAlumno);
        
    }

    disconnectedCallback() {
        
    }

    attributeChangedCallback(name, oldVal, newVal) {
        
    }

    adoptedCallback() {
        
    }

    generarInterfazAlumno()
    {

        console.log("clonar alumno de template")
        //accedemos al template
        let templateAlumno = document.getElementById("alumnotemplate");
        //clonamos el template
        let instanciaAlumno = document.importNode(templateAlumno.content, true);

        for (let i = 0; i < listadoAlumnos.length; i++)
        {
            
            let templateLiAlumno = document.getElementById("alumno-template-li");
            let instanciaLi = document.importNode(templateLiAlumno.content, true);
            
            instanciaLi.querySelector("#nombre-alumno").textContent = listadoAlumnos[i].getNombre;
            instanciaLi.querySelector("#apellido-alumno").textContent = listadoAlumnos[i].getApellidos;
            instanciaLi.querySelector("#boton-ver").value = listadoAlumnos[i].id.toString();
            instanciaLi.querySelector("#boton-borrar").value = listadoAlumnos[i].id.toString();
            instanciaAlumno.children[2].children[1].children[0].appendChild(instanciaLi);
            
        }

        this.setAlumnoElement(instanciaAlumno);
        
        this.createEventClicker();
    }

    setAlumnoElement(alumno)
    {
        this.instanciaAlumno = alumno;
    }

    createEventClicker()
    {
        this.formularioAlumnos = this.instanciaAlumno.getElementById("formulario-alumnos");

        //creamos el evento cuando se envie el formulario
        this.formularioAlumnos.addEventListener("submit", (evento) =>
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
            this.crearListadoLiAlumno(
                listadoAlumnos.length,
                formularioObtenido.apellidos.value,
                formularioObtenido.nombre.value
            );

            //reset al formulario
            formularioObtenido.reset();


        });

    }


    crearElementoLi (cadena, listadoli)
    {
        //cremaos el elemnto li
        let n3 = document.createElement("li");
        //insertamos el html
        n3.innerHTML = cadena;
        //insertamos en las primeras posiciones
        listadoli.insertBefore(n3, listadoli.children[4]);

    };

    crearListadoLiAlumno(id, apellidos, nombre)
    {

        let listadoli = document.querySelector("alumno-elemento").shadowRoot.getElementById("listado-alumnos");//children[2].children[1].children //this.instanciaAlumno.getElementById("listado-alumnos");

        this.crearElementoLi(
            `<button id="" class="boton-borrar-alumno" name="borrar" value="${id}">Borrar Alumno</button>`,
            listadoli
        );

        this.crearElementoLi(
            `<button id="" class="boton-ver-alumno" name="ver" value="${id}">Ver Alumno</button>`,
            listadoli
        );

        this.crearElementoLi(
            `<p class="">${apellidos}</p>`,
            listadoli
        );

        this.crearElementoLi(
            `<p class="">${nombre}</p>`,
            listadoli
        );

    };

}

window.customElements.define("alumno-elemento", AlumnoElement);
export { AlumnoElement } 