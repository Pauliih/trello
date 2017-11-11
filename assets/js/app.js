/*
- Se mostrará el texto "Añadir una lista ...".
- Al hacer click se debe ocultar el texto y mostrar un formulario.
- El formulario está conformado por un input y un botón para que pueda añadir tareas a tu lista.
*/

function add(){
	//Hacer invisible el contenedor con el texto
	containerTarea = document.getElementById("containerTask");
	containerTarea.classList.add("invisible");
	
	var contTask = document.getElementById('containerTask');
    var tasks = document.getElementById('tasks');

	var salto= document.createElement('br');
	var newForm = document.createElement('form');
	var task = document.createElement('input');
	task.setAttribute('placeholder','Añadir una lista...')
    task.classList.add('task');

	var btnTask = document.createElement('button');
    var textBoton = document.createTextNode("Guardar");
    btnTask.setAttribute("type", "button");
    btnTask.classList.add("btnSave");

	btnTask.appendChild(textBoton);
	newForm.appendChild(task);
	newForm.appendChild(salto);
	newForm.appendChild(btnTask);
	tasks.appendChild(newForm);
}