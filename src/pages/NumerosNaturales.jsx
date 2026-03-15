export default function NumerosNaturales() {
  return (
    <>
      <h1>Números naturales.</h1>

      <section className="color-fondo">
        <h2>¿Qué son números naturales?</h2>
        <p>Los números naturales son los números que en la historia del hombre primero sirvieron para contar los objetos, no solo para su contabilización sino también para ordenarlos. Estos números se inician a partir del número 1. No hay una cantidad total o final de números naturales, son infinitos.</p>
        <p>Por otro lado, se dice que los números naturales siempre tienen un número sucesor. Y los números naturales no discriminan entre números pares e impares, los comprenden a todos ellos. No admiten fracciones ni tampoco números negativos. Se distinguen de los números enteros, ya que los enteros también comprenden a los números negativos. En cuanto a la expresión escrita de los números naturales, estos se representan con la letra N, en mayúscula.</p>
        <p>Los números naturales además son la base primordial sobre la cual se fundamentan todas operaciones y funciones matemáticas, la suma, restas, multiplicaciones y divisiones. También a las funciones trigonométricas y las ecuaciones. En definitiva son los elementos básicos sin los cuales la matemática no podría darse.</p>
      </section>

      <figure className="centrar-imagen">
        <img src="/img/numeros_naturales.jpg" alt="Numeros naturales imagen" style={{width: "800px"}} />
      </figure>

      <div className="color-fondo">
        <p><strong>El Máximo común divisor.</strong> Se trata del número natural mayor que tiene la capacidad matemática de dividir a cada uno de los números dados. Para encontrar este número es necesario, primero descomponer el número en números primos, elegir solo a factores comunes de menor exponente y el cálculo del producto de los factores.</p>
        <p><strong>El Mínimo común múltiplo.</strong> Es el número natural menor múltiplo de cada uno de los números dados en una distribución particular. Sus pasos para encontrarlo son el hecho de descomponer el número en números primos, la elección de factores primos de mayor exponente y luego calcular el producto de dichos factores.</p>
        <p>Principalmente se distinguen dos utilizaciones fundamentales: en primer lugar para describir la posición que ocupa un elemento dentro de una secuencia ordenada, y para especificar el tamaño de un conjunto finito. En segundo lugar, el otro uso de gran importancia es la construcción matemática de los números enteros.</p>
        <p>El orden de los números naturales en una operación determinada no altera el resultado, esta es la denominada &ldquo;propiedad conmutativa&rdquo; de los números naturales.</p>
      </div>
    </>
  );
}
