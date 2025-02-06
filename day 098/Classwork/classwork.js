const archeva = document.getElementById('archeva');
const saved = localStorage.getItem('bg');
if (saved) document.body.style.backgroundColor = saved;
archeva.value = saved;

archeva.addEventListener('input', () => {
    document.body.style.backgroundColor = archeva.value;
    localStorage.setItem('bg', archeva.value);
});
