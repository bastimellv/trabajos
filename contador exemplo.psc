Algoritmo sin_titulo
	cotador=0
	acumulador=0
	costo=0
	continuar=0
	Mientras continuar=0 Hacer
		Escribir "Ingrese el costo del articulo "
		Leer costo
		contador = contador + 1
		acumulador = acumulador + costo
		Escribir "Desea continuar? Si=0, No=1"
		Leer continuar
		
	FinMientras
	Escribir "La cantidad de articulos ingresados fue ",contador
	Escribir "El costo total de los articulos ingresados fue ",acumulador
	
FinAlgoritmo
