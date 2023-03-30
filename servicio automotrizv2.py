print("==========Servicio automotriz========\n")


vGlosa =""

vContador = 0

vEspera = 0


print("bienvenido, cuales servicios deseea solicitar?\n")

print("==========Nombre========\n")
vNombre = str(input(""))

print("==========Servicio========\n")






vRev_km = int(input("desea solicitar el servicio de Revicion de kilometraje? \n1 si \n2 no \n digite la decision. \n"))
if vRev_km == 1:
    print("el tiempo de este proceso es de 120 minutos.")

elif vRev_km == 2:
    print("servicio no solicitado.")
else:
    print("caracteres invalidos.")

vCambio_aceite = int(input("desea solicitar el servicio de cambio de aceite? \n1 si \n2 no \n digite la decision. \n"))
if vCambio_aceite == 1:
    print("el tiempo de este proceso es de 60 minutos.")

elif vCambio_aceite == 2:
    print("servicio no solicitado.")
else:
    print("caracteres invalidos.")

vRevicion_frenos = int(input("desea solicitar el servicio de revicion de frenos? \n1 si \n2 no \n digite la decision. \n"))
if vRevicion_frenos == 1:
    print("el tiempo de este proceso es de 30 minutos.")

elif vRevicion_frenos == 2:
    print("servicio no solicitado.")
else:
    print("caracteres invalidos.")

vRevicion_correas = int(input("desea solicitar el servicio de revicion de correas? \n1 si \n2 no \n digite la decision. \n"))
if vRevicion_correas == 1:
    print("el tiempo de este proceso es de 30 minutos.")

elif vRevicion_correas == 2:
    print("servicio no solicitado.")
else:
    print("caracteres invalidos.")

vRevicion_luces = int(input("desea solicitar el servicio de revicion de luces? \n1 si \n2 no \n digite la decision. \n"))
if vRevicion_luces == 1:
    print("el tiempo de este proceso es de 15 minutos.")

elif vRevicion_luces == 2:
    print("servicio no solicitado.")
else:
    print("caracteres invalidos.")

vRevicion_direccion = int(input("desea solicitar el servicio de revicion de direccion? \n1 si \n2 no \n digite la decision. \n"))
if vRevicion_direccion == 1:
    print("el tiempo de este proceso es de 30 minutos.")

elif vRevicion_direccion == 2:
    print("servicio no solicitado.")
else:
    print("caracteres invalidos.")


vLavar = int(input("desea solicitar el lavado? \n1 si \n2 no \n digite la decision. \n"))
if vLavar == 1:
    print("el tiempo de este proceso es de 30 minutos.")

elif vLavar == 2:
    print("servicio no solicitado.")
else:
    print("caracteres invalidos.")



if vRev_km == 1:
    vEspera += 120
    vContador += 1
    vGlosa += "Revicion 1000"

if vCambio_aceite == 1:
    vEspera += 60
    vContador += 1
    vGlosa += "cambio aceite"

if vRevicion_frenos == 1:
    vEspera += 30
    vContador += 1
    vGlosa += "revicion frenos"

if vRevicion_correas == 1:
    vEspera += 30
    vContador += 1
    vGlosa += "revicion correas"

if vRevicion_luces == 1:
    vEspera += 15
    vContador += 1
    vGlosa += "revicion correas"

if vRevicion_direccion == 1:
    vEspera += 30
    vContador += 1
    vGlosa += "revicion direccion"

if vLavar == 1:
    vEspera += 30
    vContador += 1
    vGlosa += "lavar"


print("verificando servicios ")

if Vespera and vContador and vGlosa:
    print("Nombre:")
    




    



