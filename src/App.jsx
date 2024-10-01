import "./App.css";
import { Actividad1 } from "./componentes/Actividad1";
import { Actividad2 } from "./componentes/Actividad2";
import { Actividad3 } from "./componentes/Actividad3";
import { Actividad4 } from "./componentes/Actividad4";
import { Actividad5 } from "./componentes/Actividad5";
import { Consignas } from "./componentes/Consignas";
import { Presentancion } from "./componentes/Presentancion";
import { Separador } from "./componentes/Separador";

function App() {
  return (
    <>
      <Presentancion />
      <Separador />
      <Consignas />
      <Separador />
      <Actividad1 />
      <Separador />
      <Actividad2 />
      <Separador />
      <Actividad3 />
      <Separador />
      <Actividad4 />
      <Separador />
      <Actividad5 />
    </>
  );
}

export default App;
