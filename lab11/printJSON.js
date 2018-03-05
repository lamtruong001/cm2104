$(function(){
//document ready
alert("document ready");

  $('#searchform').submit(function(){
    var serachterms = $ ("#searchterms").val();
    getResultsFromOMDB (searchterms);
    //addItemToList(searchterms);
    return false;
  });
});

function getResultsFromOMDB(searchterms) {
  //$("#results").append("<li>" +item +"</li>");
  var url = "http://www.omdbapi.com/?i=tt3896198&apikey=86a5f8a4&s=" + searchterms;
  $.getJSON(url, function(jsondata){
    printJSON(jsondata);

  });
}

function printJSON(jsondata) {
  var normal = JSON.stringify(jsondata);
  $("resultsbox").append("<p>"+ normal + "</p>");

}
