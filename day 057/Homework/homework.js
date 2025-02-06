const p = document.getElementById('text')
const img = document.getElementById('img')

p.addEventListener('mouseover', function() {
    img.style.display = 'block';
});

p.addEventListener('mouseout', function() {
    img.style.display = 'none';
});