opcion=""
cestrellan=0
champs=0
meganium=0
dorkie=0

h1 =500
h2 =4000
h3 =2500
h4 =2000



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
            descuento1=h1*90/100
            print("El precio a pagar es de $",int(descuento1),)
            totalVentas += descuento1
            input("¿Desea volver al menú? Presione enter:")
            cestrellan += 1
        else:
            print("El precio a pagar es de $",h1)
            totalVentas += h1
            input("¿Desea volver al menú? Presione enter:")
            cestrellan += 1
    elif opcion=="2":
        edad=int(input("menor de edad o adulto mayor descuento del %10!!\nIngrese su edad:"))
        if edad<18 or edad>=60:
            descuento1=h2*90/100
            print("El precio a pagar es de",int(descuento1),)
            totalVentas += descuento1
            input("¿Desea volver al menú? Presione enter:")
            champs += 1
        else:
            print("El precio a pagar es de $" ,h2)
            totalVentas += h2
            input("¿Desea volver al menú? Presione enter:")
            champs += 1
    elif opcion=="3":
        edad=int(input("menor de edad o adulto mayor descuento del %10!!\nIngrese su edad:"))
        if edad<18 or edad>=60:
            descuento1=h3*90/100
            print("El precio a pagar es de",int(descuento1),)
            totalVentas += descuento1
            input("¿Desea volver al menú? Presione enter:")
            meganium += 1
        else:
            print("El precio a pagar es de $" ,h3)
            totalVentas += h3
            input("¿Desea volver al menú? Presione enter:")
            meganium += 1
    elif opcion=="4":
        edad=int(input("menor de edad o adulto mayor descuento del %10!!\nIngrese su edad:"))
        if edad<18 or edad>=60:
            descuento1=h3*90/100
            print("El precio a pagar es de",int(descuento1),)
            totalVentas += descuento1
            input("¿Desea volver al menú? Presione enter:")
            dorkie += 1
        else:
            print("El precio a pagar es de $" ,h4)
            totalVentas += h4
            input("¿Desea volver al menú? Presione enter:")
            dorkie += 1
    elif opcion=="5":
        print("Aplicación cerrada")
        print("Heladeria Fa´s Levi Live:")
        print("Reportes de productos  vendidos")
        print("Cestrellan : ", cestrellan)
        print("Champs     : ", champs)
        print("Meganium   : ", meganium)
        print("dorkie     : ", dorkie)
        print("Total      : $",int(totalVentas))

