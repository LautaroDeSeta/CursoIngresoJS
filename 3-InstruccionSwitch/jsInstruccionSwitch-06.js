function mostrar() {
	/* Al ingresar una hora, informar:
si está entre las 7 y las 11 : "Es de mañana.".
si está entre las 12 y las 19 : "Es de tarde.".
si está entre las 20 y las 24 o entre las 0 y las 6 : "Es de noche.".
si NO está entre las 0 y las 24 : "la hora no existe.". */

	let horadeldia
	horadeldia = parseInt(document.getElementById("txtIdHora").value);
	if ((horadeldia <= 6 && horadeldia>=0)|| (horadeldia >= 20 && horadeldia <= 24)) {
		alert("Es de noche");
	}
	else if (horadeldia >= 7 && horadeldia <=11) {
			alert("Es de mañana");
		}
		else if (horadeldia >= 12 && horadeldia <= 19) {
			alert("Es de tarde");
		}
		else {
			alert("la hora no existe");
	}
		}




//FIN DE LA FUNCIÓN