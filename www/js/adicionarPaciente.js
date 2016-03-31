$(document).ready(function(){
    
    $("#voltarMenu").on("click", function(){
        $(location).attr('href', '../menu/menu.html');
    });
    
});

function sair(){
    $(location).attr('href', '../index.html');
}