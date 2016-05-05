$(document).ready(function(){
    
    $("#voltarMenu").on("click", function(){
        $(location).attr('href', '../menu/menu.html');
    });
    
    $("#txtCidadePaciente").on("focus", function(){
        
        //$("#menu").css("margim-bottom", "5%");
        
    });
    
});

function sair(){
    $(location).attr('href', '../index.html');
}