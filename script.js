const input = document.querySelector('#buscador');

document.querySelector('#search').addEventListener('click', (e) => {
    e.preventDefault();
    
    input.classList.toggle('visible');
    input.value = '';
});