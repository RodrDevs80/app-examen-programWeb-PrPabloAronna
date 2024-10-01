export const Consignas = () => {
  return (
    <div className="tarjeta">
      <h2>Consignas</h2>
      <p style={{ fontSize: "1.3rem" }}>
        Primer examen Se tiene una base de datos que registra la información
        sobre estudiantes y los cursos en los que están inscritos en una
        universidad. La información está almacenada en dos vectores de objetos
        JSON. 1. El vector estudiantes contiene los siguientes campos: ◦
        idEstudiante (number): un identificador único para cada estudiante. ◦
        nombre (string): el nombre del estudiante. ◦ edad (number): la edad del
        estudiante. El vector cursos contiene la siguiente información: •
        idCurso (number): un identificador único para cada curso. • nombreCurso
        (string): el nombre del curso. • idEstudiante (number): el identificador
        del estudiante que está inscrito en ese curso. • calificación (number):
        la calificación obtenida por el estudiante en ese curso (del 0 al 100).
        RESOLVER
      </p>
      <ul style={{ fontSize: "1.3rem" }}>
        <li>
          <a href="#1">🔗 Ejercicio 1</a>
        </li>
        <li>
          <a href="#2">🔗 Ejercicio 2</a>
        </li>
        <li>
          <a href="#3">🔗 Ejercicio 3</a>
        </li>
        <li>
          <a href="#4">🔗 Ejercicio 4</a>
        </li>
        <li>
          <a href="#5">🔗 Ejercicio 5</a>
        </li>
      </ul>
    </div>
  );
};
