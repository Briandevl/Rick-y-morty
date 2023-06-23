const router = require("express").Router();
const filtroPorEdad = require("../controllers/02-controller");

/* ⚠️ No modificar nada arriba de esta línea ⚠️

  8️⃣ ***** EJERCICIO 8 ***** - GET /personajes 8️⃣:

  🟢 Integrar la función filtroPorEdad que desarrollaste previamente (Ejercicio 2) para obtener los personajes que coincidan con la edad propuesta por el cliente.
  🟢 Responder con los resultados encontrados.
  🟢 Si hay un error, responder un objeto con una propiedad "error": <el mensaje recibido en el objeto error>.

    📢 PUNTOS A TENER EN CUENTA 📢
  1) Recibirás el argumento necesario para ejecutar esa función filtroPorEdad mediante la propiedad "body" de *req*.
  2) ¡Revisa en los test el status que deben tener tus respuestas!
*/

router.get("/personajes", (req, res) => {
  // Tu código aquí
   const { edad } = req.body;

  try {
    const personajesFiltrados = filtroPorEdad(edad);
    res.status(200).json(personajesFiltrados);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

//⚠️ No modificar nada debajo de esta línea ⚠️
module.exports = router;
