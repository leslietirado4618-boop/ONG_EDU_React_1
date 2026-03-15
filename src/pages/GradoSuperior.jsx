import { Link } from "react-router-dom";

export default function GradoSuperior() {
  return (
    <>
      <h1>Listado de materias.</h1>
      <ul>
        <li><Link to="/ingles_nivel_superior">Inglés</Link></li>
        <li><Link to="/fisica_grado_superior">Física</Link></li>
        <li><Link to="/quimica_grado_superior">Química</Link></li>
      </ul>
    </>
  );
}
