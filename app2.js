
// Ventana emergente has comprado tu entrada

function mostrarVentana()
{
    var ventana = document.getElementById('miVentana'); // Accedemos al contenedor
    ventana.style.marginTop = "100px"; // Definimos su posición vertical. La ponemos fija para simplificar el código
    ventana.style.marginLeft = ((document.body.clientWidth-350) / 2) +  "px"; // Definimos su posición horizontal
    ventana.style.display = 'block'; // Y lo hacemos visible
}

function ocultarVentana()
{
    var ventana = document.getElementById('miVentana'); // Accedemos al contenedor
    ventana.style.display = 'none'; // Y lo hacemos invisible
}


// Ventana emergente has comprado tu entrada


//Desaparezca ventana emergente compra realizada correctamente

$(document).ready(function() {
    setTimeout(function() {
        $("#miVentana").fadeOut(1500);
    },3000);
});

//Desaparezca ventana emergente compra realizada correctamente