import cursos from "../datos/cursos";
import buscarAlumnosPorId from "../utilidades/buscarAlumnosPorId";

export const Actividad5 = () => {
  const calificacionMasAlta = () => {
    let cursocalificacionMasAlta = {};
    let mayor = 0;
    for (let i = 0; i < cursos.length; i++) {
      if (cursos[i].calificacion > mayor) {
        mayor = cursos[i].calificacion;
        cursocalificacionMasAlta = { ...cursos[i] };
      }
    }
    return cursocalificacionMasAlta;
  };
  //console.log(calificacionMasAlta().nombreCurso);
  return (
    <div id="5" className="tarjeta">
      <h3>🛠 Ejercicio 5</h3>
      <h3>
        Escribe una función calificacionMasAlta que devuelva el nombre del curso
        y el nombre del estudiante que obtuvo la calificación más alta en la
        universidad, indicando también la calificación.
      </h3>
      <div>
        <h2>Curso: {calificacionMasAlta().nombreCurso}</h2>
        <h2>
          Nombre del Estudiante:
          {buscarAlumnosPorId(calificacionMasAlta().idEstudiante)}
        </h2>
        <h2>Calificación: {calificacionMasAlta().calificacion}</h2>
      </div>
    </div>
  );
};
