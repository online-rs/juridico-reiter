// JavaScript
const todoList = document.querySelector('#todo-list ul');
const newTaskInput = document.querySelector('#new-task');
const addButton = document.querySelector('#add-button');
const todoList2 = document.querySelector('#todo-list ul li');


addButton.addEventListener('click', () => {
  // Adicione uma nova tarefa à lista
  const newTaskText = newTaskInput.value;
  if (newTaskText) {
    const newTaskHtml = `<li>
      <input type="checkbox" id="task" />
      <label for="task">${newTaskText}</label>
      <button class="delete-button">Excluir</button>
    </li>`;
    todoList.innerHTML += newTaskHtml;
    newTaskInput.value = '';
  }
});

todoList.addEventListener('click', (event) => {
  if (event.target.className === 'delete-button') {
    // Remova a tarefa da lista
    const taskItem = event.target.parentElement;
    todoList.removeChild(taskItem);
  }
});
