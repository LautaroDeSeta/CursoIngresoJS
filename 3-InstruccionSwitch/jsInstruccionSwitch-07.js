function mostrar() {
	/*Al selecionar un destino , indicar el punto cardinal de nuestro pais en donde se encuentra Norte, Sur, Este u Oeste
*/
	let destino
	destino = document.getElementById("txtIdDestino").value;
	switch (destino) {
		case "Mar del plata":
			alert("este");
			break;
		case "Ushuaia":
			alert("sur");
			break;
		case "Bariloche":
			alert("oeste");
			break;
		case "Cataratas":
			alert("oeste");
			break;

	}
}//FIN DE LA FUNCIÓN