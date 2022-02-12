let animales = [
    {nombre: 'Gatito', descripcion: 'sadadasdasd', imagen: 'imagenes/objetos/gato1.jpg'},
    {nombre: 'Zeus', descripcion: 'aaaaa', imagen: 'imagenes/objetos/gato2.jpg'},
    {nombre: 'Negrito', descripcion: 'gdfgdfgdfgdfg', imagen: 'imagenes/objetos/gato3.jpg'},
    {nombre: 'Gatito 2', descripcion: 'bcvbcvbcvb', imagen: 'imagenes/objetos/gato4.jpg'},
    {nombre: 'Cat', descripcion: 'cvsasd', imagen: 'imagenes/objetos/gato5.jpg'},
    {nombre: 'Kitty', descripcion: '', imagen: 'imagenes/objetos/gato6.jpg'},
]
mostrar_animales()
function mostrar_animales(){
    let contenedor_imagenes = document.getElementById('contenedor_imagenes');
    for(let i=0; i<animales.length; i++){
        let obj = animales[i];
        let contenedor = crear_contenedor(obj);
        contenedor_imagenes.appendChild(contenedor);
    }
}
function crear_contenedor(objeto){
    let contenedor_imagen = document.createElement('div');
    contenedor_imagen.setAttribute('class', 'contenedor-imagen');
    
    let imagen = document.createElement('img');
    imagen.setAttribute('src', objeto.imagen);

    let nombre = document.createElement('h2');
    nombre.setAttribute('align', 'center');
    nombre.innerText = objeto.nombre;

    let descripcion = document.createElement('h5');
    descripcion.setAttribute('align', 'center');
    descripcion.innerText = objeto.descripcion;

    contenedor_imagen.appendChild(imagen);
    contenedor_imagen.appendChild(nombre);
    contenedor_imagen.appendChild(descripcion);

    return contenedor_imagen;
}

document.querySelector('#buscador').addEventListener('keyup', function(e){
    // cuerpo de la función
    let busqueda = e.target.value;
    let elementos_donde_buscar = document.querySelectorAll('.contenedor-imagenes .contenedor-imagen');
    elementos_donde_buscar.forEach(function(elemento, indice, arreglo){
        let titulo = elemento.querySelector('h2').innerText;
        let descripcion = elemento.querySelector('h5').innerText;
        if(titulo.toLowerCase().includes(busqueda.toLowerCase()) || 
            descripcion.toLowerCase().includes(busqueda.toLowerCase())){
            elemento.style.display = "";
        }else{
            elemento.style.display = "none";
        }
    })        
});