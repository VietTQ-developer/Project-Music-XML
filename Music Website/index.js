const previous = document.querySelector('#previous');
const play = document.querySelector('#play');
const next = document.querySelector('#next');

const title = document.querySelector('#title');
const image = document.querySelector('#image');
const singer = document.querySelector('#singer');
const cate = document.querySelector('#cate');

const track = document.createElement('audio');

let index = 0;
let playingSong = false;

// let songs = [{
//         name: 'Love Like This',
//         path: './songs/love-like-this.mp3',
//         image: './images/audio1.jpg',
//     },
//     {
//         name: 'Pay Phone',
//         path: './songs/payphone.mp3',
//         image: './images/audio2.jpg',
//     },
//     {
//         name: 'Intentions',
//         path: './songs/intentions.mp3',
//         image: './images/audio3.jpg',
//     },
//     {
//         name: 'How Long',
//         path: './songs/how-long.mp3',
//         image: './images/audio4.jpg',
//     },
//     {
//         name: 'Lets Get Crazy',
//         path: './songs/lets-get-crazy.mp3',
//         image: './images/audio5.jpg',
//     }
// ];

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
  var singerlist = xmlDoc.getElementsByTagName("singer");
  var catelist = xmlDoc.getElementsByTagName("category");


  for (i = 0; i < titlelist.length; i++) {

    songs.push({
        name: titlelist[i].firstChild.nodeValue,
        path: pathlist[i].firstChild.nodeValue,
        image: imagelist[i].firstChild.nodeValue,
        singer: singerlist[i].firstChild.nodeValue,
        category: catelist[i].firstChild.nodeValue,
        
    });
  }
  title.innerHTML = titlelist[index].firstChild.nodeValue;
  image.innerHTML =  imagelist[index].firstChild.nodeValue;
  track.src = pathlist[index].firstChild.nodeValue;
  singer.innerHTML = singerlist[index].firstChild.nodeValue;
  cate.innerHTML = catelist[index].firstChild.nodeValue;;
    
}

console.log(songs);
loadXML();

function loadTrack(index) {
    track.src = songs[index].path;
    title.innerHTML = songs[index].name;
    image.src = songs[index].image;
    singer.innerHTML = songs[index].singer;
    cate.innerHTML = songs[index].category;
    track.load();
}

loadTrack(index);

function playSong() {
    track.play();
    playingSong = true;
    play.innerHTML = '<i class="fas fa-pause"></i>';
}

function pauseSong() {
    track.pause();
    playingSong = false;
    play.innerHTML = '<i class="fas fa-play"></i>';
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