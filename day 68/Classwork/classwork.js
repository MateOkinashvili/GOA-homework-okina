const divElements = document.getElementsByTagName('div')
for(const div of divElements){
    div.addEventListener('click', () =>{
        console.log('clicked on div with id: ${div.id}');
    });
}

for(const div of divElements){
    div.addEventListener('click', () => {
        console.log('clicked on div with id: ${div.id}');
        true
    });
}

const next = document.getElementById('next');
const prev = document.getElementById('prev');
const img = document.querySelectorAll('img');

const imgArr = ["devon.png", "levan.png", "denis.png","ziraqa.png", "samushia.png", "brzenk.png"];
let currentIndex = 0

next.addEventListener('click', function(){
    currentIndex++;
    if(currentIndex >= imgArr.length){
        currentIndex = 0;
    }

    img.src = imgArr[currentIndex]
});

prev.addEventListener('click', function(){
    currentIndex--;
    if(currentIndex > 0){
        currentIndex = 5;
    }
    img.src = imgArr[currentIndex]
});