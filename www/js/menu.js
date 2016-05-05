
$(document).ready(function(){
    /*
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
    */
    var x = 1;
    var paginaTotal = 2;
    $("#pag_avancar").on("click", function(){
        if(x < paginaTotal){
            var divAtual = "#pacientes_" + x;
            x++;
            var divProx = "#pacientes_" + x;
            $(divAtual).hide("slow");
            $(divProx).show("slow");
            if(x == paginaTotal){
                /*mudar o botao de prox. pagina para cinza pois nao pode avancar mais*/
            }
        }
    });
    
    $("#pag_voltar").on("click", function(){
        if(x > 1){
            var divAtual = "#pacientes_" + x;
            x--;
            var divProx = "#pacientes_" + x;
            /*pesquisar .toggle*/
            $(divAtual).hide("slow");
            $(divProx).show("slow");
            if(x == paginaTotal){
                /*mudar o botao de pagina anterior para cinza pois nao pode voltar mais*/
            }
        }
    });
    
    $("#adicionarPaciente").on("click", function(){
        $(location).attr('href', '../Paciente/adicionarPaciente.html');
    });
    
});


function sair(){
    $(location).attr('href', '../index.html');
}

function avancarPagina(){
    
}

