$.get("/articles", function(data) {
  for (var i = 0; i < data.length; i++) {
    $("#articles").append("<p data-id='" + data[i]._id + "'>" + data[i].title + "<br />" + data[i].link +"</p>" + 
      "<button class='savebtn' savebtn-id=" + data[i]._id +">Save Article</button>");
  }
});

$(document).on("click", ".savebtn", function() {
  var thisId = $(this).attr("savebtn-id");
  $.ajax({
    method: "POST",
    url: "/saveArticle/" + thisId,
  }).done(function(data) {
    location.reload();
  });
});