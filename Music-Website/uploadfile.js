const realFileBtn = document.getElementById("fileUpload");

realFileBtn.addEventListener("change", function() {
    if (realFileBtn.value) {
        var inputval = realFileBtn.value.match(/[\/\\]([\w\d\s\.\-\(\)]+)$/)[1];
        console.log(inputval);

        document.getElementById("title").value = inputval;
    }
});

function reverseString(str) {
    var splitString = str.split("");
    var reverseArray = splitString.reverse();
    var joinArray = reverseArray.join("");
    return joinArray;
}

function convertViToEn(str, toUpperCase = false) {
    str = str.toLowerCase();
    str = str.replace(/à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ/g, "a");
    str = str.replace(/è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ/g, "e");
    str = str.replace(/ì|í|ị|ỉ|ĩ/g, "i");
    str = str.replace(/ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ/g, "o");
    str = str.replace(/ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ/g, "u");
    str = str.replace(/ỳ|ý|ỵ|ỷ|ỹ/g, "y");
    str = str.replace(/đ/g, "d");
    // Some system encode vietnamese combining accent as individual utf-8 characters
    str = str.replace(/\u0300|\u0301|\u0303|\u0309|\u0323/g, ""); // Huyền sắc hỏi ngã nặng
    str = str.replace(/\u02C6|\u0306|\u031B/g, ""); // Â, Ê, Ă, Ơ, Ư
    str = str.replace(".mp3", "");
    str = str.replace(".WMA", "");
    str = str.replace(".WAV", "");
    str = str.replace(".FLAC", "");
    str = str.replace(".AAC", "");
    str = str.replace(".OGG", "");
    str = str.replace(".AIFF", "");
    str = str.replace(".ALAC", "");

    return toUpperCase ? str.toUpperCase() : str;
}
var filenametemp;
var fullname;
async function uploadFile() {
    var filename = document.getElementById("title").value;
    filename = convertViToEn(filename).split(" ").join("-");
    filenametemp = filename;
    var typefile = (reverseString(reverseString(realFileBtn.value.match(/[\/\\]([\w\d\s\.\-\(\)]+)$/)[1]))).split('.').pop();
    filename = filename + "." + typefile;
    fullname = filename;
    let formData = new FormData();
    formData.append("file", fileUpload.files[0], filename);
    await fetch('upload.php', {
        method: "POST",
        body: formData
    });
    alert('The file has been uploaded successfully.');
    window.location.href = "./index.html";
}


var theloai = "";

function uploadfile1() {
    theloai = (document.getElementById('c1').value);
}

function uploadfile2() {
    theloai = (document.getElementById('c2').value);
}

function uploadfile3() {
    theloai = (document.getElementById('c3').value);
}

function uploadfile4() {
    theloai = (document.getElementById('c4').value);
}

function uploadfile5() {
    theloai = (document.getElementById('c5').value);
}

function uploadfile6() {
    theloai = (document.getElementById('c6').value);
}

function uploadfile7() {
    theloai = (document.getElementById('c7').value);
}
async function saveXML() {
    let formData = new FormData();

    var title = filenametemp;
    var singer = document.getElementById("signer").value;
    var image = "./images/acbd.jpg";
    var path = "./songs/long/" + fullname;

    $.ajax({
        url: "index.php",
        type: "POST",
        data: {
            theloai: theloai,
            title: title,
            image: image,
            path: path,
            singer: singer
        },
        cache: false,
        success: function(dataResult) {}
    })

}