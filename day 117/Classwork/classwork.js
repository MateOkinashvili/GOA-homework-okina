document.getElementById('jokeBtn').addEventListener('click', async () => {
    const setup = document.getElementById('setup');
    const punch = document.getElementById('punchline');
    
    setup.textContent = '';
    punch.textContent = '';

    const response = await fetch('https://v2.jokeapi.dev/joke/Any?type=twopart&safe-mode');
    const data = await response.json();
    
    setup.textContent = data.setup;
    
    setTimeout(() => {
        punch.textContent = data.delivery;
    }, 3000);
});