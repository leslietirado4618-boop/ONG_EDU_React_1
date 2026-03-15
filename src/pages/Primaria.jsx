import { Link } from "react-router-dom";

export default function Primaria() {
  return (
    <>
      <h1>Listado de materias.</h1>
      <ul>
        <li><Link to="/espanol_primaria">Español</Link></li>
        <li><Link to="/matematicas_primaria">Matemáticas</Link></li>
        <li><Link to="/ciencias_naturales">Ciencias Naturales</Link></li>
      </ul>
    </>
  );
}
