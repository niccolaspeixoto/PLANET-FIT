const contactButton = document.getElementById("contactButton")
const form = document.querySelector(".formulario-fale-conosco")
const formMask = document.getElementById("formMask")

function showForm(){
    form.style.left = "50%"
    form.style.transform = "translateX(-50%)"
    formMask.style.visibility = "visible"
}

function hideForm (){
    form.style.left = "-290px"
    form.style.transform = "translateX(0)"
    formMask.style.visibility = "hidden"
}

form.addEventListener("click", showForm)
contactButton.addEventListener("click", showForm)
formMask.addEventListener("click", hideForm)