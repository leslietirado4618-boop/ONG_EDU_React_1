import { useNavigate } from "react-router-dom";


export default function Inicio() {
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    navigate("/respuestasformularioayuda");
  }

  return (
    <>
      <h1>Bienvenidos</h1>

      <figure className="centrar-imagen">
        <img src="/img/bienvenida.jpg" alt="Bienvenidos" style={{ width: "450px" }} />
      </figure>

      <h1 className="color-fondo">Formulario de sugerencias.</h1>

      <div className="color-fondo">
        <ul>
          <li>
            <p><label htmlFor="nombre">Nombre completo: <input type="text" id="nombre" name="nombre" /></label></p>
          </li>
          <li>
            <p><label htmlFor="correo">Correo Electrónico: <input type="email" id="correo" name="correo" /></label></p>
          </li>
          <li>
            <p>Ingrese información relevante a su solicitud.</p>
            <p><label htmlFor="mensaje">Mensaje: <textarea id="mensaje"></textarea></label></p>
          </li>
          <li>
            <button onClick={handleSubmit} style={{ backgroundColor: "rgb(54, 54, 54)", color: "white" }}>
              Enviar
            </button>
          </li>
        </ul>
      </div>
    </>
  );
}
