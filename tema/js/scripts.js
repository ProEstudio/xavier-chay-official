$(function(){
   $("#toggle-menu").on("click",function(){
   	 $(this).next().slideToggle();
   })
});
//SLIDER
//GUARDAR EL CONTENEDOR PRINCIPAL
var c = $('.slider');
//GUARDAR LAS SECCIONES DE SLIDER
var s = c.find('section');
//GUARDAR EL NUEMRO DE SECCIONES 
var n = s.length;
//CREAR UN CONTENEDOR INTERNO
c.wrapInner('<div class="slider-inner" />');
var ci = $('.slider-inner');
//DEFENIR EL ANCHO DEL CONTENEDOR
ci.css('width',100*n+'%');
s.css('width',100/n+'%');
//CREAR BOTONES PARA AVANZAR Y RETROCEDER
/*c.after('<div class="icon-derecha" id="next"></div>')
c.after('<div class="icon-izquierda" id="prev"></div>')
//GUARDAR LOS BOTONES EN VARIABLES
var next = $('#next');
var prev = $('#prev');
next.add(prev).wrapAll('<div class="slider-nav"></div>')
/*
	CREAR LA FUNCIN PARA NAVEGAR ENTRE LOS SLIDES


//INDICE PARA MOVERNOS ENTRE LOS SLIDES
var i = 0;
//ESCRIBIR LA FUNCION PARA MOVERSE
function mover(){
	if(i===0){
		ci.css('left', 0);
	}else if(i>0){
		ci.css('left','-'+100*i+'%')
	}
}
next.on('click' , function(){
	if(i<n-1){
		i++;
		mover();
	}
});
prev.on('click' , function(){
	if(i>0){
		i--;
		mover();
	}
});
*/
var g = $(".galeria")
var e = g.find(".evento")
var ne = e.length