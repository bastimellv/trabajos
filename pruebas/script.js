    function toggleFichaTecnica() {
        var fichaTecnica = document.getElementById("ficha-tecnica");
        var button = document.getElementById("toggle-button");
        
        if (fichaTecnica.classList.contains("show")) {
            fichaTecnica.classList.remove('show');
        } else {
            fichaTecnica.classList.add('show');
            var buttonPosition = button.getBoundingClientRect().top + window.pageYOffset;
            window.scrollTo({ top: buttonPosition, behavior: 'smooth' });
        }
    }
    








    document.addEventListener("DOMContentLoaded", function () {
        // Precios de las bicicletas en pesos chilenos
        const preciosPesos = [269990, 269990, 269990, 179990, 215000, 67000, 110000, 170000];
        let valorDolar = null;
    
        // Función para obtener el valor actual del dólar desde la API
        function obtenerValorDolar() {
            return fetch('https://cl.dolarapi.com/v1/cotizaciones/usd')
                .then(response => response.json())
                .then(data => {
                    valorDolar = data.ultimoCierre;
                    return valorDolar;
                })
                .catch(error => {
                    console.error('Error al obtener el valor actual del dólar:', error);
                    return null;
                });
        }
    
        // Función para convertir precios a dólares
        function convertirADolares(preciosPesos, valorDolar) {
            if (valorDolar === null) {
                console.error('El valor actual del dólar no está disponible');
                return;
            }
    
            // Convertir los precios a dólares
            const preciosDolares = preciosPesos.map(precio => precio / valorDolar);
    
            // Actualizar los precios en la página
            const preciosElements = document.querySelectorAll('.titulo span');
            preciosElements.forEach((element, index) => {
                element.textContent = `$${preciosDolares[index].toFixed(2)} USD`;
            });
        }
    
        // Función para convertir precios a pesos chilenos
        function convertirAPesos(preciosPesos) {
            // Actualizar los precios en la página
            const preciosElements = document.querySelectorAll('.titulo span');
            preciosElements.forEach((element, index) => {
                // Agregar puntos como separadores de miles
                const precioConPuntos = preciosPesos[index].toLocaleString('es-CL');
                element.textContent = `$${precioConPuntos} CLP`;
            });
        }
    
        // Convertir precios a pesos chilenos cuando se carga la página
        convertirAPesos(preciosPesos);
    
        // Convertir precios a dólares cuando se carga la página
        obtenerValorDolar().then(() => {
            convertirADolares(preciosPesos, valorDolar);
        });
    
        // Agregar evento de cambio al selector de moneda
        const currencySelector = document.getElementById("currency-selector");
        currencySelector.addEventListener("change", function () {
            const selectedCurrency = currencySelector.value;
            if (selectedCurrency === "USD") {
                obtenerValorDolar().then(() => {
                    convertirADolares(preciosPesos, valorDolar);
                });
            } else if (selectedCurrency === "CLP") {
                convertirAPesos(preciosPesos);
            }
        });
        currencySelector.value = "USD";

    });
    


