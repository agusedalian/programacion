const comentarios = document.getElementById("contactarnos");

comentarios.addEventListener("click", function() {
  confirmar("enviar");
});

function confirmar(com) {
  const confirmacion = confirm("Hola! ¿Deseas " + com + " tu contacto?");
    if (confirmacion){
        window.location.href = "contact.html";
    } else{
        alert("Se eligió no confirmar. Podrás seguir investigando sobre viajes y si deseas contactarte podras hacerlo!")
    }
}
