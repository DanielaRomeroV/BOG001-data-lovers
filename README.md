# Data Lovers Rick and Morty

<img src="src\images\giphy.gif" alt="Funny image">



### DEFINICIÓN DEL PRODUCTO

Nuestro proyecto es una pagina de Rick and Morty que va a facilitar a los nuevos  usuarios y amantes de la serie hacer sus investigaciones sobre cada personaje, poder filtrar por especie, ordenar de la A-Z, tiene un buscador por si quieren hacer una búsqueda de un personaje en especifico, ademas que tiene una sección dedicada especialmente a los datos curiosos para conocer un poco mas de la serie.




**************************************************************************
### OBJETIVOS DEL PROYECTO

Crear un sitio web agradable, que se adapte a todas las pantallas (Responsive) y fácil de entender enfocado a nuevos fans de la serie Rick y Morty que les gustaría saber más de sus personajes favoritos.


*******************************************************************************************

### HISTORIAS DE USUARIO

* [x] Historia 1: Como amante de la serie Rick y Morty, quiero tener un buscador de personajes para conocerlos a profundidad Crear prototipos para obtener feedback e iterar
* [x]  Historia 2: Yo como fan de rick y morty quiero encontrar datos curiosos sobre cada personaje de la serie para saber más de ellos.
* [x]  Historia 3: Como amante de Rick y Morty, me gustaría poder filtrar los personajes alfabéticamente y por especies para distinguirlos mejor.
* [x] Historia 4: Yo como amante de Rick y Morty, me gustaría que las tarjetas se amplien y me muestren la información de cada personaje cuando yo pongo el mouse encima para no tener que abrir una ventana nueva.
* [x] Historia 5: Yo como amante de Rick y Morty me gustaría ver los personajes cada vez que bajo el scroll para que no los muestre todos al tiempo.



************************************************************************************
### PROTOTIPOS DE ALTA Y BAJA FIDELIDAD

*Prototipos baja fidelidad primera versión*

 <img alt="Pb1" src="src\images\Prototipobajafidelidad1.PNG" width=250 /> 
 <img alt="Pb2" src="src\images\Prototipobajafidelidad2.PNG" width=250 /> 

****************************************
*Segunda versión*

 <img alt="Pb3" src="src\images\Prototipobajafidelidad3.PNG" width=250 /> 
 <img alt="Pb4" src="src\images\Prototipobajafidelidad4.PNG" width=210 /> 


*Prototipos alta fidelidad versión desktop*

 <img alt="Pa1" src="src\images\Prototipoaltafidelidad1.PNG" width=250 /> 
 <img alt="Pa2" src="src\images\Prototipoaltafidelidad2.PNG" width=250 /> 

 ************************************
 *Versión móvil*

 <img alt="Pa3" src="src\images\Prototipoaltafidelidad3.PNG" width=250 /> 
 <img alt="Pa4" src="src\images\Prototipoaltafidelidad4.PNG" width=215 /> 
 



*******************************************************************************************
### TESTS DE USABILIDAD

*Primer acercamiento a nuestra pagina*

 Cuando el  usuario decide buscar información de los personajes en internet desde su   celular, percibe que hay una pagina en donde puede encontrar mucha información acerca de su serie favorita. Se da cuenta que existe una pagina que contiene todo, personajes, datos curiosos , puede filtrar por especies, estados de vida, ver cuantas mutaciones tiene cada personaje, para que así pueda continuar viendo la serie entendiendo mucho mejor cada episodio.


*Como el usuario interactua  con la pagina*

1.  El usuario entra a Rick and Morty.
2.  La primer sección con la que interactua es la de el menú desplegable donde hay una sección de About Us que  lo lleva a la pagina de Adult Swim, donde encuentra mas información sobre los episodios de Rick and Morty.
3.  Luego el usuario nota que en la sección del banner hay unas imágenes que cambian dependiendo del dispositivo donde este, aparece una especie de portal donde los personajes simulan viajar entre dispositivos, lo que al usuario le parece muy acertado porque hace referencia a la serie.
4.  Lo siguiente es que el usuario nota la sección de Fun Facts y ve que hay varios, entonces se desplaza por los iconos que están abajo para cambiar de dato curioso.
5.  Por ultimo, en la primera pantalla, esta el botón Characters y le da click porque quiere saber mas sobre sus personajes favoritos.
6. En la parte del footer, el usuario tiene a disposición los iconos de redes sociales con sus respectivos links para navegar y llenarse de mas conocimiento de la serie.

*Problemas encontrados*
1. Nos dimos cuenta que en la pagina principal en la parte del Fun facts y el boton de Characters, estaban mal distribuidos porque el botón estaba antes de los datos curiosos, y el usuario no sabia si primero ir a ver los personajes o los datos curiosos, así que decidimos dejar el botón abajo de los datos curiosos para que se pueda tener una experiencia mas completa.
2.  Los usuarios también notaron que la sección de redes sociales, los iconos estaban muy pequeños y no les permitía dar bien el click para mirar las redes sociales, entonces aumentamos el tamaño de estos.
3. En las tarjetas de los personajes, había mucha información concentrada, lo cual al usuario le parecía un poco canson, entonces le implementamos las Flip cards para que así en la parte de adelante se viera solo la foto y el nombre del personaje, y si el usuario quiere saber mas, solo al poner el mouse encima le va a mostrar la otra información.
4.  Le implementamos un menú fijo en la parte de arriba y una flecha al final  para los usuarios que entren a nuestra pagina desde un dispositivo móvil  no tengan que devolverse hasta arriba para poder seguir navegando por la pagina.
 
