function mostrar()
{
	//Genero el número RANDOM entre 1 y 10 
let nota = Math.floor(Math.random() * 10 + 1);
if (nota >=9)
{ alert("EXCELENTE");
}
else {
	if (nota>=4)
	{ alert("APROBÓ");
	}
else {
	alert("Vamos, la próxima se puede!");
}
}
}//FIN DE LA FUNCIÓN