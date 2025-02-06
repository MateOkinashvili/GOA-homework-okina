document.body.children[0].textContent = 'mate';
document.body.children[0].style.color = 'blue';

console.log(document.getElementById('okinaa'));

function ElementById(id) {
    const elements = document.all;

    for(let i = 0; i < elements.length; i++) {
        if(elements[i].id === id) {
            return elements[i];
        }
    }
}

console.log(ElementById('okinaa'))