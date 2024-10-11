const btn = document.getElementById('create')
const ul = document.getElementsByName('ul')


btn.addEventListener('click', function(){
    let li = document.createElement('li')
    let p = document.createElement('p')
    let text = document.getElementById('toDoText').value
    let delBtn = document.createElement('button')

    li.className = 'toDoTask'
    p.textContent = text
    delBtn.className = 'del'
    delBtn.textContent = 'delete'

    li.appendChild(p)
    li.appendChild(delBtn)

    ul[0].appendChild(li)


    delBtn.addEventListener('click', function(){
        ul[0].removeChild(li)
    })
})