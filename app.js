$(document).ready(function() {

  $("#view").click(function(e) {
    var text = $("#input").val();
    if (text.trim() != "") {
//       $.ajax({
//         url: 'https://en.wikipedia.org/w/api.php?action=query&list=search&srsearch=' + text + '&utf8=true&format=json',
//         //data: queryData,
//         dataType: 'jsonp',
//         type: 'GET',
//         success: function(data) {
//           $('.result').empty();
//           for(var el of data.query.search){
//             $('.result').append('<p><a href="https://en.wikipedia.org/wiki/' + el.title + '" target="_blank">' + el.title + '</a></p>');
//           }
//         },
        
//       });
      $.get("https://en.wikipedia.org/w/api.php?action=query&list=search&srsearch=" + text + "&utf8=true&format=json", function(data){
        $('.result').empty();
        for(var el of data.query.search){
          $('.result').append('<p><a href="https://en.wikipedia.org/wiki/' + el.title + '" target="_blank">' + el.title + '</a></p>');
        }
      }, "jsonp")

    }

  });

  $("#random").click(function() {

    window.open("https://en.wikipedia.org/wiki/Special:Random");
  });
});