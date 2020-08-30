//Attraverso una chiamata ajax all’Api di boolean avremo a disposizione una decina di dischi musicali.
$(document).ready(function(){
$.ajax({
    type: "GET",
    url: "https://flynn.boolean.careers/exercises/api/array/music",
    success: function (response) {

        leggiDati(response); // evoco la funzione
        $('ul li').on('click', function(){ 
          var questo =$(this).text(); // prelevo il valore da ogni li
          $('.cd').removeClass("active");
          switch(questo){
            case "Rock":
              $('.Rock').addClass('active');
              break;
            case "Metal":
              $('.Metal').addClass('active');
              break;
            case "Jazz":
              $('.Jazz').addClass('active');
              break;
            case "Pop":
              $('.Pop').addClass('active');
              break;
            default: 
              $('.cd').addClass('active');
          }
        });

    },
    error: function(errore){
      alert('errore! ' + errore);
    }
    
    
}); 
});

function leggiDati(operazione){ //utilizzo Handlebars
    // oggetto da clonare
    var source = document.getElementById("entry-template").innerHTML;
    var template = Handlebars.compile(source);

    // ciclo con iterazione per ogni proprietà dell'oggetto e stampa a video
    for(var i=0; i<operazione.response.length; i++){
        var context= template(operazione.response[i]);
        document.querySelector('.cds-container').innerHTML+=context;
      }
}