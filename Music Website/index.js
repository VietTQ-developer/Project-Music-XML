// Click Search Bar
var searchbar = document.querySelector("#search");
var songtext = document.querySelector("#txtbaihat");
var singertext = document.querySelector("#txtcasi");
function slide(){
    
    if(searchbar.classList.contains("hide")){
        searchbar.classList.remove("hide");
        songtext.value =('');
         singertext.value =('');
    }else{
         searchbar.classList.add("hide");
    }
}
const previous = document.querySelector('#previous');
const play = document.querySelector('#play');
const next = document.querySelector('#next');

const title = document.querySelector('#title');
const image = document.querySelector('#image');
const singer = document.querySelector('#singer');
// const cate = document.querySelector('#cate');
let slider = document.querySelector('#duration_slider');

const track = document.createElement('audio');
track.setAttribute("controls", "controls");

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

let timer;
let autoplay = 0;

let songs = [];
var list_tru_tinh = [];
var list_rock = [];
var list_cach_mang = [];
var list_thieu_nhi = [];
var list_us_uk = [];
var list_bolero = [];
var list_blue_jazz = [];
var list_search=[];

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

    //----------------------------------------------------------
    //get list Casch mang
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
        for (j = 0; j < us_uk_title.length; j++) {
            list_us_uk.push({
                name: us_uk_title[j].firstChild.nodeValue,
                singer: us_uk_singer[j].firstChild.nodeValue,
                image: us_uk_image[j].firstChild.nodeValue,
                path: us_uk_path[j].firstChild.nodeValue,
            })
        }
    }

    //----------------------------------------------------------

    //get list bolero
    var bolero_node = xmlDoc.querySelectorAll("audio[name='bolero']");
    for (i = 0; i < bolero_node.length; i++) {
        var bolero_title = bolero_node[i].getElementsByTagName('title');
        var bolero_singer = bolero_node[i].getElementsByTagName('singer');
        var bolero_image = bolero_node[i].getElementsByTagName('image');
        var bolero_path = bolero_node[i].getElementsByTagName('path');
        for (j = 0; j < bolero_title.length; j++) {
            list_bolero.push({
                name: bolero_title[j].firstChild.nodeValue,
                singer: bolero_singer[j].firstChild.nodeValue,
                image: bolero_image[j].firstChild.nodeValue,
                path: bolero_path[j].firstChild.nodeValue,
            })
        }
    }

    //----------------------------------------------------------
    // get list rock
    var rock_node = xmlDoc.querySelectorAll("audio[name='rock']");

    for (i = 0; i < rock_node.length; i++) {
        var rock_title = rock_node[i].getElementsByTagName('title');
        var rock_singer = rock_node[i].getElementsByTagName('singer');
        var rock_image = rock_node[i].getElementsByTagName('image');
        var rock_path = rock_node[i].getElementsByTagName('path');
        for (j = 0; j < rock_title.length; j++) {
            list_rock.push({
                name: rock_title[j].firstChild.nodeValue,
                singer: rock_singer[j].firstChild.nodeValue,
                image: rock_image[j].firstChild.nodeValue,
                path: rock_path[j].firstChild.nodeValue,
            })
        }
    }

    //----------------------------------------------------------
    // get list thiếu nhi
    var thieu_nhi_node = xmlDoc.querySelectorAll("audio[name='thieu_nhi']");

    for (i = 0; i < thieu_nhi_node.length; i++) {
        var thieu_nhi_title = thieu_nhi_node[i].getElementsByTagName('title');
        var thieu_nhi_singer = thieu_nhi_node[i].getElementsByTagName('singer');
        var thieu_nhi_image = thieu_nhi_node[i].getElementsByTagName('image');
        var thieu_nhi_path = thieu_nhi_node[i].getElementsByTagName('path');
        for (j = 0; j < thieu_nhi_title.length; j++) {
            list_thieu_nhi.push({
                name: thieu_nhi_title[j].firstChild.nodeValue,
                singer: thieu_nhi_singer[j].firstChild.nodeValue,
                image: thieu_nhi_image[j].firstChild.nodeValue,
                path: thieu_nhi_path[j].firstChild.nodeValue,

            })
        }
    }

    //----------------------------------------------------------
    //get list Blue Jazz
    var blue_jazz_node = xmlDoc.querySelectorAll("audio[name='blue-jazz']");
    for (i = 0; i < blue_jazz_node.length; i++) {
        var blue_jazz_title = blue_jazz_node[i].getElementsByTagName('title');
        var blue_jazz_singer = blue_jazz_node[i].getElementsByTagName('singer');
        var blue_jazz_image = blue_jazz_node[i].getElementsByTagName('image');
        var blue_jazz_path = blue_jazz_node[i].getElementsByTagName('path');
        for (j = 0; j < blue_jazz_title.length; j++) {
            list_blue_jazz.push({
                name: blue_jazz_title[j].firstChild.nodeValue,
                singer: blue_jazz_singer[j].firstChild.nodeValue,
                image: blue_jazz_image[j].firstChild.nodeValue,
                path: blue_jazz_path[j].firstChild.nodeValue,
            })
        }
    }
    
}

