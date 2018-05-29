document.getElementById('searchbutton').addEventListener('click', function() {
  var searchtext = document.getElementById('searchbox').value;
  
  var api = "https://en.wikipedia.org/w/api.php?action=query&origin=*&format=json&generator=search&gsrnamespace=0&gsrlimit=5&gsrsearch='"+ searchtext +"'";
  var xhr = new XMLHttpRequest();

  xhr.open('GET', api, true);

  xhr.onload = function() {
    
    var data = JSON.parse(this.response);
    for (var i in data.query.pages) {
      console.log(data.query.pages[i].title);
      // var searchresult = document.createElement("li");
      // searchresult.value = data.query.pages[i].title;
      // document.getElementById("resultslist").appendChild(searchresult); 
      var title = data.query.pages[i].title;
      title.innerHTML = '<a href="https://wikipedia.org/wiki/"+title+">+title+</a>';
      document.getElementById("resultslist").append("<li>");
      document.getElementById("resultslist").append(title);
      document.getElementById("resultslist").append("</li>");

        }
    }
 xhr.send();

});
