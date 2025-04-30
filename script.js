// document.addEventListener("DOMContentLoaded", init);
// const outputDiv = document.getElementById("eachTask")

// let tasks = [];

// const form = document.getElementById("taskForm")
// const taskContainer = document.getElementById("taskManager")

// function init() {
//     const submitButton = document.getElementById("submitBtn");
//     submitButton.addEventListener("click", createObject);
// }

// function createObject() {
//     const tasks = buildTask();
    
//     console.log("JavaScript Object:");
//     console.log(tasks);

//     console.log("JSON Format:");
//     console.log(JSON.stringify(tasks, null, 4));
// }

// function buildTask() {
//     let priorityVal = document.getElementById("priority");
//     let importance = document.getElementById("important");

//     return {
//         taskName: document.getElementById("taskName").value,
//         priority: document.getElementById("priority").value,
//         isImportant: document.getElementById("important").value,
//         // section: document.getElementById("section").value,
//         // role: document.getElementById("role").value
//     };
// }

// // const taskLine = {
// //     taskName: document.getElementById("taskName").value,
// //     priority: document.getElementById("priority").value,
// //   }
  
// //   function displayTasks(taskLine) {
// //     return `${taskLine.name}         Priority ${taskLine.priority}`
// //   }
  
// //   function outIt() {
// //     outputDiv.innerHTML = ` ${displayTasks(taskLine)}`;
// //   }

let allTasks = [];

let form = document.getElementById("taskForm");
let taskContainer = document.getElementById("taskManager");

form.addEventListener("submit", function(event) {
  event.preventDefault();

  let taskName = document.getElementById("taskName").value.trim();
  let priority = document.getElementById("priority").value;
  let isImportant = document.getElementById("important");
  if (taskName === "") {
    window.alert("You must enter a valid task!");
    return;
  }
  let task = {
    id: Date(),
    name: taskName,
    priority: priority,
    isImportant: isImportant,
    isCompleted: true,
    date:new Date()
  }
  allTasks.push(task);
  displayTasks();
  console.log(JSON.stringify(allTasks, null, 2));
})

function displayTasks() {
  taskContainer.innerHTML="";
  for (var i=0; i<allTasks.length; i++) {
    var task = allTasks[i]
    
    var taskDiv = document.createElement("div");
    if (task.isImportant) {
      taskDiv.style.backgroundColor = "red"
    }
    if (task.isCompleted) {
      taskDiv.style.textDecoration = "strike-through";
    }
    var content = task.name + task.priority + task.date;
    content += "<button onclick='markDone(" + task.id +")'>";

    taskDiv.innerHTML = content;
    taskContainer.appendChild(taskDiv);
  }
}

function deleteTasks(id) {
  for (var i=0; i<allTasks.length; i++) {
    if (allTasks[i].id === id) {
      allTasks.splice(i, 1);
      break;
    }
  }

  displayTasks();
  console.log(JSON.stringify(allTasks, null, 2));
}

