# Seminario Gráfica Computacional I → Clase 3

### Martes 2 de abril → jQuery (primera parte)

jQuery es una [biblioteca](https://es.wikipedia.org/wiki/Biblioteca_(informática)) de JS que simplifica:

- la manipulación del DOM; 

- el manejo de eventos;

- el desarrollo de animaciones; y 

- el uso de [AJAX](https://www.codementor.io/sheena/ajax-tutorial-web-development-du107rzaq) (Asynchronous JavaScript And XML; una tecnología que permite a una página web actualizarse de forma dinámica sin que tenga que cargarse completamente).

jQuery se puede incluir o vincular a una página web entre etiquetas `<script></script>`. Y funcionará sí y sólo sí ya ha sido vinculada la biblioteca correspondiente: 

```
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
<script>
  //Aquí puedes usar JS simplificado por jQuery
</script>
```

Luego, para utilizar los atajos que ofrece esta biblioteca hay que recordar que, en una oración, el sujeto es quien realiza la acción o de quien se dice algo. Mientras que el predicado describe la acción que realiza el sujeto o lo que se dice del sujeto. Habiendo recordado eso, será fácil comprender qué puede resultar de esto: 

```$("sujeto").predicado();```

Así, por ejemplo, podemos escribir `$(".test").hide()` para indicar que queremos esconder (*hide*) a todos los elementos con clase `test`. ¿Pero bajo qué condiciones esconderlos? Esa condición aún no la definimos, y podríamos hacerlo de la siguiente manera:
 
```
$("button").click(function(){
  $(".test").hide(1000);
});
```

Allí tenemos dos "oraciones". La primera tiene como sujeto a cualquier botón (*button*) y la segunda tiene como sujeto a cualquier elemento de clase *test*. El predicado de la primera es "hacer click" (*click*), mientras el predicado de la segunda es "esconder" (*hide*). Si nos fijamos en los paréntesis `({` y `})`, podemos notar que la segunda oración depende de la primera, con lo que se realizará la acción de la segunda una vez se realice la acción de la primera.

A propósito de paréntesis, una recomendación: Escribir las "oraciones" de jQuery en un contexto que asegure que el documento esté completamente cargado

```
$(document).ready(function(){

  // aquí dentro irían todas las "oraciones" de jQuery que necesitemos.

});
```

Si juntamos todo lo expuesto, tenemos lo siguiente: 

```
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
<script>
$(document).ready(function(){
  $("button").click(function(){
    $(".test").hide(1000);
  });
});
</script>
```

Pero `hide` no es el único "predicado" disponible en lo que respecta a efectos de animación en jQuery. Puedes encontrar otros en http://api.jquery.com/category/effects/

Además de estos efectos de animación, existen distintas posibilidades de manipulación: https://api.jquery.com/category/manipulation/

También existen varias maneras de hacer selección de un "sujeto": https://api.jquery.com/category/selectors/

Para seguir explorando jQuery se puede seguir revisando la página, y guardar entre sus favoritos un ayudamemoria: [jQuery CheatSheet](https://htmlcheatsheet.com/jquery/)

#### jQuery y JSON

Para conectar con [la clase recién pasada](https://github.com/profesorfaco/DGP502-2019/tree/gh-pages/clase-02), recordemos que vimos cómo tomar un JSON en línea y "parsear" sus datos en una variable de JavaScript. En el siguiente ejemplo la variable se llama `a`:

```
var request = new XMLHttpRequest();
request.open('GET', 'https://api.myjson.com/bins/rexzi', true);
request.onload = function () {
  var a = JSON.parse(this.response);
  console.log(a);
}
request.send();	
```

Se pude hacer lo mismo con jQuery, pero es mucho más sencillo:

```
$.getJSON('https://api.myjson.com/bins/rexzi', function(a) {
        console.log(a);
});
```

La única precaución sobre la que corresponde insistir es que si el origen de tus datos comienza con `http://`, sin `s`, tendrás conflictos de seguridad que impedirán el "parseo" correspondiente. Una vía de solución es el uso de `https://crossorigin.me/`. Por ejemplo:

Si los datos están disponibles en `http://api.open-notify.org/astros.json` puedes escribir `https://crossorigin.me/http://api.open-notify.org/astros.json`

Puedes encontrar detalles más técnicos respecto de este problema en [Control de acceso HTTP (CORS) de Mozilla Developers](https://developer.mozilla.org/es/docs/Web/HTTP/Access_control_CORS)

- - - - - - -

#### Referencias:

jQuery:

- [Conceptos básicos de jQuery](https://www.arkaitzgarro.com/jquery/capitulo-3.html#conceptos-basicos-de-jquery)

- [Curso gratis de jQuery](https://codigofacilito.com/cursos/jquery)

- [How jQuery Works](https://learn.jquery.com/about-jquery/how-jquery-works/)

- [Quakit - jQuery Tutorial](https://www.quackit.com/jquery/tutorial/what_is_jquery.cfm)

- [w3schools - jQuery Tutorial](https://www.w3schools.com/jquery/default.asp)

- - - - - - - 

###### [SIGUIENTE CLASE →](https://github.com/profesorfaco/DGP502-2019/tree/gh-pages/clase-04)
