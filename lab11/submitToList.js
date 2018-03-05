$(function(){
//document ready
alert("document ready");

  $('#searchform').submit(function(){
    var serachterms = $ ("#searchterms").val();
    addItemToList(searchterms);
    return false;
  });
});

function AddItemToList(item) {
  $("#results").append("<li>" +item +"</li>");

}
