$(document).ready(function(){
   
  
  
  $(document).ready(function(){
    $("#flip").click(function(){
      $("#panel").slideDown(5000);
   
    });
    
   $("#stop").click(function(){
      $("#panel").stop();
   
    });
  });
   
     $("#mudarcor").click(function(){
      $("body").css("background-color","blue");
    });
   
    $("p").on("mouseover",function() {
        $(this).css("color", "red");
    });
    
    
    $("#mostrarTexto").click(function(){
      $("p").show();
    });

    $("#ocultarTexto").click(function(){
        $("p").hide();
       });
    });
    
    $(document).ready(function(){
      $("button").click(function(){
        $("p").hide("slow", function(){
          alert("eu vou te pegar");
        });
      });
    });