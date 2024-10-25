const inputBox = document.getElementById("input-box");
// the element id is what you set it to in the in the class row input
// connects to the input box on the site
const listContainer = document.getElementById("list-container")
//the id for the ul
// connects the list container from the html file
function addTask(){
    if(inputBox.value == ''){
        // if the inputBox input is blank
        alert("You must write something!");
            // alert will give notification from the top of the browser
            // input validation to make sure it isn't blank
    }
    else{
        let li = document.createElement("li");
        //when there is something to input it will create a list element and will be stored in the li variable in javascript
        li.innerHTML = inputBox.value;
        //innerHTML means the text inside of. it is attached to the li element. making it equal to the inputBox.value makes it so that what is entered will be assigned to the li text
        listContainer.appendChild(li);
        // list container is a ul element in the html file and the li elements will be made under it
        let span = document.createElement("span");
        // creates the x to the right of the list 
        span.innerHTML = "\u00d7";
        // will add a cross icon to the span tag
        li.appendChild(span);
        // adds a span under the li element
    }
    inputBox.value = "";
    // this makes it so the input box is empty after adding text
    saveData();
    // call the saveData function to save the new list item
}

listContainer.addEventListener("click", function(e){
    if(e.target.tagName === "LI"){
        // checks where clicked if clicked it will add checked class name. the .toggle means that if you click it again it will uncheck it
        e.target.classList.toggle("checked");
        saveData();
        // saveData needs to be added here to remember checked and unchecked list items
    }
    else if(e.target.tagName === "SPAN"){
        // checks to see if you clicked the SPAN(x) and will remove the parent element witch is the list li element
        e.target.parentElement.remove();
        saveData();
        // also here to remember removed list items
    }
}, false);

function saveData(){
    // for saving data in browser so list doesn't disapear
    // needs to be called everytime new data is added
    localStorage.setItem("data", listContainer.innerHTML)
    // will save the innerHTML(text) data saved in listContainer
}
function showTask(){
    // outputs the saveData
    listContainer.innerHTML = localStorage.getItem("data");
    // will give all of the contained stored "data" in the localStorage
}
showTask();