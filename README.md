# CIFRADO SEGURO
Cifrado Seguro es un programa que te permite codificar y descodificar mensajes bajo el método [cifrado César](https://marvelapp.com/5803140). Corresponde a una técnica de codificación por sustitución, donde cada letra de un texto es reemplazada por otra letra acorde a un número determinado de posiciones (desplazamiento) en el alfabeto.
Por ejemplo, si usamos un desplazamiento (_offset_) de 3 posiciones:
- La letra A se cifra como D.
- La palabra CASA se cifra como FDVD.
- Alfabeto sin cifrar: A B C D E F G H I J K L M N O P Q R S T U V W X Y Z
- Alfabeto cifrado: D E F G H I J K L M N O P Q R S T U V W X Y Z A B C

##Consideraciones técnicas
Este proyecto está desarrollado con:
- EMS6 JavaScriptpuro [JSVanilla](https://medium.com/laboratoria-developers/vanillajs-vs-jquery-31e623bbd46e).
-CSS3
-HTML5
- Se realizaron [pruebas unitarias]() para validar la funcionalidad de codificación y decodificación. Estos test se implementaron con [Mocha](https://mochajs.org/) y assertion library de [Chai](https://www.chaijs.com/).
- Como gestor de proyecto de utilizó NPM (Node Package Manager).
## Pruebas
Las pruebas automatizadas para este sistema requieren de una instalación simple a través del comando npm install. Los tests verifican que regrese una letra acorde a la posición ingresada en el offset. Analiza que la función  cifrar retorne "HIJKLMNOPQRSTUVWXYZABCDEFG" para "ABCDEFGHIJKLMNOPQRSTUVWXYZ" con offset 33; y que la función decifrar retorne retornar "ABCDEFGHIJKLMNOPQRSTUVWXYZ" para "HIJKLMNOPQRSTUVWXYZABCDEFG" con offset 33. No cifra caracteres especiales y espacios (" !@" debería retornar  " !@"', ).
## Autores
-Ameyalli Brito
## Expresiones de gratitud
Agradezco el apoyo de mi squad "Guacacoders".  
# UX-UI

## Usuario

### Cliente modelo:

- Giselle Brito tiene mas de 6 cuentas con la misma contraseña, ella ha intentado usar diferentes contraseñas en cadas cuenta pero hoy en dia maneja mas de 12 cuentas diferentes, asi que el recordar 12 contraseñas para cada cuenta le resulta imposible, y se enfrenta a un caso de vulnerabilidad al usar la misma para  6 de sus cuentas, entre ellas las mas importantes como la de su correo, la de su aplicacion del banco, y las contraseñas de sus aplicaciones de compras donde tiene registradas sus tarjetas  de credito y debito.

- Ahora con (_CIFRADO SEGURO_) podra gestionar todas sus cuentas, y no tendra preocupaciones al usar

**Investigacion:** Realizando pequeñas encuentas acerca de que personas tenian una misma contraseña para mas de tres cuentas, me di cuenta que mi sector del mercado son los adultos-jovenes de entre 18-30 años, los que generalmente comparten la misma contraseña con sus cuentas como su email y sus redes sociales.

#UX

El usuario puede ingresar su contraseña de siempre o generar una nueva, le recomendamos que su contraseña tenga MAYÚSCULAS, MINÚSCULAS y NUMEROS.


**Boceto**
Al saber que la pagina tendria pocos objetos que manipular se decidio centrar todo el contenido, y asi hacerlo mas amigable para el usuario.

El concepto inicial de la pagina cambio junto con el proceso.
No sin antes recordar

![esquema](./src/esquema.jpg)

- Se penso hacer todo con bordes redondeados para hacerlo mas amigable para el usuario.

- Tiene un diseño minimalista.

- En base a las encuentas pareciera mas una app que una pagina web.


 Se tomaron en cuenta esas consideraciones y el diseño final , ofrece en primera plano al abrir la pagina  el titulo y la caja donde se cifra asi como un pequeño resumen de como funciona.

![pagina1](./src/pagina1.png)

Cuando haces scroll nos muestra  los botones de cifrar y descrifrar asi como instrucciones adicionales de usar mayusculas y minusculas asi como numeros.

![pagina2](./src/pagina2.png)

Despues hay un breve explicacion de como usarlo adecuadamente, asi como informacion adicional sobre el cifrado cesar y la importancia de usar el cifrado cesar

![pagina13](./src/pagina3.png)


Al final le hace saber al usuario que se peude descargar la app en la play store y el footer de nuestras redes sociales

![pagina4](./src/pagina4.png)

