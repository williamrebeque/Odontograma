$(document).ready(function(){
    
    
    $("#btnOK").on("click", function(){
       logar();
    }); 

});


function logar(){
    var login = $("#txtLogin").val();
    var senha = $("#txtSenha").val();
    
    //Verificar no servidor
     var verificacao = false;
    if(login.trim() == "william" && senha == 123)
        verificacao = true;
    
    if(verificacao){
        
        $(location).attr('href', 'menu/menu.html');
        
        
    }else{
        /*
        options = {
            priority : 'success', title : 'Title', message : 'Your message here'}

            { priority : 'info', title : 'Title', message : 'Your message here'}

            { priority : 'warning', title : 'Title', message : 'Your message here'}

            { priority : 'danger', title : 'Title', message : 'Your message here'}
        }
        */
        var options = {
            title : "Inválido",
            message : "Usuario ou senha invalidos",
            priority : 'danger'
        };
        
        $.toaster(options);
    }
    
}
/*
function onAppReady() {
    if( navigator.splashscreen && navigator.splashscreen.hide ) {   // Cordova API detected
        navigator.splashscreen.hide() ;
    }
}
document.addEventListener("app.Ready", onAppReady, false) ;*/

var onDeviceReady=function(){                             // called when Cordova is ready
   if( window.Cordova && navigator.splashscreen ) {     // Cordova API detected
        navigator.splashscreen.hide() ;                 // hide splash screen
    }
} ;
document.addEventListener("deviceready", onDeviceReady, false);

