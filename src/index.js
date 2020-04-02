document.addEventListener("DOMContentLoaded", () => {
  // your code here
  const taskForm = document.getElementById('create-task-form')
const taskItemUl = document.getElementById('tasks')

taskForm.addEventListener("submit", (e) => {
  e.preventDefault()
  const taskInput = taskForm["new-task-description"].value

  // const newLiElement = document.createElement('li')
  // newLiElement.innerText = taskInput
  // taskItemUl.appendChild(newLiElement)

  taskItemUl.innerHTML += `<li id=${taskInput}>${taskInput}</li><button id=${taskInput}>X</button>`

  taskForm["new-task-description"].value = ""

});

taskItemUl.addEventListener("click", (e) => {
  //e.preventDefault()
  clickMe(e);
});

function clickMe(e) {
  if (e.target.tagName === "BUTTON") {
    e.target.previousElementSibling.remove();
    e.target.remove();
  }
}
});
