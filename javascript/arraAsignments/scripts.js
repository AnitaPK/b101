let tasks = []
const taskInputElmt = document.getElementById("inputTask")
const renderTasksElmt = document.getElementById("renderTasks")
const ClearAllTasksElmt = document.getElementById("ClearAllTasks")

function renderTasks(){
    renderTasksElmt.innerHTML = tasks.map((task,i)=>`
            <li>${task} 
            <button onclick="deleteTask(${i})">DELETE</button>
            </li>
    `).join('')
}

function addNewTask(){
     newTask =   taskInputElmt.value 
      tasks.push(newTask)
     renderTasks()
}

function deleteTask(index){
    tasks.splice(index, 1)
    console.log(tasks)
    renderTasks()
}

ClearAllTasksElmt.addEventListener('click', ()=>{
    tasks = []
    renderTasks()
})

// 2 marks calculator 

let marks = []
inputMarksElmt = document.getElementById("inputMarks")
marksRenderElmt = document.getElementById("marksRender")

function addNewMarks(){
    mrks = Number(inputMarksElmt.value)
    marks.push(mrks)
}

function calculate(){
    totalMArks = 0
    avgMarks = totalMArks/marks.length
    highestMarks = 0
    lowestMarks = Infinity


    marksRenderElmt.innerHTML = `
    <p>Total Marks :  ${totalMArks}</p>
    <p>Average Marks :  ${avgMarks}</p>
    <p>Highest Marks : ${highestMarks}</p>
    <p>Lowest Marks : ${lowestMarks}</p>
    `
}





// 3. search in array 





//4. odd even numbers 

let numbers = [];

        // Add number to array
        function addNumber() {
            const input = document.getElementById("numberInput");
            const message = document.getElementById("message");
            if (input.value.trim() === "" || !Number.isSafeInteger(Number(input.value))) {
                message.textContent = "Please enter a valid whole number.";
                return;
            }
            const number = Number(input.value);
            numbers.push(number);
            input.value = "";
            message.textContent = "";
            displayArray("originalArray", numbers);
            input.focus();
        }

        // Display array values
        function displayArray(elementId, arr) {
            const container = document.getElementById(elementId);
            container.innerHTML = "";
            if (arr.length === 0) {
                container.innerHTML ='<span class="text-muted">No numbers to display.</span>';
                return;
            }
            arr.forEach(function(number) {
                const badge = document.createElement("span");
                badge.className = "badge rounded-pill text-bg-light border text-dark me-2 mb-2 p-2";
                badge.textContent = number;
                container.appendChild(badge);
            });
        }
        // Show even numbers
        function showEven() {
            const evenNumbers = numbers.filter(function(number) {
                return number % 2 === 0;
            });
            displayArray("evenArray", evenNumbers);
        }
        // Show odd numbers
        function showOdd() {
            const oddNumbers = numbers.filter(function(number) {
                return number % 2 !== 0;
            });
            displayArray("oddArray", oddNumbers);
        }
        // Clear all data
        function clearAll() {
            numbers = [];
            document.getElementById("numberInput").value = "";
            document.getElementById("message").textContent = "";
            displayArray("originalArray", []);
            displayArray("evenArray", []);
            displayArray("oddArray", []);
        }

        // Add number using Enter key
        document.getElementById("numberInput")
            .addEventListener("keydown", function(event) {
                if (event.key === "Enter") {
                    addNumber();
                }
            });