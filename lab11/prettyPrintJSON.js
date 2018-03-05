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

function getREsultsFromOMDB(searchterms) {
  //$("#results").append("<li>" +item +"</li>");
  var url = "http://www.omdbapi.com/?i=tt3896198&apikey=86a5f8a4" + searchterms;
  $getJSON(url, function(jsondata){
    prettyprintJSON(jsondata);

  });
}

function prettyprintJSON(jsondata) {
  var normal = JSON.stringify(jsondata);
  $("resultsbox").append("<p>"+ normal + "</p>");

}
