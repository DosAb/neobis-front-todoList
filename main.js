const submitBtn = document.querySelector('#submit__btn')
const tasks = document.querySelector('.tasks')

const task = document.querySelector('#task')
// const submitBtn = document.querySelector('#submit__btn')


submitBtn.addEventListener('click', (event)=>{
    event.preventDefault()
    if(task.value)
    {
        console.log(task.value)
        const taskNew = document.createElement('div')
        taskNew.className = 'task-container'
        const input = document.createElement('input')
        input.value = task.value
        taskNew.appendChild(input)
    
        tasks.appendChild(taskNew)
    }else
    {
        alert('write task')
    }

})

