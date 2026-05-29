function enviardatos() {
    var nombreInput = document.getElementById("nombre").value;
    var edadInput = document.getElementById("edad").value;
    var correoInput = document.getElementById("correo").value;
    
    if (nombreInput.trim() === "" || edadInput.trim() === "" || correoInput.trim() === "") {
        alert("Please complete all fields to register.");
        return;
    }
    
    // Guardamos el nombre para el saludo en el Dashboard
    localStorage.setItem("usuarioNombre", nombreInput);
    
    // Redirección a la segunda pantalla
    window.location.href = "artistas.html";
}