import { useState } from "react";
import promedioCalificaciones from "../utilidades/calcularPromedioPorId";

export const Actividad2 = () => {
  const [id, setId] = useState("");
  const [promedio, setPromedio] = useState(null);

  const getPromedioEstudiante = (id) => {
    setPromedio(promedioCalificaciones(id));
  };

  return (
    <div id="2" className="tarjeta">
      <h3>🛠 Ejercicio 2</h3>
      <h3>
        Escribe una función promedioCalificaciones que reciba el idEstudiante y
        retorne el promedio de las calificaciones de todos los cursos en los que
        esté inscrito el estudiante. Si no tiene cursos inscritos, la función
        debe retornar null.
      </h3>
      <input
        type="number"
        value={id}
        placeholder="Ingrese id del alumno"
        onChange={(e) => setId(e.target.value)}
      />
      {promedio !== null ? (
        <h2>{promedio}</h2>
      ) : (
        <h2>No hay ningún alumno con ese id</h2>
      )}
      <button onClick={() => getPromedioEstudiante(id)}>Promedio por id</button>
    </div>
  );
};
