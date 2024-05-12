$(document).ready(function() {
    $('.btnLimpiar').click(function() 
    {
        $('.txtNombre, .txtApellido, .txtMensaje, .txtEmail, .txtNumero, .txtDatos, .txtComuna').val('');

    });

    $('.btnEnviar').click(function() {
        if ($.trim($('.txtNombre').val()) == "") {
            alert("Falta especificar el Nombre");
            $('.txtNombre').focus();
        } else if (!(/^[A-Za-z]+$/.test($.trim($('.txtNombre').val())))) {
            alert("El nombre solo debe contener letras");
            $('.txtNombre').focus();
        } else if ($.trim($('.txtApellido').val()) == "") {
            alert("Falta especificar el Apellido");
            $('.txtApellido').focus();
        } else if (!(/^[A-Za-z]+$/.test($.trim($('.txtApellido').val())))) {
            alert("El Apellido solo debe contener letras");
            $('.txtApellido').focus();
        } else if ($.trim($('.txtEmail').val()) == "") {
            alert("Falta especificar el correo");
            $('.txtEmail').focus();
        } else if (!(/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test($.trim($('.txtEmail').val())))) {
            alert("El formato del correo no es correcto");
            $('.txtEmail').focus();
        } else if ($.trim($('.txtNumero').val()) == "") {
            alert("Falta especificar el Numero");
            $('.txtNumero').focus();
        } else if (!/^\d{9}$/.test($.trim($('.txtNumero').val()))) {
            alert("El campo Número debe contener exactamente 9 números y no letras ");
            $('.txtNumero').focus();
        } else if ($.trim($('.txtDatos').val()) == "") {
            alert("Falta especificar la Region");
            $('.txtDatos').focus();
        
        } else if ($.trim($('.txtComuna').val()) == "") {
            alert("Falta especificar la Comuna");
            $('.txtComuna').focus();
            
        
        }
        else if ($.trim($('.txtMensaje').val()) == "") {
            alert("Falta especificar su mensaje");
            $('.txtMensaje').focus();
        }
        
        
        else {
            alert("Mensaje enviado con éxito.\n" +
                $('.txtNombre').val() + " " +
                $('.txtApellido').val() + "\n" +
                $('.txtEmail').val() + "\n" +
                $('.txtNumero').val() + "\n" +
                $('.txtDatos').val()+ " " +
                $('.txtComuna').val()+"\n"+
                $('.txtMensaje').val()
                

                
            );
        }
    });

    $('#validationTooltip04').change(function() {
        actualizarComunas();
    });

    function actualizarComunas() {
        var regionSelect = document.getElementById("validationTooltip04");
        var comunaSelect = document.getElementById("validationTooltip05");
        comunaSelect.innerHTML = ""; // Limpiar opciones anteriores

        var comunasPorRegion = {
            Aysén: ["Aysén", "Balmaceda", "Chile Chico", "Cisnes", "Cochrane", "Coyhaique", "Guaitecas", "La Junta", "Lago Verde", "O'Higgins", "Puerto Aguirre", "Puerto Aysen", "Puerto Chacabuco", "Puerto Cisnes", "Puyuhuapi", "Río Ibánez", "Tortel", "Villa Manihuales"],
            Antofagasta: ["Antofagasta", "Calama", "Codelco Radomiro Tomic", "Maria Elena", "Mejillones", "Ollague", "San Pedro De Atacama", "Sierra Gorda", "Taltal", "Tocopilla"],
            Arica: ["Arica", "Camarones", "Putre", "General Lagos"],
            Atacama: ["Copiapo", "Caldera", "Tierra Amarilla", "Chañaral", "Diego de Almogro", "Vallenar", "Alto del Carmen", "Freirina", "Huasco"],
            Biobio: ["Concepción", "Coronel", "Chiguayante", "Florida", "Hualqui", "Lota", "Penco", "San Pedro de la Paz", "Santa Juana", "Talcahuano", "Tomé", "Hualpén", "Lebu", "Arauco", "Cañete", "Contulmo", "Curanilahue", "Los Alamos", "Tirúa", "Los Angeles", "Antuco", "Cabrero", "Laja", "Mulchén", "Nacimiento", "Negrete", "Quilaco", "Quilleco", "San Rosendo", "Santa Bárbara", "Tucapel", "Yumbel", "Alto Biobío", "Chillán", "Bulnes", "Cobquecura", "Coelemu", "Coihueco", "Chillán Viejo", "El Carmen", "Ninhue", "Ñiquén", "Pemuco", "Pinto", "Portezuelo", "Quillón", "Quirihue", "Ránquil", "San Carlos", "San Fabián", "San Ignacio", "San Nicolás", "Treguaco", "Yungay"],
            Coquimbo: ["La Serena", "Coquimbo", "Andacollo", "La Higuera", "Paiguano", "Vicuña", "Illapel", "Canela", "Los Vilos", "Salamanca", "Ovalle", "Combarbalá", "Monte Patria", "Punitaqui", "Río Hurtado"],
            Araucania: ["Temuco", "Carahue", "Cunco", "Curarrehue", "Freire", "Galvarino", "Gorbea", "Lautaro", "Loncoche", "Melipeuco", "Nueva Imperial", "Padre Las Casas", "Perquenco", "Pitrufquén", "Pucón", "Saavedra", "Teodoro Schmidt", "Toltén", "Vilcún", "Villarrica", "Cholchol", "Angol", "Collipulli", "Curacautín", "Ercilla", "Lonquimay", "Los Sauces", "Lumaco", "Purén", "Renaico", "Traiguén", "Victoria"],
            Libertador: ["Rancagua", "Codegua", "Coinco", "Coltauco", "Doñihue", "Graneros", "Las Cabras", "Machalí", "Malloa", "Mostazal", "Olivar", "Peumo", "Pichidegua", "Quinta de Tilcoco", "Rengo", "Requínoa", "San Vicente", "Pichilemu", "La Estrella", "Litueche", "Marchihue", "Navidad", "Paredones", "San Fernando", "Chépica", "Chimbarongo", "Lolol", "Nancagua", "Palmilla", "Peralillo", "Placilla", "Pumanque", "Santa María"],
            Lagos: ["Puerto Montt", "Calbuco", "Cochamó", "Fresia", "Frutillar", "Los Muermos", "Llanquihue", "Maullín", "Puerto Varas", "Castro", "Ancud", "Chonchi", "Curaco de Vélez", "Dalcahue", "Puqueldón", "Queilén", "Quellón", "Quemchi", "Quinchao", "Osorno", "Puerto Octay", "Purranque", "Puyehue", "Río Negro", "San Juan de la Costa", "San Pablo", "Chaitén", "Futaleufú", "Hualaihué", "Palena"],
            Rios: ["Valdivia", "Corral", "Lanco", "Los Lagos", "Máfil", "Mariquina", "Paillaco", "Panguipulli", "La Unión", "Futrono", "Lago Ranco", "Río Bueno"],
            Magallanes: ["Punta Arenas", "Laguna Blanca", "Río Verde", "San Gregorio", "Cabo de Hornos (Ex-Navarino)", "Antártica", "Porvenir", "Primavera", "Timaukel", "Natales", "Torres del Paine"],
            Maule: ["Talca", "Constitución", "Curepto", "Empedrado", "Maule", "Pelarco", "Pencahue", "Río Claro", "San Clemente", "San Rafael", "Cauquenes", "Chanco", "Pelluhue", "Curicó", "Hualañé", "Licantén", "Molina", "Rauco", "Romeral", "Sagrada Familia", "Teno", "Vichuquén", "Linares", "Colbún", "Longaví", "Parral", "Retiro", "San Javier", "Villa Alegre", "Yerbas Buenas"],
            Santiago: ["Santiago", "Cerrillos", "Cerro Navia", "Conchalí", "El Bosque", "Estación Central", "Huechuraba", "Independencia", "La Cisterna", "La Florida", "La Granja", "La Pintana", "La Reina", "Las Condes", "Lo Barnechea", "Lo Espejo", "Lo Prado", "Macul", "Maipú", "Ñuñoa", "Pedro Aguirre Cerda", "Peñalolén", "Providencia", "Pudahuel", "Quilicura", "Quinta Normal", "Recoleta", "Renca", "Joaquín", "San Miguel", "San Ramón", "Vitacura", "Puente Alto", "Pirque", "San José de Maipú", "Colina", "Lampa", "Tiltil", "San Bernardo", "Buin", "Calera de Tango", "Paine", "Melipilla", "Alhué", "Curacaví", "María Pinto", "San Pedro", "El Monte", "Isla de Maipo", "Padre Hurtado", "Peñaflor"],
            Tarapaca: ["Iquique", "Alto Hospicio", "Pozo Almonte", "Camiña", "Colchane", "Huara", "Pica"],
            Valparaiso: ["Valparaíso", "Casablanca", "Concón", "Juan Fernández", "Puchuncaví", "Quintero", "Viña del Mar", "Isla de Pascua", "Los Andes", "Calle Larga", "Rinconada", "San Esteban", "La Ligua", "Cabildo", "Papudo", "Petorca", "Zapallar", "Quillota", "Calera", "Hijuelas", "La Cruz", "Nogales", "San Antonio", "Algarrobo", "Cartagena", "El Quisco", "El Tabo", "Santo Domingo", "San Felipe", "Catemu", "Llaillay", "Panquehue", "Putaendo", "Santa María", "Limache", "Quilpué", "Villa Alemana", "Olmué"],
            Ñuble: ["Chillán", "Bulnes", "Cobquecura", "Coelemu", "Coihueco", "Chillán Viejo", "El Carmen", "Ninhue", "Ñiquén", "Pemuco", "Pinto", "Portezuelo", "Quillón", "Quirihue", "Ránquil", "San Carlos", "San Fabián", "San Ignacio", "San Nicolás", "Treguaco", "Yungay"],
        };

        var region = regionSelect.value;
        var comunas = comunasPorRegion[region];

        if (comunas) {
            for (var i = 0; i < comunas.length; i++) {
                var option = document.createElement("option");
                option.text = comunas[i];
                comunaSelect.add(option);
            }
        } else {
            var option = document.createElement("option");
            option.text = "Seleccione";
            comunaSelect.add(option);
        }
    }
});
