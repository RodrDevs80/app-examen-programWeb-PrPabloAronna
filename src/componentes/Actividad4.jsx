import { useState } from "react";
import cursos from "../datos/cursos";
import buscarAlumnosPorId from "../utilidades/buscarAlumnosPorId";

export const Actividad4 = () => {
  const [curso, setCurso] = useState("");
  const [alumnos, setAlumnos] = useState([]);
  const estudiantesPorCurso = (nombreCurso) => {
    const resultado = [];
    const resultado2 = [];
    cursos.filter((curso) =>
      curso.nombreCurso
        .toLocaleUpperCase()
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "") ===
      nombreCurso
        .toLocaleUpperCase()
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        ? resultado.push(curso.idEstudiante)
        : null
    );
    if (resultado.length === 0) setAlumnos(resultado);
    else
      for (let i = 0; i < resultado.length; i++) {
        resultado2.push(buscarAlumnosPorId(resultado[i]));
      }
    setAlumnos(resultado2);
  };
  //console.log(alumnos);
  //console.log(estudiantesPorCurso("programación"));
  //console.log(estudiantesPorCurso("Programacion"));
  return (
    <div id="4" className="tarjeta">
      <h3>🛠 Ejercicio 4</h3>
      <h3>
        Escribe una función estudiantesPorCurso que reciba el nombre de un curso
        y retorne un array con los nombres de los estudiantes que están
        inscritos en ese curso. Si no hay estudiantes inscritos en ese curso, la
        función deberá retornar un array vacío.
      </h3>
      <input
        value={curso}
        type="text"
        onChange={(e) => setCurso(e.target.value)}
      />
      <h2>{curso}</h2>
      <button onClick={() => estudiantesPorCurso(curso)}>
        Buscar Alumnos por Curso
      </button>
      {alumnos.length === 0 ? (
        <h2>No hay alumnos en ese curso</h2>
      ) : (
        alumnos.map((alumno, index) => (
          <ul key={index}>
            <li>{alumno}</li>
          </ul>
        ))
      )}
    </div>
  );
};
