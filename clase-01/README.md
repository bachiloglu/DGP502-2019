# Seminario Gráfica Computacional I → Clase 1

### Martes 12 de marzo → Herramientas y contenidos básicos

#### 1. Github

Es una plataforma de desarrollo colaborativo que utiliza el sistema de control de versiones [Git](https://git-scm.com/). Con el trabajo en repositorios, se puede llevar registro de cambios en archivos compartidos, para coordinar el trabajo entre varias personas.

Es necesario que cada estudiante tenga [su cuenta personal en GitHub](https://github.com/join). 

#### 2. Editores de código fuente

Hay muchos editores de código fuente en el mercado. En nuestro caso, nos limitaremos a las siguientes opciones:  

- [Atom.io](https://atom.io/) - Editor de texto multiplataforma (Windows, Linux, and Mac), libre y open-source, desarrollado por los creadores de GitHub. 

- [Sublime Text](https://www.sublimetext.com/) - Editor de texto privativo, cuya versión de evaluación es plenamente funcional y no tiene fecha de caducidad. 

- [Brakets](http://brackets.io/) - Editor de texto open-source para desarrolladores FrontEnd que trabajen con HTML, CSS y JavaScript.

El listado está organizado según preferencia; prefiera el primero, si no puede conseguir, vaya por el segundo; en caso que el primero y segundo fallen, vaya por el tercero.

#### 3. Coding (descripción v/s programación)

Cuando trabajamos con código fuente podemos describir o programar. HTML y CSS no son lenguajes de programación. [JavaScript](https://developer.mozilla.org/es/docs/Web/JavaScript), [PHP](http://php.net/), [Phyton](https://www.python.org/) y [Ruby](https://www.ruby-lang.org/es/) sí lo son. Con estos últimos se pueden escribir programas informáticos.

#### 4. Bootstrap

[Bootstrap](https://getbootstrap.com/) es un kit de herramientas de código abierto para la implementación de diseño "[responsive](https://es.wikipedia.org/wiki/Dise%C3%B1o_web_adaptable)" y "[mobile-first](https://en.ryte.com/wiki/Mobile_First)" de sitios y aplicaciones web. 

Con [Bootstrap](https://getbootstrap.com/) puedes implementar tanto prototipos rápidos como productos acabados, esto mediante el uso de los lenguajes habituales de Front-End para Web: **Elementos de HTML5 relacionados con reglas de CSS3 predefinidas con [Sass](https://sass-lang.com/) ([Less](http://lesscss.org/) en versiones anteriores a la 4), además de Javascript simplificado por la biblioteca [jQuery](https://jquery.com/)**.

Hay distintas maneras para comenzar a trabajar con Boostrap. Un grupo de opciones parten en su [descarga](https://getbootstrap.com/docs/4.0/getting-started/download/), pero una opción mucho más rápida es Bootstrap[CDN](https://es.wikipedia.org/wiki/Red_de_entrega_de_contenidos). Para usar esta última opción, el documento HTML debe verse, inicialmente, de la siguiente manera: 

```
<!doctype html>
<html>
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <!-- CSS de BootstrapCDN  -->
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">
    <title>Hola mundo!</title>
  </head>
  <body>
    <h1>Hola mundo!</h1>
    <!-- JS de BootstrapCDN -->    
    <!-- primero jQuery, luego Popper.js, después Bootstrap JS -->
    <script src="https://code.jquery.com/jquery-3.2.1.slim.min.js" integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN" crossorigin="anonymous"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js" integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q" crossorigin="anonymous"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js" integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl" crossorigin="anonymous"></script>
  </body>
</html>
```

Luego podemos comenzar a utilizar la grilla de 12 columnas (`col-…`) dentro de la cada fila (`row`) dentro de un contenedor (`container` o `container-fluid`):

```
<div class="container">
	<div class="row">
		<div class="col-12">Ancho completo</div>
		<div class="col-6">Mitad de 12</div>
		<div class="col-6">Mitad de 12</div>		
	</div>
</div>
```

Entre las recién referidas, la clase más interesante es la de columnas (`class="col-…"`), en tanto ofrece varias opciones que  permiten indicar "cuántas columnas se toman" según el ancho del contenedor en la pantalla donde se visualiza el documento HTML. Las opciones se explican en [Grid System](https://getbootstrap.com/docs/4.0/layout/grid/#grid-options).

- - - - - - 

#### Referencias:

Bootstrap:

- [Bootstrap](https://getbootstrap.com/): The most popular HTML, CSS, and JS library in the world

- [Bootstrap Made](https://bootstrapmade.com/): Free Bootstrap Templates

- [Curso Gratuito de Bootstrap](https://codigofacilito.com/cursos/bootstrap): Codigo Facilito

- [StartBootstrap](https://startbootstrap.com/): Bootstrap themes, templates, and more 

GitHub

- [¿Cómo se utiliza Github pages?](https://developer.mozilla.org/es/docs/Learn/Using_Github_pages)

- [Daniel Shiffman explica en YouTube como configurar una GitHub Page](https://youtu.be/bFVtrlyH-kc)

- - - - - - - 

###### [SIGUIENTE CLASE →](https://github.com/profesorfaco/DGP502-2019/tree/gh-pages/clase-02)