console.log(songs);
console.log(list_tru_tinh);
console.log(list_cach_mang);
console.log(list_us_uk);
console.log(list_bolero)
console.log(list_blue_jazz)
console.log(list_rock);
console.log(list_thieu_nhi);
loadXML();

function loadTrack(index) {
    clearInterval(timer);
    reset_slider();

    track.src = songs[index].path;
    title.innerHTML = songs[index].name;
    image.src = songs[index].image;
    singer.innerHTML = songs[index].singer;

    timer = setInterval(range_slider, 1000);

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

// function loadListTruTinh() {
//     const top_song = document.querySelector('#top_song');

//     count = 0;
//     document.querySelector('#banner-top-song').innerHTML = "Nhạc trữ tình"
//     console.log(list_tru_tinh.length)
//     for (let i = 0; i < list_tru_tinh.length; i++) {
//         count = count.toString().trim();
//         var s = '<div class="song"><img class="song-img" src="' + list_tru_tinh[i].image +
//             '"><div class="song-title"><span class="title">' + list_tru_tinh[i].name + '</span><span>' + list_tru_tinh[i].singer + '</span></div><a href="#" class="btn-song-play"  onclick="getSongToPlay(this.id)" id="' + i + '"><i class="far fa-play-circle"></i></a></div>';

//         count = Number(count);
//         top_song.insertAdjacentHTML('beforeend', s);

//     }
// }

function loadListSong(prefixID, array) {
    const top_song = document.querySelector('#top_song');

    count = 0;

    if(array.length>0){
        for (let i = 0; i < array.length; i++) {
            count = count.toString().trim();
            var s = '<div class="song"><img class="song-img" src="' + array[i].image +
                '"><div class="song-title"><span class="title">' + array[i].name + '</span><span>' + array[i].singer + '</span></div><a href="#" class="btn-song-play"  onclick="getSongToPlay(this.id)" id="' + addNewID(prefixID, i) + '"><i class="far fa-play-circle"></i></a></div>';
    
            count = Number(count);
            top_song.insertAdjacentHTML('beforeend', s);
    
        }
    }
    else{
        var s = '<div class="song"><img class="song-img" src="./images/502-error.png"/><div class="song-title"><span class="title">Không Tìm Thấy Kết Quả Tương Ứng!</span></div>';
        top_song.insertAdjacentHTML('beforeend', s);
    }
   
}

function checkClicked() {
    const tru_tinh_id = document.getElementById("tru_tinh");
    const us_uk_id = document.getElementById("us_uk");
    const cach_mang_id = document.getElementById("cach_mang");
    const rock_id = document.getElementById("rock");
    const bolero_id = document.getElementById("bolero");
    const thieu_nhi_id = document.getElementById("thieu_nhi");
    const blue_jazz_id = document.getElementById("blue_jazz");


    tru_tinh_id.addEventListener('click', (e) => {
        removeElement();
        document.querySelector('#banner-top-song').innerHTML = "Nhạc trữ tình";
        loadListSong("tt", list_tru_tinh);
    })
    us_uk_id.addEventListener('click', (e) => {
        removeElement();
        document.querySelector('#banner-top-song').innerHTML = "Nhạc US-UK";
        loadListSong("usuk", list_us_uk);
    })
    cach_mang_id.addEventListener('click', (e) => {
        removeElement();
        document.querySelector('#banner-top-song').innerHTML = "Nhạc cách mạng";
        loadListSong("cm", list_cach_mang);
    })
    rock_id.addEventListener('click', (e) => {
        removeElement();
        document.querySelector('#banner-top-song').innerHTML = "Nhạc Rock";
        loadListSong("rck", list_rock);
    })
    bolero_id.addEventListener('click', (e) => {
        removeElement();
        document.querySelector('#banner-top-song').innerHTML = "Nhạc Bolero";
        loadListSong("blr", list_bolero);
    })
    thieu_nhi_id.addEventListener('click', (e) => {
        removeElement();
        document.querySelector('#banner-top-song').innerHTML = "Nhạc thiếu nhi";
        loadListSong("tn", list_thieu_nhi);
    })
    blue_jazz_id.addEventListener('click', (e) => {
        removeElement();
        document.querySelector('#banner-top-song').innerHTML = "Nhạc Blue-jazz";
        loadListSong("bj", list_blue_jazz);
    })

}

function removeElement() {
    const elementRemove = document.getElementsByClassName("song");
    while (elementRemove.length > 0) elementRemove[0].remove();
}

function getSongToPlay(clicked_id) {
    const p = document.getElementById(clicked_id).parentElement;
    // console.log(p);
    const child = p.children[1].querySelector("span[class=title]");
    console.log(child.firstChild.nodeValue);

    var textTitle = child.firstChild.nodeValue;

    for (let index = 0; index < songs.length; index++) {
        if (songs[index].name == textTitle) {
            console.log(index)
            loadTrack(index);
            justPlay();
        }
    }

}



function addNewID(prefixID, number) {
    var s = prefixID + number;
    return s;
}


// change slider position 
function change_duration() {
    slider_position = track.duration * (slider.value / 100);
    track.currentTime = slider_position;
}

function reset_slider() {
    slider.value = 0;
}

function range_slider() {
    let position = 0;

    // update slider position
    if (!isNaN(track.duration)) {
        position = track.currentTime * (100 / track.duration);
        slider.value = position;
    }


    // function will run when the song is over
    if (track.ended) {
        play.innerHTML = '<i class="fa fa-play" aria-hidden="true"></i>';
        if (autoplay == 1) {
            index += 1;
            loadTrack(index);
            playSong();
        }
    }
}

function Search() {
    songtxt = $('#txtbaihat').val();
    singertxt = $('#txtcasi').val();
    list_search =[];
    for(let i=0;i<songs.length;i++){
        if(songs[i].name.toLowerCase().includes(songtxt.toLowerCase()) && songs[i].singer.toLowerCase().includes(singertxt.toLowerCase()) ){
            list_search.push({
                name: songs[i].name,
                path: songs[i].path,
                image: songs[i].image,
                singer: songs[i].singer,
    
            })
        }
    }
    console.log(list_search);
    if(list_search.length >0){
        removeElement();
        document.querySelector('#banner-top-song').innerHTML = "Kết Quả Tìm Kiếm";
        loadListSong("tt", list_search);
    }else{
        removeElement();
        document.querySelector('#banner-top-song').innerHTML = "Kết Quả Tìm Kiếm";
        loadListSong("tt", list_search);
    }


}
