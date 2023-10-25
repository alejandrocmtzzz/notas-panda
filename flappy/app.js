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
