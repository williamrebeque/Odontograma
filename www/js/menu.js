
$(document).ready(function(){
    var x = 0;
    var array = [1,2,3,4,5,6,7,8,9,10];
    var div = "<div style='width: 100%; height: 100%;'>";
    div += "<table style='width: 100%; height: 100%;'><tr>";
    for(y = 0; y < 8; y++){
        div += "<td><div>"+array[y]+"</div></td>";
        if(y == 3){
            div += "</tr><tr>";
        }
    }
    
    div += "</table></div>";
    $("#pacientes").append(texto);
});


function sair(){
    $(location).attr('href', '../index.html');
}

