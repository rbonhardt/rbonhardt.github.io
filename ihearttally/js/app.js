
function toScreen(photos){
  // Using jQuery's generic iterator function:
  // jQuery.each http://api.jquery.com/jQuery.each/

  var time = 300;

  console.log(photos.data);

  $.each(photos.data, function(index, photo){

    // I'll construct the image tag on the fly.
    // The images property contains objects representing images of
    // varying quality. I'll give low_resulution a try.

    setTimeout( function(){ 
    
      if (photo.location != null) {
        var link = photo.link;
        var lat = photo.location.latitude;
        var lon = photo.location.longitude;
        var likes = photo.likes.count;
        //var height = 30 + likes;
        //var width = 30 + likes;
        //var style = "style='height: " + height + "px; width: " + width + "px;'"
        var image = "<img src='"+ photo.images.low_resolution.url + "'/>";
        // console.log(likes, style);
        var caption = photo.caption.text;

        var marker_photo_index = new RichMarker({
          position: new google.maps.LatLng(lat, lon),
          map: map,
          anchor: RichMarkerPosition.BOTTOM,
          animation: google.maps.Animation.DROP,
          content: "<a href='" + link + "' target='_blank'><div class='marker'>"+ image +"<div class='arrow-down'></div><div class='info'><p><i class='fa fa-heart'></i> "+likes+" likes</p><p>"+caption+"</p></div></div></a>"
          });
      } 

    }, time);

    time += 50;

  });

  url = url + "&max_tag_id=" + photos.pagination.next_max_tag_id;
}

function search(){
  $.getJSON(url, toScreen);
}

var map;
var url = "https://api.instagram.com/v1/tags/ihearttally/media/recent?callback=?&client_id=1fa2a12a34d041c0b6396b9c7263679f"

/**
* Called on the intiial page load.
*/
$(document).ready( function() {

  map = new google.maps.Map(document.getElementById('map-canvas'), {
    zoom: 13,
    center: new google.maps.LatLng(30.439477, -84.280604),
    mapTypeId: google.maps.MapTypeId.ROADMAP
  });

  i=0;
  var time = 0;
  while (i<30) {
    setTimeout( function(){ search(); }, time);
    time += 1000;
    i++;
  }

});

