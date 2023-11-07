const comentarios = document.getElementById("Contact");

comentarios.addEventListener("click", function() {
  confirmar("Contactarnos");
});

function confirmar(com) {
  const confirm = confirm("¿Deseas confirmar " + com + "?");
    if (confirm){
        window.location.href = "contact.html";
    } else{
        alert("Se eligió no confirmar. Podrás seguir investigando sobre viajes y si deseas contactarte podras hacerlo!")
    }
}
