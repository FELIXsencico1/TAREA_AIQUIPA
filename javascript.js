
function cliente() {
    
    var nombre = prompt("¿Cuál es tu nombre?");
    
   
    if (nombre !== null && nombre !== "") {
       
        mostrarSaludo(nombre);
    } else {
        
        alert("No ingresaste un nombre. Intenta de nuevo.");
    }
}


function mostrarSaludo(nombre) {
    
    var mensaje = "Hola, " + nombre + "! Bienvenido a nuestra página.";
    
   
    alert(mensaje);
}


window.onload = function() {
    obtenerNombre();
};
