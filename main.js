const submitBtn = document.querySelector('#submit__btn')
const editBtn = document.querySelector('.edit')
const deleteBtn = document.querySelector('.delete')
const completeInput = document.querySelector('.task-complete')

const tasks = document.querySelector('.tasks')
const taskInputResult = document.querySelector('.task-result')

const task = document.querySelector('#task')
// const submitBtn = document.querySelector('#submit__btn')


submitBtn.addEventListener('click', (event)=>{
    event.preventDefault()
    if(task.value)
    {
        const taskNew = document.createElement('div')
        taskNew.className = 'task-container'

        const input = document.createElement('input')
        input.className = 'task-result'
        input.value = task.value
        input.disabled = true

        // const taskEditBtn = editBtn.cloneNode('true')
        const taskEditBtn = document.createElement('button')
        taskEditBtn.className = 'edit'
        taskEditBtn.textContent = 'edit'
        const taskDeleteBtn = document.createElement('button')
        taskDeleteBtn.className = 'delete'
        taskDeleteBtn.textContent = 'delete'
        const taskCompleteBtn = document.createElement('input')
        taskCompleteBtn.type = 'checkbox'
        taskCompleteBtn.className = 'task-complete'
        // const taskDeleteBtn = deleteBtn.cloneNode('true')
        // const taskCompleteBtn = completeInput.cloneNode('true')


        //Edit Button
        taskEditBtn.addEventListener('click', (event)=>{
            event.preventDefault()
            input.disabled = false
        })
        
        //Delete Button
        taskDeleteBtn.addEventListener('click', (event)=>{
            event.preventDefault()
            taskNew.remove()
        })

        taskCompleteBtn.addEventListener('click', (event)=>{
            event.target.checked == true ? input.style.textDecoration = 'line-through' : input.style.textDecoration = 'none'
            console.log(event)
            
            // taskNew.remove()
        })

        taskNew.prepend(taskCompleteBtn)
        taskNew.appendChild(input)
        taskNew.appendChild(taskEditBtn)
        taskNew.appendChild(taskDeleteBtn)
    
        tasks.appendChild(taskNew)
    }else
    {
        alert('write task')
    }

})

editBtn.addEventListener('click', (event)=>{
    event.preventDefault()
    taskInputResult.disabled = false
})

