const previous = document.querySelector('#previous');
const play = document.querySelector('#play');
const next = document.querySelector('#next');

const title = document.querySelector('#title');
const image = document.querySelector('#image');
const singer = document.querySelector('#singer');
// const cate = document.querySelector('#cate');

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
var docname = "music1.xml";

let songs = [];
var list_tru_tinh = [];
var list_rock = [];
var list_cach_mang = [];
var list_thieu_nhi = [];
var list_us_uk = [];

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


    for (i = 0; i < titlelist.length; i++) {

        songs.push({
            name: titlelist[i].firstChild.nodeValue,
            path: pathlist[i].firstChild.nodeValue,
            image: imagelist[i].firstChild.nodeValue,
            singer: singerlist[i].firstChild.nodeValue,

        });
    }
    title.innerHTML = titlelist[index].firstChild.nodeValue;
    image.innerHTML = imagelist[index].firstChild.nodeValue;
    track.src = pathlist[index].firstChild.nodeValue;
    singer.innerHTML = singerlist[index].firstChild.nodeValue;
    // cate.innerHTML = catelist[index].firstChild.nodeValue;;

    //----------------------------------------------------------
    //get list Trữ tình
    var tru_tinh_node = xmlDoc.querySelectorAll("audio[name='tru_tinh']");

    for (i = 0; i < tru_tinh_node.length; i++) {
        var tru_tinh_title = tru_tinh_node[i].getElementsByTagName('title');
        var tru_tinh_singer = tru_tinh_node[i].getElementsByTagName('singer');
        var tru_tinh_image = tru_tinh_node[i].getElementsByTagName('image');
        var tru_tinh_path = tru_tinh_node[i].getElementsByTagName('path');
        for (j = 0; j < tru_tinh_title.length; j++) {
            // console.log(haha[j].firstChild.nodeValue);
            list_tru_tinh.push({
                name: tru_tinh_title[j].firstChild.nodeValue,
                singer: tru_tinh_singer[j].firstChild.nodeValue,
                image: tru_tinh_image[j].firstChild.nodeValue,
                path: tru_tinh_path[j].firstChild.nodeValue,
            })
        }
    }
    var cach_mang_node = xmlDoc.querySelectorAll("audio[name='cach_mang']");

    for (i = 0; i < cach_mang_node.length; i++) {
        var cach_mang_title = cach_mang_node[i].getElementsByTagName('title');
        var cach_mang_singer = cach_mang_node[i].getElementsByTagName('singer');
        var cach_mang_image = cach_mang_node[i].getElementsByTagName('image');
        var cach_mang_path = cach_mang_node[i].getElementsByTagName('path');
        for (j = 0; j < cach_mang_title.length; j++) {
            // console.log(haha[j].firstChild.nodeValue);
            list_cach_mang.push({
                name: cach_mang_title[j].firstChild.nodeValue,
                singer: cach_mang_singer[j].firstChild.nodeValue,
                image: cach_mang_image[j].firstChild.nodeValue,
                path: cach_mang_path[j].firstChild.nodeValue,
            })
        }
    }


    //----------------------------------------------------------
    //get list US-UK
    var us_uk_node = xmlDoc.querySelectorAll("audio[name='us_uk']");

    for (i = 0; i < us_uk_node.length; i++) {
        var us_uk_title = us_uk_node[i].getElementsByTagName('title');
        var us_uk_singer = us_uk_node[i].getElementsByTagName('singer');
        var us_uk_image = us_uk_node[i].getElementsByTagName('image');
        var us_uk_path = us_uk_node[i].getElementsByTagName('path');
        for (j = 0; j < tru_tinh_title.length; j++) {
            // console.log(haha[j].firstChild.nodeValue);
            list_us_uk.push({
                name: us_uk_title[j].firstChild.nodeValue,
                singer: us_uk_singer[j].firstChild.nodeValue,
                image: us_uk_image[j].firstChild.nodeValue,
                path: us_uk_path[j].firstChild.nodeValue,
            })
        }
    }
    //----------------------------------------------------------

}

console.log(songs);
console.log(list_tru_tinh);
console.log(list_cach_mang);
console.log(list_us_uk);
loadXML();

function loadTrack(index) {
    track.src = songs[index].path;
    title.innerHTML = songs[index].name;
    image.src = songs[index].image;
    singer.innerHTML = songs[index].singer;

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

function loadListTruTinh() {
    const top_song = document.querySelector('#top_song');

    count = 0;
    document.querySelector('#banner-top-song').innerHTML = "Nhạc trữ tình"
    console.log(list_tru_tinh.length)
    for (let i = 0; i < list_tru_tinh.length; i++) {
        count = count.toString().trim();
        var s = '<div class="song"><img class="song-img" src="' + list_tru_tinh[i].image +
            '"><div class="song-title"><span class="title">' + list_tru_tinh[i].name + '</span><span>' + list_tru_tinh[i].singer + '</span></div><a href="#" class="btn-song-play"  onclick="getSongToPlay(this.id)" id="' + i + '"><i class="far fa-play-circle"></i></a></div>';

        count = Number(count);
        top_song.insertAdjacentHTML('beforeend', s);

    }
}

function getSongToPlay(clicked_id) {
    const p = document.getElementById(clicked_id).parentElement;
    // console.log(p);
    const child = p.children[1].querySelector("span[class=title]");
    console.log(child.firstChild.nodeValue);

    var textTitle = child.firstChild.nodeValue;

    for (let index = 0; index < list_tru_tinh.length; index++) {
        if (list_tru_tinh[index].name == textTitle) {
            console.log(index)
            loadTrack(index);
            justPlay();
        }
        // justPlay(i);
    }

    // alert(clicked_id);
}