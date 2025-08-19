// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let participantes = "";
let amigos = [];

// Función agregar amigos(participantes)
function agregarAmigos() {
    let nombresIngresados = document.getElementById('amigo').value.trim(); // Se agrega una variable nombres ingresados para el metodo elemeto buscado por su ID
    //El metodo trim 'Elimina los espacios en blanco asi nombresIngresados y el nombre iongresado sera identicos'
    // Validación de espacios vacios
    if(nombresIngresados === "") { //si el campo donde se agregan los amigos esta vacio se agrega saltara la alerta Agregar nombre de amigo 
        alert('Agregar nombre de amigo');
        console.log(nombresIngresados);
        return;
    }

    //Validación nombres (que NO se repitan)
    if(amigos.includes(nombresIngresados)) {// el metodo includes verifica que dentro del arrays exista un elemento
        alert('Este amigo ya fue ingresado');
        return;
    }

    //Validación solo letras... NO NUMEROS
    if (nombresIngresados.match(/[0-9]/)){
        alert ('El nombre NO puede contener números');
        return;

    }

    //Agregar elemento a la lista
    amigos.push(nombresIngresados);
    console.log(amigos);

    //Limpiamos el input añadir
    document.getElementById('amigo').value='';

    //Se muestra la lista de amigos actualizada *se debe crear un función mostrarlistaAmigos...ABAJO
    mostrarListaAmigos();

    alert('Amigo agregado correctamente');  
}
//Función de agregar amigos a lista (agrega-limpia y vuelve agregar)
function mostrarListaAmigos() { //Genera la función de lista de amigos. 
    let lista = document.getElementById('listaAmigos');

    //Limpiar lista se ocupa textContent mas seguro 'NO INTERPRETA HTML, lo toma como un texto'
    lista.textContent ='';    

    //Agregar a lista de amigos agregamos al contenedor principal de la lista ul un li.
    amigos.forEach(function(amigo) {//1.- el metodo de array se ejecuta para cada elemento
        let li = document.createElement('li'); //2.- Crea un nuevo elemtno li (lista)
        li.textContent = amigo;//3.- Asigna el texto ingresado al li, de la función amigo 
        lista.appendChild(li); //4.- esto agrega el li como hijo al contenedor principal ul

    });
}
// Función sorteo

function sortearAmigo() {
    if (amigos.length === 0) {
    alert('No hay amigos para sotear');
    return;
    }

    let indiceAleatorio = Math.floor(Math.random() * amigos.length);
    let amigoSorteado = amigos[indiceAleatorio];

    let resultado = document.getElementById('resultado');
    resultado.innerHTML = `<li> El amigo secreto es: ${amigoSorteado}<li>`;
        
        //Ocultar lista de amigos
        let lista = document.getElementById('listaAmigos');
        lista.style.display = 'nore';
}   

