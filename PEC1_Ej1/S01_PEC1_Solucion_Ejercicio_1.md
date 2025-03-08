1.

- ¿Cuál es la ventaja del uso de etiquetas semánticas? Nombra y explica al menos 3 de estas ventajas.

# Ventajas del uso de etiquetas semánticas

**Mejora de accesibilidad**
Lectores de pantalla y navegadores interpretan mejor el contenido de la página cuando se utilizan estas etiquetas. Ayuda a navegar por el sitio a aquellas personas con alguna discapacidad.

**Optimización para los motores de búsqueda**
Una web se posicionará mejor (SEO) cuando se haga un buen uso de estas etiquetas, ya que los navegadores entienden la estructura de la web, posicionandose mejor en los resultados de búsqueda de los usuarios.

**Legibilidad y mantenimiento**
Un código estructurado únicamente por <div>'s y <span>'s será más difícil de comprender su estructura que uno con etiquetas semánticas. El código debe ser entendido por el propio que lo escribe como por sus colaboradores.

- Cita al menos 3 APIs HTML5 y explica brevemente su funcionalidad.

**Gelocation API**
Recupera informaicón geográfica para que por ejemplo Google Maps encuentre la ubicación del usuario y la posicione en un mapa.

**Canvas**
Permite crear gráficos 2D animados

**HTMLMediaElement**
Herramientas para utilizar elementos multimedia como audios o videos


- Cita qué opción ofrece CSS3 para conseguir que se apliquen diferentes estilos CSS sobre el mismo elemento en su visualización en diferentes dispositivos (diferentes tamaños de pantalla).

**Media Queries**
Permiten aplicar reglas CSS basadas en las caracteristicas del dispositivo que se visualiza la aplicación o web. Según el ancho de pantalla, orientación o resolución se pueden aplicar unos estilos u otros.

- Cita al menos 4 de las características principales de TypeScript (importante superset de JavaScript que trataremos en el siguiente capítulo).

**Tipado estático**
Definir el tipo de dato de las variables ayudará a detectar errores.

**Interfaces y tipos personalizados**
Definir estructuras de datos más claras y reutilizables.

**Soporte para la Programación Orientada a Objetos (POO)**
La inclusión de clases, interfaces, herencia y modificadores de acceso como public, private.

**Compatibilidad con JavaScript**
EL código en JS es válido en TypeScript.


2.

- Cita al menos 2 de estos preprocesadores.

**SASS** y **LESS**

- Cita al menos 4 ventajas que ofrecen estos preprocesadores.
**Herencia**
Reutilizar código evita la repetición de código.

**Anidamiento**
Facilita la estructura del código reflejando la jerarquía de los elementos HTML.

**Variable**
Permiten asignar colores, tamaños o fuentes por ejemplo a variables reutilizables a lo largo del proyecto.

**Mixin**
Permiten reutilizar bloques de código con parámetros personalizables .


- Explica brevemente en qué consisten los sourcemaps.
Son archivos escrtios de origen en Typescript, SASS o algun otro minificado que estblecen una conexión con el código que finalmente ejecuta el navegador (JavaScript o CSS).

- Explica qué es un transpilador.
Es una herramienta de traducción de un lenguaje de programación a otro con un nivel de abstracción similar o más bajo sin que la lógica del código cambie.
Typescript a JavaScript es un ejemplo, ya que Typescript añade el tipado estático entre otras características. Pero una vez llevado a producción el código debería ser transpilado a JavaScript para que los navegadores lo entiendan.


3.

- Cita al menos dos sistemas de control de versiones y dos herramientas de gestión de módulos.

**Sistemas de control de versiones**
Git
CVS

**Herramientas de gestión de módulos**
npm
yarn

- Cita y explica al menos 3 comandos de Git.

- **`git branch`**: Se utiliza para gestionar las distintas ramas dentro del repositorio de Git y entre sus funcionalidades se encuentra ver las ramas existentes, crear nuevas ramas o eliminarlas.

- **`git commit`**: Se utiliza para guardar los cambios realizados en el repositorio.

- **`git status`**: Se utiliza para ver el estado actual del repositorio. Muestra qué archivos han sido modificados, cuáles están pendientes de ser confirmados (es decir, aquellos que han sido añadidos al área de preparación con git add y están listos para ser confirmados con git commit) y si hay archivos eliminados. También muestra información sobre el estado de la rama actual en relación con el repositorio remoto.


- Cita y explica brevemente las características más definitorias de WebPack.
  
### Características de Webpack
- **Bundling**: El empaquetado de webpack recoge todos los archivos de una app y los empaqueta en uno o más archivos de salida, optimizando el rendimento al reducir las peticiones HTTP.
- **Loaders**: Los cargadores permiten procesar archivos que no son JavaScript de manera predeterminada. Se utilizan para convertir los archivos Typescript a JavaScript por ejemplo.
- **Plugins**: Ayudan a la personalización en el proceso de contrucción, realizando tareas de optimización del código, minificación y la insersión de variables de entorno.
- **Code Splitting**: Webpack permite la carga por fragmentos de código en los momentos adecuados.

- **Hot Module Replacement**: En fase de desarrollo Webpack permite reemplazar las partes de código que están siendo editadas sin recargar la página completamente mejorando la experiencia del desarrollador al ver los cambios en tiempo real.

Para más información sobre Webpack, puedes consultar su [documentación oficial](https://webpack.js.org/).
