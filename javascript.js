
function cliente() {
    
    var nombre = prompt("¿Cuál es tu nombre?");
    
   
    if (nombre !== null && nombre !== "") {
       
        mostrarSaludo(nombre);
    } else {
        
        alert("No ingresaste un nombre. Intenta de nuevo.");
    }
}




///////////////////////
var nombres = ["Juan", "María", "Carlos", "Ana", "Pedro"];


function mostrarNombres() {
   
    var contenedor = document.body;

    
    var lista = document.createElement('ul');

    
    for (var i = 0; i < nombres.length; i++) {
        
        var elementoLista = document.createElement('li');
        elementoLista.textContent = nombres[i];

        
        lista.hi(elementoLista);
    }

    
    contenedor.hi(lista);
}


mostrarNombres();
