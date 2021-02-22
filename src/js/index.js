// Importar módulos
import { Cursos } from './Cursos.js'
import { mostrarCurso } from './mostrarCurso.js'


// acceder al elemento de HTML
const formulario = document.getElementById('formulario')

// Funciones

// acceder al formulario
// escuchar el envio del formulario
formulario.addEventListener('submit', evento => {
    // hacer que el formulario no se ejecute
    evento.preventDefault()
    // guardar el FORMULARIO
    // recoger el formulario entero
    const formObtenido = evento.target
    // Prueba ******
    // console.log(formObtenido.nombreCurso.value)
    // console.log(formObtenido.rutaImagen.value)
    // console.log(formObtenido.cantidadHoras.value)
    // ******
    // crear el nuevo curso
    const curso = new Cursos(formObtenido.nombreCurso.value, formObtenido.rutaImagen.value, formObtenido.cantidadHoras.value)
    // mostrar curso
    mostrarCurso(curso)
    // refrescar formulario
    formObtenido.reset()
})