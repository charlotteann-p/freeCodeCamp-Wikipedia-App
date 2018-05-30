// $(document).ready(function(){
//   alert("jquery loaded");
// });

document.getElementById('searchbutton').addEventListener('click', function() {
  var searchtext = document.getElementById('searchbox').value;
  
  $("#resultslist").empty();
  
  var api = "https://en.wikipedia.org/w/api.php?action=query&origin=*&format=json&generator=search&gsrnamespace=0&gsrlimit=5&gsrsearch='"+ searchtext +"'";
  var xhr = new XMLHttpRequest();

  xhr.open ('GET', api, true);

  xhr.onload = function() {
    
    var data = JSON.parse(this.response);
    for (var i in data.query.pages) {
      console.log(data.query.pages[i].title);
      var title = data.query.pages[i].title;
      var link = "https://en.wikipedia.org/wiki/"+title.replace(/[\s]/g, "_");
      var tag = "<a href="+link+">"+title+"</a>";
      var searchresult = document.createElement("li");
      searchresult.innerHTML = (tag);
      document.getElementById("resultslist").appendChild(searchresult);
      //document.getElementById("resultslist").appendChild(tag); 
     
        }
    }
  xhr.send();

});
 

