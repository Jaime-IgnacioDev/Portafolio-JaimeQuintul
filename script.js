let menuVisible = false;
//Función que oculta o muestra el menu
function mostrarOcultarMenu(){
    if(menuVisible){
        document.getElementById("nav").classList ="";
        menuVisible = false;
    }else{
        document.getElementById("nav").classList ="responsive";
        menuVisible = true;
    }
}

function seleccionar(){
    //oculto el menu una vez que selecciono una opcion
    document.getElementById("nav").classList = "";
    menuVisible = false;
}

function enviarFormulario(event) {
    var nombre = document.getElementById('nombre').value;
    var telefono = document.getElementById('telefono').value;
    var correo = document.getElementById('correo').value;
    var mensaje = document.getElementById('mensaje').value;
  
    if (nombre === '' || telefono === '' || correo === '' || mensaje === '') {
      alert('Por favor completa todos los campos.');
      event.preventDefault();
    }
  }
  
  document.getElementById('formulario').addEventListener('submit', enviarFormulario);
  