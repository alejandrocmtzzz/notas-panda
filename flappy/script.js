// Escuchar cambios en los checkboxes
const checkboxes = document.querySelectorAll('.mdl-checkbox__input');
checkboxes.forEach((checkbox) => {
  checkbox.addEventListener('change', function () {
    const task = this.closest('.task');
    if (this.checked) {
      task.classList.add('completed');
    } else {
      task.classList.remove('completed');
    }
  });
});

// Eliminar tareas
const deleteButtons = document.querySelectorAll('.delete-task');
deleteButtons.forEach((button) => {
  button.addEventListener('click', function () {
    const task = this.closest('.task');
    task.remove();
  });
});

// Agregar tareas
const addTaskButton = document.getElementById('addTask');
addTaskButton.addEventListener('click', function () {
  const newTaskInput = document.getElementById('newTask');
  const taskText = newTaskInput.value.trim();
  if (taskText) {
    // Crear un nuevo elemento de tarea
    const taskContainer = document.querySelector('.tasks');
    const task = document.createElement('div');
    task.className = 'task';
    task.innerHTML = `
      <label class="mdl-checkbox mdl-js-checkbox mdl-js-ripple-effect">
        <input type="checkbox" class="mdl-checkbox__input">
        <span class="mdl-checkbox__label">${taskText}</span>
      </label>
      <button class="delete-task mdl-button mdl-js-button mdl-button--icon">
        <i class="material-icons">delete</i>
      </button>
    `;

    // Agregar la tarea al contenedor de tareas
    taskContainer.appendChild(task);
    newTaskInput.value = ''; // Limpiar el campo de entrada
    componentHandler.upgradeDom(); // Actualizar los componentes de MDL
  }
});
