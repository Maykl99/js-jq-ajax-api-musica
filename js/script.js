$(document).ready(function(){
      //7. utilizzo Handlebars
    var source = document.getElementById("entry-template").innerHTML;
    var template = Handlebars.compile(source);
    
  $.ajax({
      type: "GET",
      url: "https://flynn.boolean.careers/exercises/api/array/music",
      success: function (response) {
          for(var i=0; i<response.response.length; i++){
              console.log(response.response[i])
              var context= template(response.response[i]);
              document.querySelector('.cds-container').innerHTML+=context;
          }
      },
      error:{
        
      }
      
  });




});