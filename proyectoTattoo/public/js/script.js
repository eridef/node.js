//menu
/*
const buscar = document.getElementById('submit');
const input = document.getElementById('busqueda');
buscar.onclick = function(evento){
    evento.preventDefault();
    input.style;
    input.style.visibility = 'visible';
}
*/

//busqueda 

const crearListaDeProductos = (resultado) => {
    const lista = document.createElement('ul')
    const contenedor = document.querySelector('#busqueda')
    
    productos.forEach((resultado) => {
      const elemento = document.createElement('li')
      elemento.textContent = resultado.nombre
      lista.appendChild(elemento)
    })
 
    contenedor.appendChild(lista)
  }


//script jquery de home-artists

var $container	= $('#ib-container'),
$articles	= $container.children('article'),
timeout;

$articles.on( 'mouseenter', function( event ) {
    
var $article	= $(this);
clearTimeout( timeout );
timeout = setTimeout( function() {
    
    if( $article.hasClass('active') ) return false;
    
    $articles.not($article).removeClass('active').addClass('blur');
    
    $article.removeClass('blur').addClass('active');
    
}, 75 );

});

$container.on( 'mouseleave', function( event ) {

clearTimeout( timeout );
$articles.removeClass('active blur');

});

//fin jquery home-artists

//img news
let imagenes = ['new0byn.png', 'new1byn.png', 'new2byn.png', 'new3byn.png'];

let section = document.getElementById('left');

imagenes.forEach(function(foto){
    let imagen = document.createElement('img');
    let div = document.createElement('div');
    let titulo = document.createElement('h4');
    let link = document.createElement('a');
    titulo.textContent = 'Gracias por el aguante • Pilar White';
    link.href = 'DB propiedad link'
    div.classList.add('post');
    imagen.src = `/img/pilarWhite/news/${foto}`;

    imagen.onmouseover = function(){
        //modifico el nombre de la foto
        const source = imagen.src.replace('byn', '');
        //reemplazo el src
        imagen.src = source;
    }

    imagen.onmouseout = function(){
        //modifico el nombre de la foto
        const source = imagen.src.replace('.png', 'byn.png');
        //reemplazo el src
        imagen.src = source;
    }

    div.appendChild(imagen);
    div.appendChild(titulo);
    div.appendChild(link);
    section.appendChild(div);
})
//fin news

//eventos
const eventUno = document.querySelector('.event');
const eventDos = document.querySelector('.event1');
const eventTres = document.querySelector('.event2');

eventUno.onmouseover = function(){
    const div = document.querySelector('.event_1');
    div.style;
    div.style.visibility = 'visible';
}

eventUno.onmouseleave = function(){
    const div = document.querySelector('.event_1');
    div.style;
    div.style.visibility = 'hidden';}

eventDos.onmouseover = function(){
    const div = document.querySelector('.event_2');
    div.style;
    div.style.visibility = 'visible';
}

eventDos.onmouseleave = function(){
    const div = document.querySelector('.event_2');
    div.style;
    div.style.visibility = 'hidden';
}
eventTres.onmouseover = function(){
    const div = document.querySelector('.event_3');
    div.style;
    div.style.visibility = 'visible';
}

eventTres.onmouseleave = function(){
    const div = document.querySelector('.event_3');
    div.style;
    div.style.visibility = 'hidden';
}
//fin eventos
