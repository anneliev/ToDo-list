var listItem = document.getElementById("listItem");
var submitButton = document.getElementById("submit");
submitButton.onclick = addToDo;
listItem.onkeypress = keyPress;

function keyPress (){
    if(event.keyCode === 13){
        addToDo();
        return false;
    }
    return true;
}

function addToDo() {
    var textInput = document.getElementById("listItem");
    var text = textInput.value;   
    if (text === ""){
        alert("I should be doing more than nothing, type something!");
    }else {
        var toDoList = document.getElementById("toDoList");  
        var toDoTask = document.createElement("li");
        toDoTask.innerHTML = text;
        toDoList.appendChild(toDoTask);
        var removeButton = document.createElement("button");
        var doneButton = document.createElement("button");
        doneButton.className = "donBut";
      	removeButton.className = "remBut";
        removeButton.innerHTML = "Remove";
        doneButton.innerHTML = "Done";
        toDoTask.appendChild(removeButton);
        toDoTask.appendChild(doneButton);
        removeButton.addEventListener("click", function(){
            toDoTask.parentNode.removeChild(toDoTask);
        });
        doneButton.addEventListener("click", function() {
            var doneList = document.getElementById("doneList");  
            var doneTask = document.createElement("li");
            doneList.appendChild(toDoTask);
            this.parentNode.removeChild(this);    
        });
    }
    textInput.value = "";
}
