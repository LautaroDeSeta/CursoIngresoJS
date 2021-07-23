function mostrar() {

	let destino
	destino = document.getElementById("txtIdDestino").value;
	switch (destino) {
		case "Mar del plata":
		case "Cataratas":
			alert("hace calor");
			break;
		case "Ushuaia":
		case "Bariloche":
			alert("hace frío");
			break;
	}

	}//FIN DE LA FUNCIÓN