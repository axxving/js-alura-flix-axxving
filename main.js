// Declara un array vacío llamado 'catalogo' que almacenará objetos representando películas.
const catalogo = [];

// Define una función llamada 'mostrarCatalogo' que muestra el catálogo de películas en la página web.
function mostrarCatalogo() {
  // Escribe el encabezado "AluraFlix" en la página.
  document.write("<h1>AluraFlix</h1>");
  
  // Itera sobre cada película en el catálogo.
  for (let i = 0; i < catalogo.length; i++) {
    // Escribe un bloque HTML para mostrar la imagen y el nombre de la película.
    document.write("<div>");
    document.write("<img src='" + catalogo[i].enlace + "' alt='" + catalogo[i].nombre + "'>");
    document.write("<p>" + catalogo[i].nombre + "</p>");
    document.write("</div>");
  }
}

// Define una función llamada 'agregarPelicula' que permite al usuario agregar una nueva película al catálogo.
function agregarPelicula() {
  // Solicita al usuario que ingrese el nombre de la película.
  let nombre = prompt("Ingrese el nombre de la película:");
  // Solicita al usuario que ingrese el enlace de la imagen de la película.
  let enlace = prompt("Ingrese el enlace de la imagen (asegúrese de que termine con .jpg):");

  // Validación: asegura que el enlace de la imagen termine con ".jpg".
  while (!enlace.endsWith(".jpg")) {
    enlace = prompt("El enlace debe terminar con .jpg. Ingrese nuevamente:");
  }
  
  // Agrega un objeto que representa la película al catálogo.
  catalogo.push({ nombre: nombre, enlace: enlace });
}

// Agrega películas al catálogo hasta que el usuario decida parar.
let deseaAgregarMas = true;
while (deseaAgregarMas) {
  agregarPelicula(); // Llama a la función 'agregarPelicula'.
  // Solicita al usuario si desea agregar otra película, y actualiza 'deseaAgregarMas' en consecuencia.
  deseaAgregarMas = confirm("¿Desea agregar otra película?");
}

// Muestra el catálogo de películas.
mostrarCatalogo(); // Llama a la función 'mostrarCatalogo'.
