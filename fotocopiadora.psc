Algoritmo fotocopiadora
	Definir num1,num2 Como Entero
	Definir resultado como entero
	Mientras respuesta <> "2" Hacer 
		Escribir "**** Menú ****"
		Escribir "[1] fotocopiar"
		Escribir "[2] Salir"
		Escribir "Seleccione una opción:"
		Leer respuesta
		si respuesta = "1" Entonces
			Escribir "fotocopias $20 por hoja"
			Escribir "fotocopias arriba de 30 hojas, descuento del 10% al total de pago"
			Escribir "Ingrese total de fotocopias: "
			Leer num1
			Si num1<>0 Entonces
				Si num1>30 Entonces
					resultado=20*num1 
					Escribir "total= " "$",resultado
					total=resultado*10/(100)
					total=resultado-num1
					Escribir "descueto del 10%= " "$",total
					Escribir "Presione enter para continuar"
					Esperar Tecla
				SiNo
					resultado=20*num1 
					Escribir "total=" "$", Mostrar resultado
					Escribir "total a pagar= " "$", resultado
					Escribir "Presione enter para continuar"
					Esperar Tecla
				Fin Si
			SiNo
				Escribir "0 fotocopias"
				Escribir "Presione enter para continuar"
				Esperar Tecla
			Fin Si
		FinSi
	FinMientras
FinAlgoritmo
