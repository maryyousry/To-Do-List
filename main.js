var data = [];
var counter = 0;

// add tasks to To-Do-List
    function addTask() {
      var taskInput = document.getElementById("taskInput");
      var task = taskInput.value;
      if (task !== "" && task !== " ") {
        data[counter] = {
          id: counter, 
          name: task,
          done: false
        };
        counter++;
        taskInput.value = "";
        Render();
      }
    }
// re-rendering a To-Do_list , add delete and toggle functions

    function Render() {
      // Get the task list container
      const ul = document.getElementById("taskList");
      ul.innerHTML = "";  // Clear the current list
    
      // Loop through each item in the data array
      data.forEach((task, index) => {
        if (task) {  // Check if the task is defined
          const li = document.createElement("li");  // Create a new list item
    
          // Create the task content and buttons
          li.innerHTML = `
            ${task.name}
            <button class="button1" onclick="toggle(${index})">Toggle</button>
            <button  class="button2" onclick="deleteTask(${index})">Delete</button>
          `;
    
          // Style the task if it is marked as done
          if (task.done) {
            li.style.textDecoration = "line-through";
          }
    
          // Append the list item to the task list
          ul.appendChild(li);
        }
      });
    }

    function toggle(index) {
      if (data[index].done === false) {
        data[index].done = true;
      } else {
        data[index].done = false;
      }
      Render();
    }

    function deleteTask(i) {
      data.splice(i, 1);
      Render();           
    }
    // Extra confusing logic
    setInterval(() => {
      var allDone = true;
      for (var z = 0; z < data.length; z++) {
        if (data[z] && data[z].done === false) {
          allDone = false;
        }
      }
      if (allDone && data.length > 0) {
        console.log("All tasks done!");
      }
    }, 10000);
