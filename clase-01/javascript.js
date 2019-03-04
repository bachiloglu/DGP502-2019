//jQuery para cuando se cargue el DOM
 $(document).ready(function(){
  // Mostrar el contenidom, quitando la clase que lo esconde
  $('body').fadeIn(2000).removeClass('hidden');
  var d = new Date();
  // Ver lo asignado a la variable d en la consola de javascript
  console.log(d);
  // Crear dos variables, una con días y otra con meses
  var days = ["domingo", "lunes", "martes", "miércoles", "jueves", "viernes", "sábado"];
  var months = ["enero", "febrero", "marzo", "abril", "mayo", "junio", "julio", "agosto", "septiembre", "octubre", "noviembre","diciembre"];
  // Obtener el día de la semana con un número entre 0 y 6
  var the_day = d.getDay();
  // Obtener el mes del año con un número entre 0 y 11
  var the_month = d.getMonth();
  // Crear una variable con el día que corresponda a la posición según número entre 0 y 6
  var today = days[the_day];
  // Crear una variable con el mes que corresponda a la posición según número entre 0 y 11
  var month = months[the_month]

  var h = d.getHours();
  var saludo;

  if ((h >= 6) && (h < 12)) { 
    saludo = "un buen día"
  } else if ((h >= 12) && (h < 20)) {
    saludo = "una buena tarde"
  } else { 
    saludo = "una buena noche"
  }

  // Crear un contenido que será incluido entre etiquetas small
  $("#dinamico").html('Hoy es ' + today + ' ' + d.getDate() + ' de ' + month + '. Que tengas ' + saludo + '.');
  // Crear función que se ejecute con el envío de lo que se ingrese al formulario
  $('form').submit(function(){
     var datos = $(this).serializeArray();
     console.log(datos);
     $("#user").html(datos[0]["value"] + " " + datos[1]["value"]);
     return false;
   });
 });