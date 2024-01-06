const input = document.getElementById("inp")! as HTMLInputElement;
const button = document.getElementById("submitInput")!;
const tasks = document.getElementById("tasks")!;

document.addEventListener("keyup", e => {
    if(e.key === "Enter"){
        addTask();
    }
});

function addTask() {
    if(input.value === "" || input.value.length === 0){
        input.placeholder = "please enter a task!";
    } else {
        tasks.innerHTML += `
        <div class="task" onclick="fadeAway(event)">
            <span class="taskText">
                ${input.value}
            </span>
            <button class="taskButton" onclick="delTask(event)">
                <img src="assets/trash.png" width="25" height="25">
            </button>
        </div>
        `;
        input.placeholder = 'enter task here...'
        input.value = "";
    }
}

function fadeAway(event: any){
    const taskElement: HTMLElement = event.target.closest('.task');
    if(taskElement) {
        taskElement.style.opacity = "0.3";
    }
}

function delTask(event: any) {
    const taskElement = event.target.closest('.task');
    if(taskElement) {
        taskElement.remove();
    }
}



function run() {
    addTask();
}

