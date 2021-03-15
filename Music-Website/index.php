<?php
//load file xml
	$xml2 = simplexml_load_file('mysongs.xml');

	//get data from ajax to php
	
	$theloai=$_POST['theloai'];
	$title=$_POST['title'];
	$singer=$_POST['singer'];
	$image=$_POST['image'];
	$path=$_POST['path'];
	
	
// to add new node <Result>:
$resultNext = $xml2->audios->addchild('audio');
$resultNext->addAttribute('name', strval($theloai) ); 
// set attribute for audio
$resultNext->addChild('singer', $singer); 
"<br>";
$resultNext->addChild('title', $title);
$resultNext->addChild('image', "./images/fail-face.png");
$resultNext->addChild('path', $path);

//and save file
$xml2->asXml('mysongs.xml');
?>