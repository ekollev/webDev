document.addEventListener("DOMContentLoaded", function() {
    fetchTasks();
    const addItemButton = document.querySelector(".addItem");
    const inputElement = document.querySelector(".input");
    const inputCont = document.querySelector(".inputField");
    const bottomContainer = document.querySelector(".bottomContainer");
    const sendToDoButton = document.querySelector(".sendTodo");
    let activeSection = "personal";

    const sections = document.querySelectorAll(".sections li");
        sections.forEach(section => {
            section.addEventListener('click', () =>{
                activeSection = section.getAttribute('data-section');
                console.log(('Active section set to:', activeSection));
                
            });
        });
    
    
    async function fetchTasks() {
        try {
            const response = await fetch("/tasks");
            if (response.ok) {
                const tasks = await response.json();
    
                // Render tasks dynamically
                tasks.forEach(task => {
                    let newLiItem = document.createElement("li");
                    newLiItem.id = `note-${task.id}`;
                    newLiItem.classList.add("rightItems", `rightItems${task.id}`);
    
                    newLiItem.innerHTML = `
                        <div class="checkText">
                            <div class="wrapper">
                                <input class="check check${task.id}" type="checkbox" ${task.completed ? "checked" : ""}>
                            </div>
                            <div class="noteText noteText${task.id}">
                                <p class="text text${task.id}">${task.task}</p>
                                <input class="editInput editInput${task.id}" />
                            </div>
                        </div>
                        <div class="rightBtn">
                            <button class="edit edit${task.id} editBtn">
                                <svg class="editBtn" xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512">
                                    <path class="editBtn" d="M410.3 231l11.3-11.3-33.9-33.9-62.1-62.1L291.7 89.8l-11.3 11.3-22.6 22.6L58.6 322.9c-10.4 10.4-18 23.3-22.2 37.4L1 480.7c-2.5 8.4-.2 17.5 6.1 23.7s15.3 8.5 23.7 6.1l120.3-35.4c14.1-4.2 27-11.8 37.4-22.2L387.7 253.7 410.3 231zM160 399.4l-9.1 22.7c-4 3.1-8.5 5.4-13.3 6.9L59.4 452l23-78.1c1.4-4.9 3.8-9.4 6.9-13.3l22.7-9.1v32c0 8.8 7.2 16 16 16h32zM362.7 18.7L348.3 33.2 325.7 55.8 314.3 67.1l33.9 33.9 62.1 62.1 33.9 33.9 11.3-11.3 22.6-22.6 14.5-14.5c25-25 25-65.5 0-90.5L453.3 18.7c-25-25-65.5-25-90.5 0zm-47.4 168l-144 144c-6.2 6.2-16.4 6.2-22.6 0s-6.2-16.4 0-22.6l144-144c6.2-6.2 16.4-6.2 22.6 0s6.2 16.4 0 22.6z"/>
                                </svg>
                            </button>
                            <button class="delete delete${task.id} deleteBtn">
                                <svg class="deleteBtn" xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 384 512">
                                    <path class="deleteBtn" d="M376.6 84.5c11.3-13.6 9.5-33.8-4.1-45.1s-33.8-9.5-45.1 4.1L192 206 56.6 43.5C45.3 29.9 25.1 28.1 11.5 39.4S-3.9 70.9 7.4 84.5L150.3 256 7.4 427.5c-11.3 13.6-9.5 33.8 4.1 45.1s33.8 9.5 45.1-4.1L192 306 327.4 468.5c11.3 13.6 31.5 15.4 45.1 4.1s15.4-31.5 4.1-45.1L233.7 256 376.6 84.5z"/>
                                </svg>
                            </button>
                        </div>`;
                    const liBox = document.querySelector(".items");
                    liBox.appendChild(newLiItem);
                });
            } else {
                console.error("Failed to fetch tasks:", response.statusText);
            }
        } catch (error) {
            console.error("Error fetching tasks:", error);
        }
    }

    async function addTodo() {
        let inputValue = textField.value;
        if (inputValue.trim() !== "") {
            try {
                // Send the to-do to the server
                const response = await fetch("/tasks", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({ task: inputValue }),
                });
    
                if (response.ok) {
                    const result = await response.json();
                    console.log("To-do added successfully:", result);
    
                    // Preserve the styles and classList from the original function
                    let newLiItem = document.createElement("li");
                    newLiItem.id = `note-${result.id}`;
                    newLiItem.setAttribute("data-active-section", activeSection);
                    newLiItem.classList.add("rightItems", `rightItems`); // Add your classes
                    
                    newLiItem.innerHTML = `
                        <div class="checkText">
                            <div class="wrapper">
                                <input class="check check" type="checkbox">
                            </div>
                            <div class="noteText noteText">
                                <p class="text text">${result.task}</p>
                                <input class="editInput editInput"/>
                            </div>
                        </div>
                        <div class="rightBtn">
                            <button class="edit edit editBtn">
                                <svg class="editBtn" xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512">
                                    <path class="editBtn" d="M410.3 231l11.3-11.3-33.9-33.9-62.1-62.1L291.7 89.8l-11.3 11.3-22.6 22.6L58.6 322.9c-10.4 10.4-18 23.3-22.2 37.4L1 480.7c-2.5 8.4-.2 17.5 6.1 23.7s15.3 8.5 23.7 6.1l120.3-35.4c14.1-4.2 27-11.8 37.4-22.2L387.7 253.7 410.3 231zM160 399.4l-9.1 22.7c-4 3.1-8.5 5.4-13.3 6.9L59.4 452l23-78.1c1.4-4.9 3.8-9.4 6.9-13.3l22.7-9.1v32c0 8.8 7.2 16 16 16h32zM362.7 18.7L348.3 33.2 325.7 55.8 314.3 67.1l33.9 33.9 62.1 62.1 33.9 33.9 11.3-11.3 22.6-22.6 14.5-14.5c25-25 25-65.5 0-90.5L453.3 18.7c-25-25-65.5-25-90.5 0zm-47.4 168l-144 144c-6.2 6.2-16.4 6.2-22.6 0s-6.2-16.4 0-22.6l144-144c6.2-6.2 16.4-6.2 22.6 0s6.2 16.4 0 22.6z"/>
                                </svg>
                            </button>
                            <button class="delete delete deleteBtn">
                                <svg class="deleteBtn" xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 384 512">
                                    <path class="deleteBtn" d="M376.6 84.5c11.3-13.6 9.5-33.8-4.1-45.1s-33.8-9.5-45.1 4.1L192 206 56.6 43.5C45.3 29.9 25.1 28.1 11.5 39.4S-3.9 70.9 7.4 84.5L150.3 256 7.4 427.5c-11.3 13.6-9.5 33.8 4.1 45.1s33.8 9.5 45.1-4.1L192 306 327.4 468.5c11.3 13.6 31.5 15.4 45.1 4.1s15.4-31.5 4.1-45.1L233.7 256 376.6 84.5z"/>
                                </svg>
                            </button>
                        </div>`;
                    
                    const liBox = document.querySelector(".items");
                    liBox.appendChild(newLiItem); // Append the new item
                    textField.value = ""; // Clear the input field
                } else {
                    console.error("Failed to add to-do:", response.statusText);
                }
            } catch (error) {
                console.error("Error adding to-do:", error);
            }
        }
    }
    

    sendToDoButton.addEventListener("click", function(){
        addTodo();
     });
    addItemButton.addEventListener("click", function() {
            bottomContainer.classList.toggle("active");
            addItemButton.classList.toggle("clicked");
            inputCont.classList.toggle("active");
            inputElement.classList.toggle("active");
    });
      let textField = document.querySelector(".textArea");
      textField.addEventListener("keydown", function(e){
        let keyName = e.key;
        let inputValue = textField.value;
        if (keyName === "Enter"){
            e.preventDefault();
        }
        if (keyName === "Enter" && inputValue.trim() !== ""){
            addTodo()
        }else if (keyName === "Enter" && inputValue.trim() == ""){
        }
      });

      document.querySelector(".items").addEventListener("click", async (event) => {
      const clickedElement = event.target;

      if(clickedElement.closest("li")){
        const itemToRemove = clickedElement.closest("li");
        let IDitemToRemove = itemToRemove.id;
        console.log(IDitemToRemove);
        
        if (clickedElement.classList && clickedElement.classList.contains("deleteBtn")) {
            try{
                IDitemToRemove = IDitemToRemove.replace("note-", "");
                const response = await fetch(`/tasks/${IDitemToRemove}`, {
                    method: "DELETE",
                    headers: {
                        "Content-Type": "application/json",
                    },
                });
                if(!response.ok){
                throw new Error("Error deleting the task.")
                }
              itemToRemove.remove();
            }catch(error){
                console.error("Error deleting task:", error)
                alert("Error: Could not delete task.")
            }   
      }
    };

    if(clickedElement.classList.contains("editBtn")){
        const list = clickedElement.closest("li");
        const paragraph = list.querySelector(".text");
        const textDiv = list.querySelector(".noteText");
        const input = list.querySelector(".editInput");
        let listID = list.id;
        console.log("Extracted list ID:", listID);
         if(!listID){
            console.log("Error: Task ID is missing!");
            return
        };
        listID = listID.replace("note-", "");
        console.log("Task ID after exctraction:", listID);
        
        const paragraphStyles = window.getComputedStyle(textDiv);
        input.classList.add("rightItems", "rightItemsInput");
        input.style.height = paragraphStyles.height;
        input.value = paragraph.textContent;
        paragraph.style.display = 'none'; 
        input.style.display = 'flex';

    input.addEventListener("keydown",async function (e){
        let key = e.key;
        
        if (key === "Enter"){
          e.preventDefault();
          let newTaskValue = input.value;
          try{
            const response = await fetch(`/tasks/${listID}`,{
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ task: newTaskValue }),
            });
            if(response.ok){
                const updatedTask = await response.json();
                paragraph.textContent = updatedTask.task;
                input.style.display = "none";
                paragraph.style.display = "block";
            }else{
                console.error("Failed to update task:", response.statusText)
                alert("Error: Could not update task.")
            }
        }catch(error){
            console.error("Error updating task:", error)
            alert("Error: Could not update task.")
        }   
        }
        
        
    })
    }
    });
});
    

