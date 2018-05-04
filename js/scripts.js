$(document).ready(function() {
    $("form#ping-pongi").submit(function(event) {
      event.preventDefault();
      var pp = parseInt($("input#pp").val());
      var result = pingPongi(pp);
      $("#results").text(result);
    });
  });
pingPongi = function(pp) {
 if (pp % 3 === 0){
    return"ping"
}
  };
