const formulario = document.querySelector('.form');

    formulario.addEventListener('submit', function(event){
        event.preventDefault();
        const name = document.querySelector('#name').value;
        const date = document.querySelector('#birth-date').value;

        console.log("Nome: " + name);
        console.log("data nascimento: " + date);


    });