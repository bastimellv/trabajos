opcion=""
cestrellan=0
champs=0
meganium=0
dorkie=0

fueVendida = False
descuento=0
totalVentas = 0
while opcion!="5":
    print("------Heladeria Fa´s Levi Live:----------")
    print("1)Cestrellan = $500")
    print("2)Champs     = $4.000")
    print("3)Meganium   = $2.500")
    print("4)Donkie     = $2.000")
    print("5)Salir")
    opcion=input("Seleccione Opción:")
    if opcion not in("1", "2", "3", "4", "5"):
       print("opcion no es válida")
       input("Presione enter para continuar")
    elif opcion=="1":
        
        
        edad=int(input("menor de edad o adulto mayor descuento del %10!!\nIngrese su edad:"))
        if edad<18 or edad>=60:
            descuento=500*90/100
            monto = int(input("Ingrese cantidad de dinero:"))
            total = monto - descuento
            print("El precio a pagar es de", "$450",)
            totalVentas += 450
            
        else:
            print("El precio a pagar es de $ 500")
            totalVentas += 500
            input("¿Desea volver al menú? Presione enter:")
           
            

        if total == 0:
            print("Vuelto: $0. Gracias por la compra")
            fueVendida = True
        elif total > 0:
            print("Vuelto: ",int( total), ". Gracias por su compra")
            fueVendida = True
        else:
            print("Falta dinero. Vuelva a intentar")
            fueVendida = False
        if fueVendida:
            if opcion == "1":
                
                cestrellan += 1
        
    elif opcion=="2":
        monto = int(input("Ingrese cantidad de dinero:"))
        total = monto - 4000
        if total == 0:
            print("Vuelto: $0. Gracias por la compra")
            fueVendida = True
        elif total > 0:
            print("Vuelto: ", total, ". Gracias por su compra")
            fueVendida = True
        else:
            print("Falta dinero. Vuelva a intentar")
            fueVendida = False
        if fueVendida:
            if opcion == "2":
                totalVentas += 4000
                champs += 1
    elif opcion=="3":
        monto = int(input("Ingrese cantidad de dinero:"))
        total = monto - 2500
        if total == 0:
            print("Vuelto: $0. Gracias por la compra")
            fueVendida = True
        elif total > 0:
            print("Vuelto: ", total, ". Gracias por su compra")
            fueVendida = True
        else:
            print("Falta dinero. Vuelva a intentar")
            fueVendida = False
        if fueVendida:
            if opcion == "3":
                totalVentas += 2500
                meganium += 1
    elif opcion=="4":
        monto = int(input("Ingrese cantidad de dinero:"))
        total = monto - 2000
        if total == 0:
            print("Vuelto: $0. Gracias por la compra")
            fueVendida = True
        elif total > 0:
            print("Vuelto: ", total, ". Gracias por su compra")
            fueVendida = True
        else:
            print("Falta dinero. Vuelva a intentar")
            fueVendida = False
        if fueVendida:
            if opcion == "4":
                totalVentas += 2000
                meganium += 1
    elif opcion=="5":
        print("Aplicación cerrada")
        print("Heladeria Fa´s Levi Live:")
        print("Reportes de productos  vendidos")
        print("Cestrellan : ", cestrellan)
        print("Champs     : ", champs)
        print("Meganium   : ", meganium)
        print("dorkie     : ", dorkie)
        print("Total      : $",totalVentas)

