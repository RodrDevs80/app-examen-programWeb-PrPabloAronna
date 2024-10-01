import estudiantes from "../datos/estudiantes"

const buscarAlumnosPorId = (id) => {
    const nombresDelosEstuadiantes = [];
    estudiantes.filter(estudiante => estudiante.idEstudiante === id ? nombresDelosEstuadiantes.push(estudiante.nombre) : null);
    return nombresDelosEstuadiantes;
}

export default buscarAlumnosPorId;