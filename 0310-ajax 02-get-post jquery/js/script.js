
$(document).ready(function() {

	$("#login").submit(function(){

		//armo el paquete para enviar al servidor
        
        /*var datosFormulario = {
			// traigo info del dom y guardo en la variables
			usuario:$("#usuario").val(),
			contra:$("#contra").val()
        }*/  //  de la misma forma ==>
		var datosFormulario = $(this).serialize();  // para simplificar, si el form tiene 50 campos
												    // lo serializa y ahorra tipear codigo

		$.get("login.php", datosFormulario, procesarDatos);

		return false; //para que no recargue
	});	

	//datos deviueltos 
	function procesarDatos(datos_devueltos){
		if(datos_devueltos=="autorizado"){
			$("#ce").html("<p> usuario correcto </p>");
		}else{
			$("#ce").html("<p> usuario incorrecto </p>");
		}
	}
}); 