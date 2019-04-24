// ********** Promises con Ajax ********** //
console.log('***** 16-Promises con Ajax *****');
// ********** Promises con Ajax ********** //

const descargarUsuarios = cantidad => new Promise ((resolve, reject) => {
    // Pasar la cantidad a la API
    const api = `https://randomuser.me/api/?results=${cantidad}&nat=us`;

    // Llamado AJAX
    const xhr = new XMLHttpRequest();

    // Abrir la conexión
    xhr.open('GET', api, true);

    // On load
    xhr.onload = () => {
        if(xhr.status === 200) {
            resolve(JSON.parse(xhr.responseText).results);
        } else {
            reject(Error(xhr.statusText));
        }
    }

    // Opcional (on error)
    xhr.onerror = (error) => reject(error);

    // Send
    xhr.send();

});

descargarUsuarios(10)
    .then(
        miembros => imprimirHTML(miembros),
        error => console.error(
            new Error('Hubo un error ' + error)
        )
    )

function imprimirHTML(usuarios) {
    let html = '';
    usuarios.forEach(usuario => {
        //console.log(usuario);
        html += `
            <li>
                Nombre: ${usuario.name.first} ${usuario.name.last}
                Pais: ${usuario.nat}
                Imagen:
                    <img src="${usuario.picture.medium}">
            </li>
        `;
    });

    const contenedorApp = document.querySelector('#appPA');

    contenedorApp.innerHTML = html;

    console.log(usuarios);
}

console.log('--------------------'); //20