const form = document.getElementById("formopinion"); //Declaramos cual es el formulario

form.addEventListener("submit", function(event) {
    event.preventDefault();

    //Declaramos los espacios para escribir 

    const usuarios = document.getElementById("opinion").value;

    //Definicom que pasa si el espacio esta vacio

    if (opinion === ""){
        alert("Por favor completa todos los campos.");
    }
    else{
        alert("Formulario enviado exitosamente.");
        form.reset();
    }
});