*Visualización de la data*

1.  El usuario hace click en el botón Characters.
2.  El usuario visualiza las tarjetas con la información de los personajes, y cuando coloca el cursor encima de la tarjeta, esta se voltea y le despliega mas información.
4.  La historia termina cuando el usuario decide filtrar u ordenar.

*Filtrar data*

1.  El usuario selecciona entre las diferentes opciones de filtrado una de las categorías.
2.  La página muestra los personajes que cumplan con dicha condición.
3.  El usuario decide agregar un segundo filtro a los personajes mostrados, por la clasificación de especies.
4.  La historia termina cuando el usuario obtiene los personajes deseados.

*Ordenar data*

1.  El usuario selecciona entre las diferentes opciones de ordenado.
2.  La página muestra los personajes que cumplan con dicha condición.
3. La historia termina cuando el usuario ha visto los resultados de sus filtros y le da click en el logo para regresar a la pagina principal.
************************************************************

*¿Cómo ejecutar este proyecto?*

Solo necesitas un navegador y dar click en el siguiente link:

*****************
* [x] Usa VanillaJS.
* [x] No hace uso de `this`.
* [ ] Pasa linter (`npm run pretest`)
* [ ] Pasa tests (`npm test`)
* [ ] Pruebas unitarias cubren un mínimo del 70% de statements, functions y
  lines y branches.
* [x] Incluye _Definición del producto_ clara e informativa en `README.md`.
* [x] Incluye historias de usuario en `README.md`.
* [x] Incluye _sketch_ de la solución (prototipo de baja fidelidad) en
  `README.md`.
* [x] Incluye _Diseño de la Interfaz de Usuario_ (prototipo de alta fidelidad)
  en `README.md`.
* [ ] Incluye link a Zeplin o Figma en `README.md`.
* [x] Incluye el listado de problemas que detectaste a través de tests de
  usabilidad en el `README.md`.
* [ ] UI: Muestra lista y/o tabla con datos y/o indicadores.
* [x] UI: Permite ordenar data por uno o más campos (asc y desc).
* [x] UI: Permite filtrar data en base a una condición.
* [x] UI: Es _responsive_.
 

 ****************************************************************************************
 ## OBJETIVOS DE APRENDIZAJE

El objetivo principal de este proyecto es que aprendas a diseñar y construir una
interfaz web donde se pueda visualizar y manipular data, entendiendo lo que el
usuario necesita.

### HTML y CSS

* [x] [Uso de HTML semántico.](https://developer.mozilla.org/en-US/docs/Glossary/Semantics#Semantics_in_HTML)
* [x] Uso de selectores de CSS.
* [x] Construir tu aplicación respetando el diseño realizado (maquetación).
* [x] [Uso de flexbox en CSS.](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)

### DOM y Web APIs

* [x] Uso de selectores del DOM.
* [x] Manejo de eventos del DOM.
* [ ] [Manipulación dinámica del DOM.](https://developer.mozilla.org/es/docs/Referencia_DOM_de_Gecko/Introducci%C3%B3n)
(appendChild | createTextNode|createElement etc.)
* [ ] [Manipulación dinámica del DOM.](https://developer.mozilla.org/es/docs/Referencia_DOM_de_Gecko/Introducci%C3%B3n)
( innerHTML | textContent | etc.)


### JavaScript

* [x] Uso de condicionales (if-else | switch | pendiente operador ternario)
* [x] Uso de bucles (for | for..in | for..of | while)
* [x] Uso de funciones (parámetros | argumentos | valor de retorno) 
* [ ] Manipular arrays (filter | map | sort | reduce) 
* [x] Manipular objects (key | value)
* [x] Uso ES modules ([`import`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/import)
| [`export`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/export))
* [ ] Diferenciar entre expression y statements.
* [x] Diferenciar entre tipos de datos atómicos y estructurados.

### Testing

* [ ] [Testeo unitario.](https://jestjs.io/docs/es-ES/getting-started)

### Estructura del código y guía de estilo

* [x] Organizar y dividir el código en módulos (Modularización)
* [x] Uso de identificadores descriptivos (Nomenclatura | Semántica)
* [x] Uso de linter (ESLINT)

### Git y GitHub

* [x] Uso de comandos de git (add | commit | pull | status | push)
* [x] Manejo de repositorios de GitHub (clone | fork | gh-pages)
* [x] Colaboración en Github (branches | pull requests | |tags)

### UX

* [x] Diseñar la aplicación pensando y entendiendo al usuario.
* [x] Crear prototipos para obtener feedback e iterar.
* [x] Aplicar los principios de diseño visual (contraste, alineación, jerarquía)
* [x] Planear y ejecutar tests de usabilidad.