<?php
//Получаем данные
$telefon = $_POST['phone'];
$imya = $_POST['name'];


if(is_uploaded_file($_FILES["file"]["tmp_name"]))
   {
     // Если файл загружен успешно, перемещаем его
     // из временной директории в конечную
     move_uploaded_file($_FILES["file"]["tmp_name"], "file/".$_FILES["file"]["name"]);
     echo "OK";
   } else {
      echo("Ошибка загрузки файла");
   }

  $to = "polyakivspb@yandex.ru"; 
  $from = "info@alphavent.ru"; //От кого
  $subject = "Заявка вентиляция"; //Тема
  $filename=$_FILES["file"]["name"];
  $message = "Имя: ".$imya."<br>"."Телефон: ".$telefon; //Текст письма
  $boundary = "---"; //Разделитель
  /* Заголовки */
  $headers = "From: $from\nReply-To: $from\n";
  $headers .= "Content-Type: multipart/mixed; boundary=\"$boundary\"";
  $body = "--$boundary\n";
  /* Присоединяем текстовое сообщение */
  $body .= "Content-type: text/html; charset='utf-8'\n";
  $body .= "Content-Transfer-Encoding: quoted-printablenn";
  $body .= "Content-Disposition: attachment; filename==?utf-8?B?".base64_encode($filename)."?=\n\n";
  $body .= $message."\n";
  $body .= "--$boundary\n";
  $file = fopen("file/".$filename, "r"); //Открываем файл
  $text = fread($file, filesize("file/".$filename)); //Считываем весь файл
  fclose($file); //Закрываем файл
  /* Добавляем тип содержимого, кодируем текст файла и добавляем в тело письма */
  $body .= "Content-Type: application/octet-stream; name==?utf-8?B?".base64_encode($filename)."?=\n"; 
  $body .= "Content-Transfer-Encoding: base64\n";
  $body .= "Content-Disposition: attachment; filename==?utf-8?B?".base64_encode($filename)."?=\n\n";
  $body .= chunk_split(base64_encode($text))."\n";
  $body .= "--".$boundary ."--\n";
  If(mail($to, $subject, $body, $headers))
  	echo "OK"; //Отправляем письмо

mail("avdeev@alphavent.ru", $subject, $body, $headers);
  mail("vinogradov@alphavent.ru", $subject, $body, $headers);


//Так как все данные приходят в кодировке UTF при необходимости
//их можно/нужно конвертировать в нужную, но мы этого делать не будем

//$data = iconv("utf-8", "windows-1251", $data);

/*
тут можно делать все что угодно с полученными данными, а мы их просто выведем на печать.
*/


// $to = "polyakivspb@yandex.ru"; 
// // емайл получателя 

// $subject = "Заявка на вентиляцию"; 
// // тема письма 


// if ($hidden="Калькулятор")
// 	$message="Форма: ".$hidden."\r\n"."Телефон: ".$telefon."\r\n"."Имя: ".$imya."\r\n"."Площадь: ".$area."\r\n"."Высота потолков: ".$height."\r\n"."Тип помещения: ".$step1."\r\n"."Тип вентиляции: ".$step4; 
// else
// 	$message="Форма: ".$hidden."\r\n"."Телефон: ".$telefon."\r\n"."Имя: ".$imya."\r\n"."Вопрос: ".$question."\r\n"."Площадь: ".$area; 
// // текст сообщения 

// $mailheaders = "Content-type:text/plain;charset=utf8"; 
// // почтовый заголовок, указывает формат письма - текстовый и кодировку
// mail($to, $subject, $message, $mailheaders);
// mail("avdeev@alphavent.ru", $subject, $message, $mailheaders);
// mail("vinogradov@alphavent.ru", $subject, $message, $mailheaders);
// // mail("info@ab-vent.ru", $subject, $message, $mailheaders);
// // mail("a.bogdanov@ab-vent.ru", $subject, $message, $mailheaders);
// //mail("80b0cc99-ccfa-2634-156c-34d02d192987+79522893905@sms.ru","from:AERONOVA",$message);


?>