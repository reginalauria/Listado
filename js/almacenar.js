// Función para obtener el listado de ítems del almacenamiento local
function obtenerListado() {
    let items = localStorage.getItem('listadoItems');
    if (items) {
        return JSON.parse(items); // Si existen ítems guardados, los devuelve como array
    } else {
        return []; // Si no hay ítems guardados, devuelve un array vacío
    }
}


function cargarListado(){
    const contenedor = document.getElementById('contenedor');
    contenedor.innerHTML = '';

    let items = obtenerListado();
    items.forEach((item) => {
        const li = document.createElement('li');
        li.textContent = item;
        contenedor.appendChild(li);
});   
};

// Evento para agregar un ítem
document.getElementById('agregar').addEventListener('click', function () {
    const inputItem = document.getElementById('item');
    let nuevoItem = inputItem.value.trim(); // Obtenemos el valor ingresado y lo limpiamos de espacios

    let items = obtenerListado(); // Obtenemos el listado actual
    items.push(nuevoItem); // Agregamos el nuevo ítem
    localStorage.setItem('listadoItems', JSON.stringify(items)); // Guardamos el nuevo listado en el almacenamiento local
    cargarListado(); // Actualizamos la vista del listado
    inputItem.value = ''; // Limpiamos el campo de texto
});

// Evento para limpiar el listado
document.getElementById('limpiar').addEventListener('click', function () {
    localStorage.removeItem('listadoItems'); // Elimina el listado del almacenamiento local
    cargarListado(); // Actualiza la vista para reflejar el listado vacío
});

// Al cargar la página, se actualiza la vista del listado
window.onload = function () {
    cargarListado(); // Mostramos el listado guardado al cargar la página
}; 