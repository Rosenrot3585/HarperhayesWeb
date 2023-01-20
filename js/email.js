//Activamos el módulo de contacto

const closeForm = document.getElementById("closeButton");
closeForm.addEventListener("click", () => {
    document.getElementById("contactoViaMail").style.visibility = "hidden";
});

var submitEmail = document.getElementById("correoElectronico");
submitEmail.addEventListener("click", () => {
    document.getElementById("contactoViaMail").style.visibility = "visible";
});