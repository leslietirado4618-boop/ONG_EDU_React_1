export default function Respuestasformularioayuda() {
  return (
    <div dangerouslySetInnerHTML={ {__html: `<!DOCTYPE html>
<html lang="es">
<head>
  <title>Educación Para Todos ONG</title>
  <style>
    body {
      background-image: url("img/escuela.jpg");
      background-repeat: no-repeat;
      background-size: contain;
      background-position: center center;
      background-attachment: scroll;
      margin: 0;
      height: 100vh;
      display: flex;
      justify-content: center;
      align-items: center;
      font-family: Arial, sans-serif;
    }

    .mensaje {
      background-color: rgba(255, 255, 255, 0.7); /* blanco semitransparente */
      padding: 20px 40px;
      border-radius: 10px;
      box-shadow: 0 0 10px rgba(0,0,0,0.3);
      max-width: 90%;
      text-align: center;
      color: #363636;
      font-size: 1.5rem;
    }
  </style>
</head>
<body>
  <div class="mensaje">
    El registro se ha completado exitosamente, uno de nuestros asesores se pondra en contacto por correo electrónico. ¡Gracias!
  </div>
</body>
</html>
`} } />
  );
}