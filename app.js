const titulo = document.getElementById('titulo');

titulo.textContent = 'Tienda de informática';

const mensaje = document.getElementById('mensaje');
mensaje.classList.add('destacado'); //le damos lo que tengo en destacado a mensaje

//ClassList.add()  añade una clase a un elemento
//ClassList.remove()  elimina una clase de un elemento
//ClassList.toggle()  crea la clase si no la tiene o la elimina si la tiene
//ClassList.contains()  verifica si un elemento tiene una clase específica