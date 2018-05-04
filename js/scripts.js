var pp;
$(document).ready(function() {
    $("form#ping-pongi").submit(function(event) {
          pp = parseInt($("input#pp").val());
          $("#results ul").text("");
          pingpongi();
          event.preventDefault();
    });
  });


  function pingpongi(){

for(var i=1;i<=pp; i++){
 if (i % 15 === 0){
   $("#results ul").append("<li>PingPong</li>");

 } else if (i % 5 === 0) {
    $("#results ul").append("<li>Pong</li>");

 } else if (i % 3 === 0){
    $("#results ul").append("<li>Ping</li>");

 }else{
    $("#results ul").append("<li>" +i.toString() +"</li>");

      }
  }
 };
