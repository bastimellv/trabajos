Algoritmo impresora_2_colores
	
	Definir total Como Entero
	Definir cantidad Como Entero
	Definir precio Como Entero
	precio = 20
	precio1=100
	Mientras respuesta<>'3' Hacer
		Escribir '**** Menú ****'
		Escribir '[1] blanco y negro'
		Escribir '[2] color'
		Escribir '[3] salir'
		Escribir 'Seleccione una opción:'
		Leer respuesta
		Si respuesta='3' Entonces
			Escribir '0 fotocopias'
			Escribir 'Presione enter para continuar'
			Esperar Tecla
		sino
		Si respuesta='1' Entonces
			Escribir 'fotocopias $20 por hoja'
			Escribir 'fotocopias arriba de 30 hojas, descuento del 10% al total de pago'
			Escribir 'Ingrese total de fotocopias: '
			Leer num1
			Si num1<>0 Entonces
				Si num1>30 Entonces
					resultado =20*num1
					Escribir 'total= ','$',resultado
					total = resultado*10/100
					valor1 = resultado-total
					Escribir 'descueto del 10%= ','$',valor1
					Escribir 'Presione enter para continuar'
					Esperar Tecla
				SiNo
					resultado <- 20*num1
					Escribir 'total=','$',Mostrar,resultado
					Escribir 'total a pagar= ','$',resultado
					Escribir 'Presione enter para continuar'
					Esperar Tecla
				FinSi
			SiNo
				Escribir '0 fotocopias'
				Escribir 'Presione enter para continuar'
				Esperar Tecla
			FinSi
		sino
			Escribir 'fotocopias $100 por hoja'
			Escribir 'fotocopias arriba de 30 hojas, descuento del 10% al total de pago'
			Escribir 'Ingrese total de fotocopias: '
			Leer num1
			Si num1<>0 Entonces
				Si num1>30 Entonces
					resultado =100*num1
					Escribir 'total= ','$',resultado
					total = resultado*10/100
					valor1 = resultado-total
					Escribir 'descueto del 10%= ','$',valor1
					Escribir 'Presione enter para continuar'
					Esperar Tecla
				SiNo
					resultado <- 100*num1
					Escribir 'total=','$',Mostrar,resultado
					Escribir 'total a pagar= ','$',resultado
					Escribir 'Presione enter para continuar'
					Esperar Tecla
				FinSi
		  FinSi
	  FinSi
  FinSi
	FinMientras
FinAlgoritmo
