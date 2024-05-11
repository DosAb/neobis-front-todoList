const submitBtn = document.querySelector('#submit__btn')



const tasks = document.querySelector('.tasks')
const task = document.querySelector('#task')


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

        //Add 
        const taskEditBtn = document.createElement('button')
        taskEditBtn.className = 'edit'
        taskEditBtn.textContent = 'edit'
        const taskDeleteBtn = document.createElement('button')
        taskDeleteBtn.className = 'delete'
        taskDeleteBtn.textContent = 'delete'
        const taskCompleteBtn = document.createElement('input')
        taskCompleteBtn.type = 'checkbox'
        taskCompleteBtn.className = 'task-complete'

        //Add checkbox variation
        const category = document.querySelector('input[name="category"]:checked').value
        if(category == 'business')
        {
            taskCompleteBtn.style.boxShadow = 'inset 0px 0px 2px 2px var(--btn-color-blue)'
            taskCompleteBtn.classList.add('checkbox-blue')
        }else{
            taskCompleteBtn.style.boxShadow = 'inset 0px 0px 2px 2px var(--btn-color-pink)'
            taskCompleteBtn.classList.add('checkbox-pink')
        }
        // category == 'business' ? taskCompleteBtn.style.boxShadow = 'inset 0px 0px 2px 2px var(--btn-color-blue)' : taskCompleteBtn.style.boxShadow = 'inset 0px 0px 2px 2px var(--btn-color-pink)'


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

