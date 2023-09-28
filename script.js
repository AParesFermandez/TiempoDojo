function mostrarMensaje(elemento){
    alert("Cargando el pronóstico del clima.");
}

var acceptButton = document.querySelector('.cookiebutton');
//declaro la variable acceptButton correspondiente al boton de de aceptar 
//uso document para buscar en el documento 
//querySelector para decirle que esta variable tiene referencia a cookieButton que se refiere al boton de i Aceptt
//asi obtengo una referencia del boton de cookies
var cookiesBar = document.querySelector('.galletas');
//hago lo mismo para obtener una referencia al div de la caja de galletitas jaja
acceptButton.addEventListener('click', function () {
    //agrego un evento que dice que cuando se haga click en el botno de aceptar 
    // oculta la barra de "galletas" al establecer su propiedad CSS "display" en "none"
    cookiesBar.style.display = 'none';
    //con esto le digo que a la referencia que hice a cookie bar cambie el style y a display le haga none asi no se mostrara nada.
});
// Función para cambiar las temperaturas en la página
function cambiarTemperaturas(select) {
    let opcion = select.value;
    let temperaturas = document.querySelectorAll('.max, .min');

    if (opcion === 'F') {
        for (let i = 0; i < temperaturas.length; i++) {
            let temperaturaCelsius = parseFloat(temperaturas[i].innerText);
            let temperaturaFahrenheit = (temperaturaCelsius * 9/5) + 32;
            temperaturas[i].innerText = Math.round(temperaturaFahrenheit);
            
        }
    } else {
        for (let i = 0; i < temperaturas.length; i++) {
            let temperaturaFahrenheit = parseFloat(temperaturas[i].innerText);
            let temperaturaCelsius = (temperaturaFahrenheit - 32) * 5/9;
            temperaturas[i].innerText = Math.round(temperaturaCelsius);
        }
    }

    // Evitar que el formulario se envíe
    return false;
}







