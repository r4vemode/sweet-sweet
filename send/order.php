<?php

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\SMTP;
use PHPMailer\PHPMailer\Exception;

header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');
header('Access-Control-Allow-Credentials: true');

require __DIR__ . '/../phpmailer/PHPMailer.php';
require __DIR__ . '/../phpmailer/SMTP.php';
require __DIR__ . '/../phpmailer/Exception.php';

if (!isset($_POST)) return;

$rawData = file_get_contents("php://input");
$contentType = $_SERVER["CONTENT_TYPE"];
$host = $_SERVER["HTTP_HOST"];

if ($contentType === "application/json") {
    $data = json_decode($rawData, true);
}
else {
    $data = $_POST;
}

$mail = new PHPMailer(true);
$mail->isSMTP();
$mail->SMTPAuth = true;
// $mail->SMTPDebug = 1;
$mail->Host = 'smtp.gmail.com';
$mail->Username = 'e3409737@gmail.com';
$mail->Password = 'iqlzltmdshoobtut';
$mail->Port = 465;
$mail->SMTPSecure = "ssl";
$mail->setFrom('e3409737@gmail.com', 'Сайт ' . $host);
$mail->isHTML(true);
$mail->CharSet = "UTF-8";

// Отправители
$mail->addAddress('Sweets_by_elli@mail.ru');

$mail->Subject = 'Заявка с сайта ' . $host;

$message = '';
$fields = array(
    'form' => 'Форма',
    'phone' => 'Телефон',
);
foreach ($data as $key => $value) {
    if (!array_key_exists($key, $fields)) continue;
    $message .= "<b>{$fields[$key]}:</b> $value" . "<br>";
}
$mail->Body = $message;

if (!$mail->send()) {
    echo json_encode(['success' => false]);
//    echo 'Email not sent an error was encountered: ' . $mail->ErrorInfo;
} else {
    echo json_encode(['success' => true]);
}