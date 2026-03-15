export default function PalabrasAgudasGravesEsdrujulas() {
  return (
    <>
      <h1>Palabras agudas, graves y esdrújulas.</h1>

      <section className="color-fondo">
        <p>En español, las palabras se clasifican en agudas, graves (o llanas), esdrújulas y sobreesdrújulas según el lugar que ocupe la sílaba tónica, que es aquella se pronuncia con más intensidad.</p>
        <p>Ejemplos de palabras agudas, graves y esdrújulas:</p>
        <ol>
          <li>Agudas: ratón, cartel, eligió, audaz, jugarás.</li>
          <li>Graves: diccionario, fútbol, marciano, mártir, raqueta.</li>
          <li>Esdrújulas: ángulo, péndulo, pétalo, muérdago, mímica.</li>
        </ol>
        <p>La sílaba sobre la que cae la acentuación recibe el nombre de sílaba tónica, mientras que el resto son sílabas átonas. De acuerdo con su acentuación, las palabras pueden ser:</p>
        <p><strong>Palabras agudas.</strong> Son aquellas cuya última sílaba es tónica. Por ejemplo: mamá, postal, canción.</p>
        <p><strong>Palabras graves o llanas.</strong> Son aquellas cuya penúltima sílaba es tónica. Por ejemplo: mármol, galleta, pelota.</p>
        <p><strong>Palabras esdrújulas.</strong> Son aquellas cuya antepenúltima sílaba es tónica. Por ejemplo: brújula, página, teléfono.</p>
      </section>

      <div className="color-fondo">
        <p>También existen las palabras sobreesdrújulas, que son aquellas en las que alguna de las sílabas anteriores a la antepenúltima es tónica, pero se trata de los casos menos frecuentes en español, y siempre llevan tilde. Por ejemplo: dígamelo, explíqueselo, últimamente.</p>
        <p>Te recomendamos el siguiente video para reforzar tus conocimientos:</p>
      </div>

      <div className="centrar-video">
        <iframe width="700" height="400" src="https://www.youtube.com/embed/dfzlBAMVrBI?si=Ubmj8bntAyOw2x3M" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
      </div>

      <div className="color-fondo">
        <h3>¿Cuándo llevan tilde las palabras agudas, graves y esdrújulas?</h3>
        <p>Las reglas de acentuación forman parte de la ortografía de una lengua e indican dónde y cuándo debe colocarse la tilde o acento ortográfico. Es muy importante conocer estas reglas, dado que pueden distinguir significados: no es lo mismo decir depósito (sustantivo), deposito (verbo en primera persona del presente) o depositó (verbo en tercera persona del pretérito perfecto).</p>
        <p><strong>Palabras agudas</strong></p>
        <ol>
          <li>Llevan tilde las palabras agudas terminadas en n, s o vocal. Por ejemplo: canción, amarás, café.</li>
          <li>No llevan tilde las palabras agudas terminadas en n o s cuando son precedidas por otra consonante. Por ejemplo: robots, tictacs, zigzags.</li>
        </ol>
        <p><strong>Palabras graves o llanas</strong></p>
        <ol>
          <li>Llevan tilde las palabras graves que no terminen en n, s o vocal. Por ejemplo: árbol, flúor, hábil.</li>
          <li>Llevan tilde las palabras graves que terminan en s precedida de otra consonante. Por ejemplo: bíceps, cómics, fórceps.</li>
        </ol>
        <p><strong>Palabras esdrújulas</strong></p>
        <ol>
          <li>Siempre llevan tilde en la sílaba tónica correspondiente.</li>
          <li>Por ejemplo: imágenes, música, película.</li>
        </ol>
      </div>

      <div className="color-fondo">
        <p><strong>Palabras con diptongo o triptongo:</strong> Cuando la sílaba tónica contiene un diptongo o un triptongo, rigen las mismas reglas de acentuación y la tilde se coloca sobre la vocal abierta (estudié, huésped, murciélago). En el caso de que un diptongo esté compuesto por dos vocales cerradas, se coloca sobre la última vocal (interviú, cuídate, lingüística).</p>
      </div>

      <div className="color-fondo">
        <h3>Excepciones a las reglas de acentuación</h3>
        <p><strong>Palabras con hiato.</strong> Cuando la palabra presenta hiato de vocal abierta y vocal cerrada tónica, es obligatorio colocar tilde en esta última, sin importar la letra final de la palabra. Por ejemplo: maíz, caída, ataúd.</p>
        <p><strong>Palabras con tilde diacrítica.</strong> Cuando se utilizan los pronombres interrogativos y exclamativos es obligatorio colocar tilde para distinguirlos de sus respectivos pronombres relativos. Por ejemplo: cuánto, dónde, quiénes, cómo, cuándo.</p>
        <p><strong>Adverbios terminados en -mente.</strong> Cuando el adjetivo del que deriva el adverbio lleva tilde, esta se conserva en el mismo lugar. Por ejemplo: comúnmente, legalmente, higiénicamente.</p>
      </div>

      <div className="quiz-container">
        <h2>Quiz: Clasificación de Palabras</h2>
        <div className="question">
          <p>1️⃣ La palabra &ldquo;canción&rdquo; es:</p>
          <label><input type="radio" name="q1" value="a" /> Grave</label><br />
          <label><input type="radio" name="q1" value="b" /> Aguda</label><br />
          <label><input type="radio" name="q1" value="c" /> Esdrújula</label>
        </div>
        <div className="question">
          <p>2️⃣ La palabra &ldquo;árbol&rdquo; es:</p>
          <label><input type="radio" name="q2" value="a" /> Aguda</label><br />
          <label><input type="radio" name="q2" value="b" /> Grave</label><br />
          <label><input type="radio" name="q2" value="c" /> Esdrújula</label>
        </div>
        <div className="question">
          <p>3️⃣ La palabra &ldquo;música&rdquo; es:</p>
          <label><input type="radio" name="q3" value="a" /> Grave</label><br />
          <label><input type="radio" name="q3" value="b" /> Aguda</label><br />
          <label><input type="radio" name="q3" value="c" /> Esdrújula</label>
        </div>
        <button id="submitBtn" onClick={() => {
          const correctas = {q1: "b", q2: "b", q3: "c"};
          let allCorrect = true;
          for (let q in correctas) {
            const sel = document.querySelector("input[name=\"" + q + "\"]:checked");
            const opts = document.querySelectorAll("input[name=\"" + q + "\"]");
            opts.forEach(o => o.parentElement.classList.remove("correct","incorrect"));
            if (sel) {
              sel.parentElement.classList.add(sel.value === correctas[q] ? "correct" : "incorrect");
              if (sel.value !== correctas[q]) allCorrect = false;
            } else { allCorrect = false; }
          }
          if (!allCorrect) document.getElementById("resetBtn").style.display = "inline-block";
        }}>Enviar respuestas</button>
        <button id="resetBtn" style={{display:"none"}} onClick={() => window.location.reload()}>Reiniciar Quiz</button>
      </div>
    </>
  );
}
