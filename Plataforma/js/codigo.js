
var pos1 = $("#seccion2 ").offset().top;


$("#leal").click(function(){
$("html").animate({
     scrollTop : pos1
})

});

var pos2 = $("#seccion3 ").offset().top;


$("#aven").click(function(){
$("html").animate({
     scrollTop : pos2
})

});

var pos3 = $("#seccion4 ").offset().top;


$("#silen").click(function(){
$("html").animate({
     scrollTop : pos3
})

});


var pos4 = $("#seccion5 ").offset().top;


$("#deci").click(function(){
$("html").animate({
     scrollTop : pos4
})

});

var pos5 = $("#header ").offset().top;


$("#inicio").click(function(){
$("html").animate({
     scrollTop : pos5
})

});


var miniaturas = document.getElementsByClassName("min");
	var equis = document.getElementById("equis");
	var flotante = document.getElementById("flotante");
     var iPrincipal = document.getElementById("videoprincipal");
	var cuadro = document.getElementById("cuadro");
   
   function mostrarImg (video){
   	if(video == miniaturas[0]){ 
    iPrincipal.setAttribute("src","video/instructivo.mp4")
    flotante.style.top = "0px";
    flotante.style.transitionDuration = ".9s";
   }

   else if(video == miniaturas[1]){ 
     iPrincipal.setAttribute("src","video/proyecto.mp4")
     flotante.style.top = "0px";
     flotante.style.transitionDuration = ".9s";
    }
    else if(video == miniaturas[2]){ 
     iPrincipal.setAttribute("src","video/video.mp4")
     flotante.style.top = "0px";
     flotante.style.transitionDuration = ".9s";
    }
    else if(video == miniaturas[3]){ 
     iPrincipal.setAttribute("src","video/instructivo.mp4")
     flotante.style.top = "0px";
     flotante.style.transitionDuration = ".9s";
    }

    }


   
    function cerrar(){
    	flotante.style.top = "-100vh";
    flotante.style.transitionDuration = ".9s";
    }

    






