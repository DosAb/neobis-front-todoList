const submitBtn = document.querySelector('#submit__btn')
const task = document.querySelector('#task')
// const submitBtn = document.querySelector('#submit__btn')
submitBtn.addEventListener('click', (event)=>{
    event.preventDefault()
    console.log(task.value)
})