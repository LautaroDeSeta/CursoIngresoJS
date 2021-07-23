function mostrar() {
	let precio;
	let estacion;
	let destino;
	estacion = document.getElementById("txtIdEstacion").value;
	destino = document.getElementById("txtIdDestino").value;
	precio = 15000
	switch (estacion) {
		case "Invierno":
			switch (destino) {
				case "Mar del plata":
					alert(`el resultado es ${precio - precio * 0.20}`);
					break;
				case "Bariloche":
					alert(`El precio es ${precio + precio * 0.20}`);
					break;
				case "Cordoba":
				case "Cataratas":
					alert(`ell precio es ${precio - precio * 0.10}`);
					break;
			}
		case "Verano":
			switch (destino) {
				case "Bariloche":
					alert(`el precio es ${precio - precio*0.20}`);
					break;
				case "Cataratas":
				case "Cordoba":
					alert(`el precio es ${precio - precio *0.10}`);
					break;
				case "Mar del plata":
					alert(`El precio es ${precio - precio *0.20}`);
					break;
			}
		case "Otoño":
		case "Primavera":
			switch (destino){
				case "Mar del plata":
				case "Cataratas":
				case "Bariloche":
					alert(`el precio es ${precio - precio * 0.10}`);
					break;
				case "Cordoba":
					alert(`el precio es ${precio}`);
					break;
			
			}				


	}

}//FIN DE LA FUNCIÓN