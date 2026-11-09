// =========================================================
// NubeSMR · JavaScript
// Cuatro funciones sencillas: menú móvil, modo oscuro,
// validación del formulario y año automático en el pie.
// =========================================================


// ---------- 1. Menú del móvil ----------
// Al pulsar ☰ añadimos o quitamos la clase "abierto" al menú.
const botonMenu = document.getElementById("botonMenu");
const menu = document.getElementById("menu");

botonMenu.addEventListener("click", function () {
  menu.classList.toggle("abierto");
});

// Al pulsar un enlace del menú, lo cerramos.
const enlaces = document.querySelectorAll(".menu a");
enlaces.forEach(function (enlace) {
  enlace.addEventListener("click", function () {
    menu.classList.remove("abierto");
  });
});


// ---------- 2. Modo oscuro ----------
// Añadimos o quitamos la clase "oscuro" al <body>.
// El CSS cambia los colores según esa clase.
const botonTema = document.getElementById("botonTema");

botonTema.addEventListener("click", function () {
  document.body.classList.toggle("oscuro");

  // Cambiamos el texto del botón según el modo actual
  if (document.body.classList.contains("oscuro")) {
    botonTema.textContent = "Modo claro";
  } else {
    botonTema.textContent = "Modo oscuro";
  }
});


// ---------- 3. Validación del formulario ----------
const formulario = document.getElementById("formulario");
const aviso = document.getElementById("aviso");

formulario.addEventListener("submit", function (evento) {
  // Evitamos que la página se recargue al enviar
  evento.preventDefault();

  const nombre = document.getElementById("nombre");
  const correo = document.getElementById("correo");
  const mensaje = document.getElementById("mensaje");

  // Quitamos los errores de un intento anterior
  [nombre, correo, mensaje].forEach(function (campo) {
    campo.classList.remove("error");
  });

  const errores = [];

  // trim() quita los espacios del principio y del final
  if (nombre.value.trim() === "") {
    errores.push("el nombre");
    nombre.classList.add("error");
  }

  // Comprobación sencilla: el correo debe tener @ y un punto
  if (!correo.value.includes("@") || !correo.value.includes(".")) {
    errores.push("un correo válido");
    correo.classList.add("error");
  }

  if (mensaje.value.trim().length < 10) {
    errores.push("un mensaje de al menos 10 caracteres");
    mensaje.classList.add("error");
  }

  if (errores.length > 0) {
    aviso.textContent = "Falta " + errores.join(", ") + ".";
    aviso.className = "aviso aviso--error";
  } else {
    // No hay servidor: solo mostramos un mensaje y vaciamos el formulario
    aviso.textContent = "¡Gracias, " + nombre.value.trim() + "! Te responderemos pronto.";
    aviso.className = "aviso aviso--ok";
    formulario.reset();
  }
});


// ---------- 4. Año automático en el pie ----------
document.getElementById("anio").textContent = new Date().getFullYear();
