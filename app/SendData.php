<?php
//Получаем данные
$telefon = $_POST['phone'];
$imya = $_POST['name'];
$question = $_POST['question'];
$hidden = $_POST['hidden'];
$area = $_POST['area'];
$height = $_POST['height'];
$step1 = $_POST['step1'];
$step4 = $_POST['step4'];

//Так как все данные приходят в кодировке UTF при необходимости
//их можно/нужно конвертировать в нужную, но мы этого делать не будем

//$data = iconv("utf-8", "windows-1251", $data);

/*
тут можно делать все что угодно с полученными данными, а мы их просто выведем на печать.
*/


$to = "polyakivspb@yandex.ru"; 
// емайл получателя 

$subject = "Заявка на вентиляцию"; 
// тема письма 


	$message="Телефон: ".$telefon."\r\n"."Имя: ".$imya."\r\n"; 
// текст сообщения 

$mailheaders = "Content-type:text/plain;charset=utf8"; 
// почтовый заголовок, указывает формат письма - текстовый и кодировку
mail($to, $subject, $message, $mailheaders);
mail("avdeev@alphavent.ru", $subject, $message, $mailheaders);
 mail("vinogradov@alphavent.ru", $subject, $message, $mailheaders);



?>