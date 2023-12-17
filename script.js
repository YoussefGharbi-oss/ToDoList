let input = document.querySelector('.task-input') 
let addbtn = document.querySelector('.add-btn')
let List = document.querySelector('.List') 
addbtn.addEventListener("click" , function(event){
    if(!input.value){
        alert('ikteb haja yehdik rabi !!!!')
    }
    else{
        event.preventDefault()

     let li = document.createElement("li") 
     li.innerHTML = `<div class="taskItem">
     <p>${input.value}
     <button  onclick=RemoveTask()><img class="bin" src="./trash-bin.png"</button>
     </div>`
     List.appendChild(li)
    }
    input.value = ""
    
})
function RemoveTask(event){
    event.preventDefault() 
    let TaskItem = event.target.closest("li") 
    TaskItem.remove()

}