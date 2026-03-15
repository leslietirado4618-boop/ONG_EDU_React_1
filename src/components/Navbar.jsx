import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav>
      <ul className="menu">

        <li><Link to="/inicio">Inicio</Link></li>

        <li>
          <Link to="/primaria">Primaria</Link>
          <ul className="submenu">
            <li><Link to="/matematicas_primaria">Matemáticas</Link></li>
            <li><Link to="/espanol_primaria">Español</Link></li>
            <li><Link to="/ciencias_naturales">Ciencias Naturales</Link></li>
          </ul>
        </li>

        <li>
          <Link to="/secundaria">Secundaria</Link>
          <ul className="submenu">
            <li><Link to="/matematicas_secundaria">Matemáticas</Link></li>
            <li><Link to="/espanol_secundaria">Español</Link></li>
            <li><Link to="/historia_secundaria">Historia</Link></li>
          </ul>
        </li>

        <li>
          <Link to="/preparatoria">Preparatoria</Link>
          <ul className="submenu">
            <li><Link to="/ingles_preparatoria">Inglés</Link></li>
            <li><Link to="/espanol_preparatoria">Español</Link></li>
            <li><Link to="/fisica_preparatoria">Física</Link></li>
          </ul>
        </li>

        <li>
          <Link to="/grado_superior">Grado Superior</Link>
          <ul className="submenu">
            <li><Link to="/ingles_nivel_superior">Inglés</Link></li>
            <li><Link to="/fisica_grado_superior">Física</Link></li>
            <li><Link to="/quimica_grado_superior">Química</Link></li>
          </ul>
        </li>

      </ul>
    </nav>
  );
}
