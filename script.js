const inputBox = document.getElementById("inputBox");
const listContainer = document.getElementById("list-container");
function addTask()
{
    if(inputBox.value==='')
    {
        alert("You must write something!");
    }
    else{
        let li = document.createElement('li');
        li.innerHTML =inputBox.value;
        listContainer.appendChild(li);
        let span = document.createElement( "span" );
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    inputBox.value = "";
    saveLocal();
}

listContainer.addEventListener("click", function(e){
    if(e.target.tagName === "LI")
    {
        e.target.classList.toggle("checked");
        saveLocal();
    }
    else if(e.target.tagName === "SPAN")
    {
        e.target.parentElement.remove();
        saveLocal();
    }
},false);

function saveLocal()
{
    localStorage.setItem("data", listContainer.innerHTML);
}
function showTask()
{
    listContainer.innerHTML = localStorage.getItem("data");
}showTask();