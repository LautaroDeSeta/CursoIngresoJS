function mostrar() {
	let mes;
	mes = document.getElementById("txtIdMes").value;

	switch (mes) {
		case "Febrero":
		alert("este mes no tiene más de 29 días");
		break;
		default:
			alert("este mes no tiene 29 días");
		break;
	}

	}
//FIN DE LA FUNCIÓN