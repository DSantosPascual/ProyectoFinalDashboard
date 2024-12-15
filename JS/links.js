//! Recuperar el listado de links desde el localStorage
const listaDeLinks = JSON.parse(localStorage.getItem('links')) || [];

//! me traigo los elementos del DOM
const inputTituloLink = document.getElementById('link-title');
const inputUrlLink = document.getElementById('link-url');
const botonAñadirLink = document.getElementById('add-link-btn');
const contenedorLinks = document.getElementById('links-list');

function mostrarLinks() {
    contenedorLinks.innerHTML = ''; 
    listaDeLinks.forEach((link, indice) => {
        const elementoLink = document.createElement('div');
        elementoLink.classList.add('link-item');
        
        elementoLink.innerHTML = `
            <a href="${link.url}" target="_blank" class="link-title">${link.titulo}</a>
            <button class="delete-link-btn" data-indice="${indice}">Eliminar</button>
        `;
        contenedorLinks.appendChild(elementoLink); 
    });
}

//! guardar los links en el localStorage
function guardarLinks() {
    localStorage.setItem('links', JSON.stringify(listaDeLinks));
}

//! añadir un nuevo link
function añadirLink() {
    const titulo = inputTituloLink.value.trim();
    const url = inputUrlLink.value.trim();

    if (titulo && url) {
        const nuevoLink = { titulo, url };
        listaDeLinks.push(nuevoLink); 
        guardarLinks(); 
        mostrarLinks(); 

        inputTituloLink.value = '';
        inputUrlLink.value = '';
    } else {
        alert('Por favor, complete ambos campos.');
    }
}

//! eliminar un link
function eliminarLink(evento) {
    if (evento.target.classList.contains('delete-link-btn')) {
        const indice = evento.target.getAttribute('data-indice');
        listaDeLinks.splice(indice, 1); 
        guardarLinks(); 
        mostrarLinks(); 
    }
}

botonAñadirLink.addEventListener('click', añadirLink);
contenedorLinks.addEventListener('click', eliminarLink);

mostrarLinks();
