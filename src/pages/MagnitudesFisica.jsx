export default function MagnitudesFisica() {
  return (
    <>
      <section className="color-fondo">
        <h1>Magnitudes en Física</h1>
        <h2>Concepto de magnitud.</h2>
        <p>El concepto de magnitud es muy importante en la Física y la Química ya que es la base para formular las leyes que definen como se comporta nuestro mundo. Aunque suene algo complicado, el concepto es sencillo.</p>
        <p>Las <strong>magnitudes</strong> no son mas que la <strong>característica</strong> de un objeto, sustancia o fenómeno físico que se puede definir de forma numérica.</p>
        <p>Por ejemplo, un balón de fútbol puede tener una masa de 1 <strong>kilogramo</strong>, una temperatura de 23º <strong>centígrados</strong>, una <strong>velocidad</strong> de 5 kilometros/hora... a cada una de esas propiedades a las que podemos asignarle un valor numérico se le llama <strong>magnitud</strong>.</p>
        <h3>Magnitudes fundamentales y derivadas.</h3>
        <p>Al hablar de magnitudes podemos distinguir principalmente 2 tipos, las magnitudes fundamentales y las magnitudes derivadas.</p>
        <h3>Magnitudes fundamentales</h3>
        <p>Las magnitudes fundamentales, elegidas por convención, son aquellas magnitudes que no se pueden definir en función de ninguna otra magnitud.</p>
      </section>

      <figure className="centrar-imagen">
        <img src="/img/magnitudes.png" alt="Magnitudes Fisicas" style={{width: "800px"}} />
      </figure>

      <div className="color-fondo">
        <h3>Magnitudes derivadas</h3>
        <p>Por otro lado, las magnitudes derivadas están definidas por medio de una o más magnitudes fundamentales.</p>
      </div>

      <figure className="centrar-imagen">
        <img src="/img/magnitudes.webp" alt="Magnitudes Derivadas" style={{width: "800px"}} />
      </figure>

      <div className="color-fondo">
        <h3>Medida de las magnitudes</h3>
        <p>Para medir magnitudes se usan instrumentos calibrados: un cronómetro, un termómetro, una báscula, etc. Medir una magnitud es comparar una cantidad de esa magnitud con otra cantidad de la misma magnitud que se usa como patrón.</p>
      </div>
    </>
  );
}
