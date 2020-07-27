
let btnMovimientoMenu = document.querySelector("#btnMovimientoMenu");
let divContenedorMenu = document.querySelector("#divContenedorMenu");


$("#divContenidoMenu").hide(); //Escondemos las opociones del menu 


//efeceto de minimizar y extender menu
btnMovimientoMenu.addEventListener('click', (e)=>{
   
    if(divContenedorMenu.classList.contains('divBarraMenuMi')){
                //Cunado el menu esta minimizado
        divContenedorMenu.classList.remove('divBarraMenuMi');
        divContenedorMenu.classList.add('divBarraMenuEx');
        btnMovimientoMenu.classList.add('btnMostrarMenuMinimizado');
        btnMovimientoMenu.classList.add('btnMostrarMenuExtendido');
        btnMovimientoMenu.innerHTML = '<i class="fas fa-minus"></i>';  
        $("#divContenidoMenu").show();
    }else{
                //Cuando el menu no esta minimizado 
        divContenedorMenu.classList.remove('divBarraMenuEx');
        divContenedorMenu.classList.add('divBarraMenuMi');
        btnMovimientoMenu.classList.remove('btnMostrarMenuExtendido');
        btnMovimientoMenu.classList.add('btnMostrarMenuMinimizado');
        btnMovimientoMenu.innerHTML = '<i class="fas fa-plus"></i>';  
        $("#divContenidoMenu").hide();
    }

});