
$(document).ready(function() {

	$("#login").submit(function(){

		var datosFormulario = $(this).serialize();  
		
		$.getJSON("login2.php", datosFormulario, procesarDatos);

		return false; //para que no recargue
	});	

	//datos deviueltos 
	function procesarDatos(datos_devueltos){

		var informacion = "<p>Nombre: " + datos_devueltos.Nombre + "</p>";
		informacion += "<p>Apellido: " + datos_devueltos.Apellido + "</p>";
		informacion += "<p>Edad: " + datos_devueltos.Edad + "</p>";

		$("#contenidos_externos").html(informacion);
	}
}); 