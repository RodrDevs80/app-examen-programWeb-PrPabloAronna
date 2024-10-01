import cursos from "../datos/cursos";


const promedioCalificaciones = (id) => {
    const resultado = cursos.filter(
        (curso) => curso.idEstudiante === Number(id)
    );
    if (resultado.length === 0) return null;
    else
        return (
            resultado.reduce((total, curso) => total + curso.calificacion, 0) /
            resultado.length
        ).toFixed(2);
};
export default promedioCalificaciones;