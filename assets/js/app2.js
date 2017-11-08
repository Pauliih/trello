var boton = document.getElementById("botonPrincipal");
boton.addEventListener("click", function(){
    var input = document.createElement("input");
    input.setAttribute("type", "text");
    input.setAttribute("placeholder", "Agrega tarea");
    input.classList.add("class", "inputTitulo");
    input.value;

    var nuevoBoton = document.createElement("button");
    var textBoton = document.createTextNode("Guardar");
    nuevoBoton.setAttribute("type", "button");
    nuevoBoton.classList.add("class", "botonGuardar");

    var divPadre = document.getElementById("tareas");
    divPadre.appendChild(input);
    nuevoBoton.appendChild(textBoton);
    divPadre.appendChild(nuevoBoton);
})