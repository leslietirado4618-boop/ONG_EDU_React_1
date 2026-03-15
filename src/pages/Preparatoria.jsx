import { Link } from "react-router-dom";

export default function Preparatoria() {
  return (
    <>
      <h1>Listado de materias.</h1>
      <ul>
        <li><Link to="/ingles_preparatoria">Inglés</Link></li>
        <li><Link to="/espanol_preparatoria">Español</Link></li>
        <li><Link to="/fisica_preparatoria">Física</Link></li>
      </ul>
    </>
  );
}
