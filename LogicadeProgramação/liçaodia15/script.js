const taskInput = document.getElementById('taskInput');
const addBtn = document.getElementById('addbutton');
const taskList = document.getElementById('tasklist');

addBtn.addEventListener('click', addTask);

function addTask() {
  const taskText = taskInput.value;

  if (taskText.trim() !== '') {
    const newTask = document.createElement('li');
    newTask.textContent = taskText;

    taskList.appendChild(newTask);

    taskInput.value = '';
  }
}
 const addbutton = document.querySelector("#addbutton");
 addbutton.addEventlistener("click", adicionarTarefa);