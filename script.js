function addTask() {
  const input = document.getElementById("task-input");
  const taskText = input.value.trim();

  if (taskText === "") return;

  const li = document.createElement("li");
  li.textContent = taskText;

 
  li.addEventListener("click", () => {
    li.classList.toggle("completed");
  });

  
  const removeBtn = document.createElement("button");
  removeBtn.textContent = "X";
  removeBtn.className = "remove-btn";
  removeBtn.addEventListener("click", (e) => {
    e.stopPropagation(); 
    li.remove();
  });

  li.appendChild(removeBtn);

  document.getElementById("task-list").appendChild(li);
  input.value = ""; 
}