import { Link } from "react-router-dom";

export default function Secundaria() {
  return (
    <>
      <h1>Listado de materias.</h1>
      <ul>
        <li><Link to="/espanol_secundaria">Español</Link></li>
        <li><Link to="/matematicas_secundaria">Matemáticas</Link></li>
        <li><Link to="/historia_secundaria">Historia</Link></li>
      </ul>
    </>
  );
}
