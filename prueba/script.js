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
