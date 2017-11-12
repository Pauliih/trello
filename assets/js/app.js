/*Version 0.0.1
- Se mostrará el texto "Añadir una lista ...".
- Al hacer click se debe ocultar el texto y mostrar un formulario.
- El formulario está conformado por un input y un botón para que pueda añadir tareas a tu lista.
*/

function add(){
	//Hacer invisible el contenedor con el texto
	containerTarea = document.getElementById("containerTask");
	containerTarea.setAttribute('style','display:none');
	//containerTarea.classList.add("invisible");
	document.getElementById('addList').style.display = 'block';

	//llamo elementos
	var contTask = document.getElementById('containerTask');
    var tasks = document.getElementById('addList');

    //Creo elementos
	var salto= document.createElement('br');
	var newForm = document.createElement('form');
	var task = document.createElement('input');
	//Le doy atributos
	task.setAttribute('placeholder','Añadir una lista...');
	task.setAttribute('id','task');
	//creo elementos
	var btnTask = document.createElement('button');
    var textBoton = document.createTextNode("Guardar");
    //atributos
    btnTask.setAttribute("type", "button");
    btnTask.classList.add("btnSave");

    //Asigno hijos
	btnTask.appendChild(textBoton);
	newForm.appendChild(task);
	newForm.appendChild(salto);
	newForm.appendChild(btnTask);
	//asigno hijos al padre de todo 
	addList.appendChild(newForm);

	/*_______________________________________________________________________________________
	Version 0.0.2
	- Al dar click en el botón de "Guardar", se mostrará un nuevo cuadro donde estará el nombre 
	  de la lista agregada.
	- Mostrar un texto de "Añadir una tarea (tarjeta)" dentro de la lista.*/

	btnTask.addEventListener('click', function(){ // para guardar

		var listName = document.getElementById('task').value; //Obtengo el texto
		document.getElementById('task').value = ""; //limpiar

		if(listName == "" || listName == null){ // validar que no esté vacía la caja de txt
		alert("Debes ingresar un texto");
		return; 
		}

		//llamo a los elementos
		var containerTasks = document.getElementById('tasks'); 
		var listBox = document.createElement('div');
		var pTxt = document.createElement('p');
		var txtTask = document.createTextNode(listName);
		var addNewCard = document.createElement('a')
		var txtNew = document.createTextNode("Añadir una tarjeta...");
		/* Agregar un titulo que diga Nombre de la lista al div listBox con clase fullList*/
		
		pTxt.classList.add('listName');//Doy atributos
		listBox.classList.add('fullList');
		addNewCard.setAttribute('id','link');

		//asigno hijos
		containerTasks.appendChild(listBox);
		listBox.appendChild(pTxt);
		pTxt.appendChild(txtTask);
		listBox.appendChild(addNewCard);
		addNewCard.appendChild(txtNew);

		/*________________________________________________________________________________
		Version 0.0.3
		- Al dar click en "Añadir una tarea(tarjeta)", deberá mostrar un formulario con un 
		textarea y un botón que diga "Añadir". */

		addNewCard.addEventListener('click', function(){

			var link = document.getElementById("link");
			link.setAttribute('style','display:none');

			var formCard = document.createElement('form');
		   	var txtArea = document.createElement('textarea');
		   	var btnAdd = document.createElement('button');
   			var txtBtnAdd = document.createTextNode("Añadir");
		    //atributos
		    btnAdd.setAttribute("type", "button");
		    btnAdd.classList.add("btnAdd");
		   		
		   	formCard.classList.add("form", "design");
		   	txtArea.setAttribute("placeholder", "Añadir una tarjeta");
				
			pTxt.appendChild(txtArea);
			formCard.appendChild(pTxt);
			btnAdd.appendChild(txtBtnAdd);
			formCard.appendChild(btnAdd);
			listBox.appendChild(formCard);
   		});
	})
}