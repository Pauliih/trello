/*
- Se mostrará el texto "Añadir una lista ...".
- Al hacer click se debe ocultar el texto y mostrar un formulario.
- El formulario está conformado por un input y un botón para que pueda añadir tareas a tu lista.
*/

function add(){

	var newList = document.getElementById('createList');
	newList = "";
	var contTask = document.getElementById('containerTask');
    var tasks = document.getElementById('tasks');

	var newForm = document.createElement('form');
	var task = document.createElement('input');
    task.classList.add('task');

	var btnTask = document.createElement('button');
    var textBoton = document.createTextNode("Guardar");
    btnTask.setAttribute("type", "button");
    btnTask.classList.add("btnGuardar");

	btnTask.appendChild(textBoton);
	newForm.appendChild(task);
	newForm.appendChild(btnTask);
	tasks.appendChild(newForm);
}