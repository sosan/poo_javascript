import { listadoAlumnos, listadoClases, listadoProfesores } from "../Persistencia.js";

class Dashboard extends HTMLElement 
{

    //construimos
    constructor() 
    {
        super();

        this.attachShadow({ mode: "open" });
        this.dashboard = undefined;

    }
    
    connectedCallback() 
    {
        console.log("Dashboard conectado");
        this.generarInterfazDashboard();

        //realizamos los cambios de dashboard
        //todavia esta en memoria
        this.mostrarUltimoCursoAñadido();
        this.mostrarEstadisticas();
        
        //insertamos el dashboard al documento
        this.shadowRoot.appendChild(this.dashboard);
        
        
    }

    disconnectedCallback()
    {
        this.dashboard = undefined;
    }

    attributeChangedCallback(name, oldVal, newVal)
    {
        //implementation
    }

    adoptedCallback()
    {
        //implementation
    }

    static get observedAttributes()
    {
        return ['attrName'];
    }

    generarInterfazDashboard()
    {
        console.log("clonar dashboard de template")
        //accedemos al template
        this.templateDashboard = document.getElementById("dashboardtemplate");
        //copiamos el template en la variable this.dashboard
        this.dashboard = document.importNode(this.templateDashboard.content, true);

    }

    mostrarEstadisticas()
    {

        console.log("mostrar estadisticas");
        let total_alumnos = this.dashboard.getElementById("total_alumnos");
        let total_clases = this.dashboard.getElementById("total_clases");
        let total_profesores = this.dashboard.getElementById("total_profesores");

        total_alumnos.textContent = listadoAlumnos.length.toString();
        total_clases.textContent = listadoClases.length.toString();
        total_profesores.textContent = listadoProfesores.length.toString();

    };

    mostrarUltimoCursoAñadido()
    {
        console.log("mostrar cursos añadidos");
        //obtenemos los elementos de ui
        const titulo = this.dashboard.getElementById("titulo");
        const rutaimagen =  this.dashboard.getElementById("rutaimagen");
        const fechainicio = this.dashboard.getElementById("fechainicio");
        const profesor = this.dashboard.getElementById("profesor");
        const activo = this.dashboard.getElementById("activo");

        const ultimo = listadoClases.length - 1;
        titulo.textContent = listadoClases[ultimo].getNombre.toUpperCase();
        const poster = listadoClases[ultimo].getPoster;
        //comprobamos que tenga http, este vacio, null, undefined
        if (poster === undefined || poster === null || poster === "" || poster.split("http").length <= 1)
        {
            rutaimagen.src = "https://webhostingespanol.com/wp-content/uploads/2015/10/html-logo.png";
        }
        else
        {
            rutaimagen.src = poster;

        }
        fechainicio.textContent = "21/03/2021";

        if (listadoClases[ultimo].getProfesores[0].length === 0) {
            profesor.textContent = "Profesor TODAVIA NO ASIGNADO";
        }
        else {
            profesor.textContent = "Impartido por " +
                listadoClases[ultimo].getProfesores[0][0].nombre + " " +
                listadoClases[ultimo].getProfesores[0][0].apellidos;

        }


        if (listadoClases[ultimo].getActivo === true) {
            activo.textContent = "Activo";
        }
        else {
            activo.textContent = "No Activo";
        }

    };


}

window.customElements.define('dashboard-elemento', Dashboard);

export { Dashboard };