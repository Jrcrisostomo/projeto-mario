const form = document. querySelector(".fomulario-fale-conosco")
const mascara = document.querySelector(".mascara-formulario")


function mostraform() {
  form.style.left = "50%"
  form.style.tranform = "translateX(-50%);"
  mascara.style.visibility = "visible"
}

function esconderform(){
    form.style.left = "-300px"
    form.style.tranform = "translateX(0);"
    mascara.style.visibility = "hidden"
}