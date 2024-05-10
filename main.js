const submitBtn = document.querySelector('#submit__btn')
const editBtn = document.querySelector('.edit')
const deleteBtn = document.querySelector('.delete')

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

        const taskEditBtn = editBtn.cloneNode('true')
        const taskDeleteBtn = deleteBtn.cloneNode('true')


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

