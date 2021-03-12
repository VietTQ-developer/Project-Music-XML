$(document).ready(function () {
    var xmlDoc;
    var request;
    var docname = "music.xml";

    let songs = [];
    
    function loadXML() {
      try {
        //IE browser
        if (window.ActiveXObject) {
          request = new ActiveXObject("Microsoft.XMLHTTP");
        } else {
          // other browsers
          request = new window.XMLHttpRequest();
        }
        request.open("GET", docname, true); //make async
        request.send(null);
        request.onreadystatechange = showFeed;
      } catch (exc) {
        alert("Error!" + exc.message);
      }
    }

    function showFeed() {

        xmlDoc = request.responseXML.documentElement;
        
        var titlelist = xmlDoc.getElementsByTagName("title");
        console.log(titlelist)
        var pathlist = xmlDoc.getElementsByTagName("path");
        var imagelist = xmlDoc.getElementsByTagName("image");
      
      
        for (i = 0; i < titlelist.length; i++) {
      
          songs.push({
              name: titlelist[i].firstChild.nodeValue,
              path: pathlist[i].firstChild.nodeValue,
              image: imagelist[i].firstChild.nodeValue,
              
          });
        }
            title.innerHTML = titlelist[index].firstChild.nodeValue;
          image.innerHTML =  imagelist[index].firstChild.nodeValue;
          track.src = pathlist[index].firstChild.nodeValue;
          
      }

  console.log(songs);
  loadXML();

const previous = $('#previous');
const play = $('#play');
const next = $('#next');

const title = $('#title');
const image = $('#image');

const track = $('<audio></audio>');
$('body').append(track);


let index = 0;
let playingSong = false;


play.on('click', function(){
    justPlay();
})
next.on('click', function(){
    nextSong();
})
function loadTrack(index) {
    track.attr('src', songs[index].path);
    // track.src = songs[index].path;    
    title.append(songs[index].name);
    // image.src = songs[index].image;
    track[index].load();
}

loadTrack(index);

function playSong() {
    track[index].play();
    playingSong = true;
    play.append('<i class="fas fa-pause"></i>');
}

function pauseSong() {
    track[index].pause();
    playingSong = false;
    play.append('<i class="fas fa-play"></i>');
}

function nextSong() {
    if (index < songs.length - 1) {
        index += 1;
        loadTrack(index);
        playSong();
    } else {
        index = 0;
        loadTrack(index);
        playSong();

    }
}

function previousSong() {
    if (index > 0) {
        index -= 1;
        loadTrack(index);
        playSong();

    } else {
        index = songs.length;
        loadTrack(index);
        playSong();
    }
}

function justPlay() {
    if (playingSong == false) {
        playSong();

    } else {
        pauseSong();
    }

}
  });