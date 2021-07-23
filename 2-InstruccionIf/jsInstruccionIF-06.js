function mostrar()
{
	//tomo la edad  
	let edad;
	edad = parseInt(document.getElementById("txtIdEdad").value);
	if (edad >=18){
	
		alert("Esa persona es un adulto")
}	
		else 
		{
			if (edad < 13)
		
			{alert("es un niño")
			
		}
		else
		 {alert ("es un adolescente")
		
		}
	}



}//FIN DE LA FUNCIÓN