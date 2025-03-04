



const buttons= document.querySelectorAll('.complete-button')

for(const button of buttons){
    button.addEventListener("click",function(){
        alert("Board Update Successfully")
        document.querySelectorAll('.complete-button').disabled = true;
        const amountOfTask = document.getElementById("quantity");
        const totalTasks = document.getElementById("total");
        amountOfTask.innerText =  parseInt(quantity.innerText) - 1; 
        totalTasks.innerText =  parseInt(totalTasks.innerText) + 1; 

        const taskHistorys = document.getElementById("history")
        const taskhistory = document.createElement("history")
        taskhistory.innerText = `complete the task`
        taskHistorys.appendChild(taskhistory);
        
        
    })
}

const themeButton=document.getElementById("theme-btn")
const colors=["#F4F7FF","#FFFAE6","#F7CEE2","#CCCAF0", "#CFDFEF"]
let count=1
document.body.style.backgroundColor=colors[0]

themeButton.addEventListener('click',function(){
    document.body.style.backgroundColor=colors[count]
    if(count>=colors.length-1){
        count=0
    }
    else{
        count++
    }
})

    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    



