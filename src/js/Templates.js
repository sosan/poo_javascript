

const textoDashboard = `
<div id="divcontenido" class="contenido-dashboard">
    <section id="ultimasclases" class="ultimasclases">
        <h3>Ultimas Clases Insertadas</h3>
            <section id="insercion_ultimasclases" class="insercion_ultimasclases">
                <!-- insercion desde js-->
                <article class="forma-article">
                    <img id="rutaimagen" class="imagen-article" src="https://webhostingespanol.com/wp-content/uploads/2015/10/html-logo.png"
                        alt="imagen">
                    <p id="titulo" class="titulo-article">Titulo html</p>
                    <p id="fechainicio" class="titulo-article">Fecha Inicio: 21/01/2021</p>
                    <p id="profesor" class="profesor-article">Impartido por Toni Ferra</p>
                    <p id="activo" class="profesor-article">Activo</p>
                </article>
            </section>
    </section>

    <section id="estadisticas" class="estadisticas">
        <h3>Estadisticas</h3>
        <ul class="ul-estadisticas">
            <li class="elemento-estadisticas">
                <article class="forma-estadistica">
                    <p id="total_alumnos" class="titulo-estadistica">0</p>
                    <p class="subtitulo-estadistica">Total Alumnos</p>
                </article>
            </li>

            <li class="elemento-estadisticas">
                <article class="forma-estadistica">
                    <p id="total_clases" class="titulo-estadistica">0</p>
                    <p class="subtitulo-estadistica">Total Clases</p>
                </article>
            </li>

            <li class="elemento-estadisticas">
                <article class="forma-estadistica">
                    <p id="total_profesores" class="titulo-estadistica">0</p>
                    <p class="subtitulo-estadistica">Total Profesores</p>
                </article>
            </li>
        </ul>
    </section>
</div>
`;


const templateAlumnoFormulario = `
<div id="contenido-alumnos" class="contenido-alumnos">
    <section id="crear-alumno" class="crear-alumno">
        <h3>CREAR NUEVO ALUMNO</h3>
        <form id="formulario-alumnos" class="formulario-alumnos" action="">
            <label for="nombre">Nombre</label>
            <input class="input-crear-alumnos" type="text" name="nombre" id="nombre" placeholder="Nombre" required autocomplete="off">
            <label for="apellidos">Apellidos</label>
            <input class="input-crear-alumnos" type="text" name="apellidos" id="apellidos" placeholder="Apellidos" required autocomplete="off">
            <label for="sexo">Sexo</label>
            <select class="input-crear-alumnos" name="sexo" id="sexo" required>
                <option value="hombre">Hombre</option>
                <option value="mujer" selected>Mujer</option>
                <option value="otros">Otros</option>
                <option value="nodecir">No decirlo</option>
            </select>
            <label for="edad">Edad</label>
            <input class="input-crear-alumnos" type="number" name="edad" id="edad" placeholder="Edad" required autocomplete="off">
            <button class="boton_crear-alumno" type="submit">Enviar</button>
        </form>
    </section>
    <section id="ver-alumnos">
        <ul id="listado-alumnos" class="listado-alumnos">
            <li class="listado-alumnos_elemento">
                <p>Apellidos Alumno</p>
            </li>
            <li class="listado-alumnos_elemento">
                <p>Nombre Alumno</p>
            </li>
            <li class class="listado-alumnos_elemento">
                <p>Ver Alumno</p>
            </li>
            <li class="listado-alumnos_elemento">
                <p>Borrar Alumno</p>
            </li>
        </ul>
    </section>
</div>
`;

const templateProfesorFormulario = `
<div id="contenido-alumnos" class="contenido-alumnos">
    <section id="crear-alumno" class="crear-alumno">
        <h3>CREAR NUEVO PROFESOR</h3>
        <form id="formulario-profesor" class="formulario-profesor" action="">
            <label for="nombre">Nombre</label>
            <input class="input-crear-alumnos" type="text" name="nombre" id="nombre" placeholder="Nombre" required autocomplete="off">
            <label for="apellidos">Apellidos</label>
            <input class="input-crear-alumnos" type="text" name="apellidos" id="apellidos" placeholder="Apellidos" required autocomplete="off">
            <label for="sexo">Sexo</label>
            <select class="input-crear-alumnos" name="sexo" id="sexo" required>
                <option value="hombre">Hombre</option>
                <option value="mujer" selected>Mujer</option>
                <option value="otros">Otros</option>
                <option value="nodecir">No decirlo</option>
            </select>
            <label for="edad">Edad</label>
            <input class="input-crear-alumnos" type="number" name="edad" id="edad" placeholder="Edad" required autocomplete="off">
            <label for="edad">Años Enseñanza</label>
            <input class="input-crear-alumnos" type="number" name="ensenanza" id="edad" placeholder="Años Enseñanza" required autocomplete="off">
            
            <button class="boton_crear-alumno" type="submit">Enviar</button>
        </form>
    </section>
    <section id="ver-alumnos">
        <ul id="listado-alumnos" class="listado-alumnos">
            <li class="listado-alumnos_elemento">
                <p>Apellidos Profesor</p>
            </li>
            <li class="listado-alumnos_elemento">
                <p>Nombre Profesor</p>
            </li>
            <li class class="listado-alumnos_elemento">
                <p>Ver Profesor</p>
            </li>
            <li class="listado-alumnos_elemento">
                <p>Borrar Profesor</p>
            </li>
        </ul>
    </section>
</div>
`;


const templateCurso = `
<main>
    <h1 id="titulo" class="titulo">CENTRO DE ESTUDIOS</h1>

    <!-- FORMULARIO -->
    <form id="formulario" class="formulario-cursos">
        <label>
            Nombre:
            <input class="input-crear-cursos" type="text" name="nombreCurso" required />
        </label>
        <label>
            Imagen:
            <input class="input-crear-cursos" type="text" name="rutaImagen" required />
        </label>
        <label>
            Horas:
            <input class="input-crear-cursos" type="number" name="cantidadHoras" required />
        </label>
        <button class="boton_crear-curso" type="submit">Nuevo Curso</button>
    </form>

    <!-- GRID de Cursos -->
    <section id="curso" class="cursos">
        <ul id="listado-alumnos" class="listado-alumnos">
            <li class="listado-alumnos_elemento">
                <p>Nombre Curso</p>
            </li>
            <li class="listado-alumnos_elemento">
                <p>Horas</p>
            </li>
            <li class class="listado-alumnos_elemento">
                <p>Ver Curso</p>
            </li>
            <li class="listado-alumnos_elemento">
                <p>Borrar Curso</p>
            </li>
        </ul>
    </section>
</main>

`;

export { textoDashboard, templateAlumnoFormulario, templateProfesorFormulario, templateCurso};