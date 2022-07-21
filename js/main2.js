//validacion de campos vacios

const $formulario = document.querySelector("#formulario"),
        $NOMBRE = document.querySelector("#NOMBRE"),
        $WHATSAPP = document.querySelector("#WHATSAPP");

        $formulario.onsubmit = evento =>{
        evento.preventDefault();

          const NOMBRE = $NOMBRE.value,
          WHATSAPP = $WHATSAPP.value;
          //validad
         if ( NOMBRE == "" && WHATSAPP == ""){
        alert("puto")
        //return 
         }else{
        alert("p20uta")
        //return true
        $formulario.submit();
    }   
};