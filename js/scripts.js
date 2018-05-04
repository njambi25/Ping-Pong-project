$(document).ready(function() {
    $("form#ping-pongi").submit(function(event) {
      event.preventDefault();
      var pp = parseInt($("input#pp").val());
      var result = pingPongi(pp);
      $("#results").text(result);
    });
  });
pingPongi = function(pp) {
 if (pp % 15 === 0){
    return"pingpong"


} else if (pp % 3 === 0){
  return"ping"

} else if (pp % 5 === 0) {
  return "pong";
  
}else{
  return "pp";
}

}
