$(function(){
//document ready
alert("document ready");

  $('#searchform').submit(function(){
    addItemToList("example item");
    return false;
  });
});

function AddItemToList(item) {
  $("#results").append("<li>" +item +"</li>");

}
