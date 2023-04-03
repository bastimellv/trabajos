Algoritmo sin_titulo
	Definir total2,opt Como Entero
	Definir total1 Como Entero
	Definir total Como Entero
	Definir name Como Caracter
	Definir interior Como Entero
	Definir exterior Como Entero
	Definir suma Como Entero
	Definir cantidad1 Como Entero
	Definir cantidad2 Como Entero
	Definir porcentaje Como Entero
	Definir totalcant Como Entero
	
	exterior= 5000
	interior= 8000
	suma= exterior+interior
	contador=0
	
	Escribir "************************"
	Escribir "----Lavado de autos----"
	Escribir "************************"
	
	
		
	 
	
	Mientras opt <> 6 Hacer
		
		
	
		Escribir "[1] Nombre del cliente"
		Escribir "[2] Lavado interior"
		Escribir "[3] Lavado exterior"
		Escribir "[4] boleta del cliente"
		Escribir "[5] Ver total de ventas"
		Escribir "[6] Salir"
		Leer opt 
		Si opt = 1 Entonces
			Escribir "Ingrese su nombre"
			Leer name
			escribir "Nombre del cliente ",nombre 
		FinSi
		
		
		Si opt = 2 Entonces
			Escribir "cantidad de autos: "
			Leer cantidad1
			total1=cantidad1*interior
			Mostrar total1
			Escribir "Aprete enter para continuar"
			Esperar Tecla
		FinSi
		
		si opt = 3 Entonces
			Escribir "cantidad de autos: "
			Leer cantidad2
			total2=cantidad2*exterior
			Mostrar total2
			Escribir "Aprete enter para continuar"
			Esperar Tecla
		FinSi
		
		si opt = 4 Entonces
			
		
			Escribir "Gracias ", nombre, " por preferir nuestros servicios."
			total=total2+total1
			
			Escribir "ingrese un porcentaje de descuento( descuento entre 10 y 30)?"
			Leer porcentaje
			si porcentaje > 9 y porcentaje < 31 Entonces
				total = total - (porcentaje * total / 100)
				Escribir "*******************************************************"
				Escribir "lavado de autos los eren"
				Escribir "Gracias ", nombre, "por preferir nuestros servicios."
				Escribir "Lavado Exterior :" total2
				Escribir "Lavado Interior :" total1
				Escribir "total de descuento : ", porcentaje "%"
				Escribir "Monto a con descuento pagar :" total
			SiNo
				escribir "Lavado Exterior :" ,total2
				Escribir "Lavado Interior :", total1
				Escribir "Monto a pagar :", total
				
				Escribir "*******************************************************"
				
				porcentaje=0
				total1=0
				total2=0
			FinSi
			contador = contador + 1
			Esperar Tecla
			
		FinSi
		
		Si opt = 5 Entonces
			
			
			
			Escribir "El total de lavado de ventas es : ", contador
			
		FinSi
		
		
	FinMientras
FinAlgoritmo
