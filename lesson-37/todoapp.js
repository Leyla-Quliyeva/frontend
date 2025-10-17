let add = document.querySelector(".add");
let todoInput = document.querySelector("#todo-input");
let lists = document.querySelector(".lists");
// let allTodos = [];
let editTodoObj;
let allTodos = JSON.parse(localStorage.getItem("todos")) || [];

drawLists(allTodos);

add.addEventListener("click", function () {
  if (todoInput.value) {
    if (this.innerText === "ADD") {
      let todoObj = {
        todoText: todoInput.value,
        id: Date.now(),
      };
      allTodos.push(todoObj);
      updateLocalStorage();
      drawLists(allTodos);
    } else {
      editTodoObj.todoText = todoInput.value;
      drawLists(allTodos);
      this.innerText = "ADD";
    }
  } else {
    drawLists(allTodos);
  }
  todoInput.value = "";
});

function drawLists(data) {
  lists.innerHTML = "";
  data.forEach((element) => {
    lists.innerHTML += `
    <li
              class="list-group-item list-group-item-succes d-flex justify-content-between align-items-center " >
              <div>
                <input type="checkbox" ${
                  element.checked && "checked"
                } id="complete" onchange="check(this,${element.id})" />
                <span style="text-decoration: ${
                  element.checked ? "line-through" : "none"
                };">${element.todoText}</span>
              </div>
              <div>
                <button class="btn btn-success" onclick=editTodo(${
                  element.id
                })>EDIT</button>
                <button class="btn btn-danger" onclick=deleteTodo(${
                  element.id
                })>DELETE</button>
              </div>
            </li>`;
  });
}

function deleteTodo(id) {
  let i = allTodos.findIndex((item) => item.id == id);
  allTodos.splice(i, 1);
  drawLists(allTodos);
  updateLocalStorage();
}

// function deleteTodo(id) {
//   allTodos = allTodos.filter((item) => item.id !== id);
//   drawLists(allTodos);
// }

function updateLocalStorage() {
  localStorage.setItem("todos", JSON.stringify(allTodos));
}

function editTodo(id) {
  editTodoObj = allTodos.find((item) => item.id == id);
  todoInput.value = editTodoObj.todoText;
  todoInput.focus();
  add.innerText = "EDIT";
  editTodoObj.checked = false;
  drawLists(allTodos);
}

function check(input, id) {
  console.log(input);
  if (allTodos.find((item) => item.id == id).checked === true) {
    allTodos.find((item) => item.id == id).checked = false;
  } else {
    allTodos.find((item) => item.id == id).checked = true;
  }
  drawLists(allTodos);
}
