Algoritmo sin_titulo
	Definir name,salir Como Caracter
	Definir resultado Como Entero
	Exterior=8000
	Interior=5000
	contaventas=1
	
	
		Escribir "***** lavado de autos *****"
		Repetir
			
		
			Escribir '**** MENU DE SERVICIO *****'
			Escribir '[1] Ingrese nombre'
			Escribir '[2] Ver cantidad de ventas realizadas'
			Escribir '[3] Salir'
			Escribir 'Seleccione una opción:'
			Leer respuesta
			
			
			
			Si respuesta='1' Entonces
				Escribir 'Ingrese nombre del cliente:'
				Leer name
				Escribir 'Ingrese servicio de :',name
				Escribir '[1] Limpieza Exterior'
				Escribir '[2] Limpieza Interior'
				Escribir '[3] Total'
				Escribir '[4] Salir'
				Leer opcion1
				
				si opcion1="1" Entonces
					Escribir "limpieza exterior agregada " ":$ ",8000
					Escribir 'desea agregar otro servicio  de :',name
					Escribir '[1] Limpieza Interior'
					Escribir '[2] Total'
					leer opcion2

					si opcion2="1" Entonces
						Escribir '[1] Limpieza Interior agregada'
					FinSi
					
					si opcion2="2" Entonces
						Escribir 'Total a pagar :',resultado
					FinSi
				FinSi
				si opcion1="2" Entonces
					Escribir "limpieza Interior agregada " ":$ ",5000
					Escribir 'desea agregar otro servicio  de :',name
					Escribir '[1] Limpieza exterior'
					Escribir '[2] Total'
					
				FinSi
				

			SiNo
				
			si respuesta = "2" Entonces
				Escribir "cantidad de ventas realizadas"
				contaventas=resultado+contaventas+1
				Mostrar contaventas
				
			FinSi
		FinSi
		
			Si respuesta='3' Entonces
				Escribir '¿desea realizar otra venta?s/n'
				Leer salir
			FinSi

		Hasta Que salir ="n"
	
FinAlgoritmo
