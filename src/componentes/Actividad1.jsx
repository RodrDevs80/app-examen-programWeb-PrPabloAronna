import { useState } from "react";
import cursos from "../datos/cursos";

export const Actividad1 = () => {
  const [id, setId] = useState("");
  const [cursosPorIdDeAlumno, setCursosPorIdDeAlumno] = useState([]);
  const cursosPorEstudiante = (id) => {
    const resultado = [];
    cursos.filter((curso) =>
      curso.idEstudiante === Number(id)
        ? resultado.push(curso.nombreCurso)
        : null
    );
    setCursosPorIdDeAlumno(resultado);
  };
  const getCursosPorEstudiante = (id) => {
    console.log(cursosPorEstudiante(id));
  };
  return (
    <div id="1" className="tarjeta">
      <h3>🛠 Ejercicio 1</h3>
      <h3>
        Escribe una función cursosPorEstudiante que reciba el idEstudiante y
        retorne un array con los nombres de los cursos en los que está inscrito
        ese estudiante. Si el estudiante no tiene cursos inscritos, la función
        deberá retornar un array vacío.
      </h3>
      <input
        type="number"
        value={id}
        placeholder="Ingrese id del alumno"
        onChange={(e) => setId(e.target.value)}
      />
      <button onClick={() => getCursosPorEstudiante(id)}>
        Buscar Materias por Alumno
      </button>
      <div>
        {cursosPorIdDeAlumno.length === 0 ? (
          <h2>No se encontró ningún alumno con ese Id</h2>
        ) : (
          cursosPorIdDeAlumno.map((curso, index) => (
            <div key={index}>
              <h2>Alumno id: {id}</h2>
              <ul>
                <li>{curso}</li>
              </ul>
            </div>
          ))
        )}
      </div>
    </div>
  );
};
