//Usando jQuery - chamando a função
$(document).ready(function(){
    $(".owl-carousel").owlCarousel({
        
        loop:true,  //imagens vão passando e qdo chega na última, recomeça o slide
        autoplay: 2000, //Set AutoPlay to 3 seconds
   
        items : 6, //itens mostrados por vez
        itemsDesktop : [1199,3],
        itemsDesktopSmall : [979,3]
   
    });
});