var tasks = [];

var form = document.getElementById("taskForm");
var taskContainer = document.getElementById("taskManager");

form.addEventListener("submit", function(event) {
  event.preventDefault();

  var taskName = document.getElementById("taskName").value.trim();
  var priority = document.getElementById("priority").value;
  var isImportant = document.getElementById("isImportant").checked;
  if (taskName === "") {
    window.alert("You must enter a valid task!");
    return;
  }
  var task = {
    id: Date.now(),
    name: taskName,
    priority: priority,
    isImportant: isImportant,
    isCompleted: false,
    date:new Date()
  }
  tasks.push(task);
  displayTasks();
  
  console.log("List of Tasks: ")
  console.log(JSON.stringify(tasks, null, 1));

  form.reset();
})

function displayTasks() {
  taskContainer.innerHTML = "";
  for (var i = 0; i < tasks.length; i++) {
    var task = tasks[i]
    
    var taskDiv = document.createElement("div");
    if (task.isImportant) {
      taskDiv.style.backgroundColor = "red"
    }
    if (task.isCompleted) {
      taskDiv.style.textDecoration = "line-through";
    }
    var content = task.name + "<br>" + "Priority: " + task.priority + "<br>";
    content += task.date;
    content += "<br>" + "<button onclick='markDone(" + task.id + ")'>" + (task.isCompleted ? "Mark Incomplete" : "Mark Complete") + "</button>"
    content += "<button onclick='deleteTask(" + task.id +")'> Delete </button>";
    taskDiv.innerHTML = content;
    taskContainer.appendChild(taskDiv)
  }
}

function deleteTask(id) {
  for (var i=0; i<tasks.length; i++) {
    if(tasks[i].id === id) {
      tasks.splice(i, 1);
      break;
    }
  }

  displayTasks();
  console.log(JSON.stringify(tasks, null, 1));
}

function markDone(id) {
  for(var i=0; i<tasks.length; i++) {
    if(tasks[i].id === id) {
      tasks[i].isCompleted = !tasks[i].isCompleted;
      break;
    }
  }

  displayTasks();
  console.log(JSON.stringify(tasks, null, 1));
}

