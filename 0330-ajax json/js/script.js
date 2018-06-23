
$(document).ready(function() {

	$("#login").submit(function(){

		var datosFormulario = $(this).serialize();  
		
		$.getJSON("login2.php", datosFormulario, procesarDatos);

		return false; //para que no recargue
	});	

	//datos deviueltos 
	function procesarDatos(datos_devueltos){

		$("#contenidos_externos").html(datos_devueltos.Edad);
	}
}); 