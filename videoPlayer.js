window.document.onkeydown = function(e) {
    if (!e) {
      e = event;
    }
    if (e.keyCode == 27) {
        openModalVideos();
    }
  }
  
  function openModalVideos() {
    var lightBoxVideo = document.getElementById("VisaChipCardVideo");
    var htmlBody = "";

    htmlBody += "<link rel='stylesheet' href='https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css'>";
    htmlBody += "<div id='light' >";
    htmlBody += "   <a class='boxclose' id='boxclose' onclick='closeModalVideos();'><i class='fa fa-times' aria-hidden='true'></i></a>";
    htmlBody += "   <video id='VisaChipCardVideo' width='600' controls preload='auto' data-setup='{ \"playbackRates\": [1, 4] }'>";
    htmlBody += "       <source src='https://www.w3schools.com/html/mov_bbb.mp4' type='video/mp4' >";
    htmlBody += "   </video>";
    htmlBody += "</div>";
    htmlBody += "<div id='fade'></div>";

    window.scrollTo(0, 0);
    if(document.getElementById("light") != null)
        document.getElementById("light").parentNode.removeChild(document.getElementById("light"));
    document.querySelector("body").innerHTML += htmlBody; 
    document.getElementById('light').style.display = 'block';
    document.getElementById('fade').style.display = 'block';
    setTimeout(lightBoxVideo.play(),1000);
  }
  
  function closeModalVideos() {
    var lightBoxVideo = document.getElementById("VisaChipCardVideo");
    document.getElementById('light').style.display = 'none';
    document.getElementById('fade').style.display = 'none';
    lightBoxVideo.pause();
  }

  