let input = document.getElementsById("txt") 
let button = document.getElementsById("add")
let todo_lst = document.getElementsById("list")


todo_array = [] 

window.onload = ()=> {
    todo = JSON.parse(localStorage.getItem("list")) || []
    todo_array.forEach(val)
}

button.addEventListener("click", ()=> {
    todo_array.push(input.value)
    localStorage.setItem("list", JSON.stringify(todo_array))
    addtodo(input.value) 
    input.value = ""
})

function addtodo(val){
    let para = document.createElement("p")
    para.innerText = val
    todo_lst.appendchild(para)
   
    para.addEventListener("click", ()=> {
        para.style.textDecoration = "line-through"
        remove(val)
    })
    para.addEventListener("dblclick" , ()=> {
        todo_lst.removechild(para)
        remove(val)
    
    })
}
function remove(val){
    let index = todo_array.indexOf(val)
    if(index>-1)
        todo_array.splice(index,1)
}

