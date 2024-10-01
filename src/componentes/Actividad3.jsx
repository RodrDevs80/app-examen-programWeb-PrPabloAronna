import { useEffect, useState } from "react";
import estudiantes from "../datos/estudiantes";
import promedioCalificaciones from "../utilidades/calcularPromedioPorId";
//import promedioCalificaciones from "../utilidades/calcularPromedioPorId";

export const Actividad3 = () => {
  const [mejorAlumno, setMejorAlumno] = useState({});
  const mejorEstudiante = () => {
    let AlumnoMejorPromedio;
    let mayor = 0;
    for (let i = 0; i < estudiantes.length; i++) {
      if (mayor < Number(promedioCalificaciones(estudiantes[i].idEstudiante))) {
        mayor = Number(promedioCalificaciones(estudiantes[i].idEstudiante));
        AlumnoMejorPromedio = estudiantes[i];
      }
    }
    setMejorAlumno(AlumnoMejorPromedio);
  };
  useEffect(() => {
    mejorEstudiante();
  }, []);
  //console.log(mejorAlumno);
  return (
    <div id="3" className="tarjeta">
      <h3>🛠 Ejercicio 3</h3>
      <h3>
        Escribe una función mejorEstudiante que determine cuál es el estudiante
        con el mejor promedio de calificaciones en todos sus cursos. La función
        deberá retornar el objeto del estudiante con su nombre y su promedio.
      </h3>
      <h2>El mejor alumno es {mejorAlumno.nombre}</h2>
      <h2>Edad: {mejorAlumno.edad}</h2>
      <h2>Promedio {promedioCalificaciones(mejorAlumno.idEstudiante)}</h2>
    </div>
  );
};
