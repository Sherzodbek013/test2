<?php
error_reporting(E_ALL);
ini_set('display_errors', 1);
ini_set('log_errors', 1);
ini_set('error_log', __DIR__.'/php-errors.log');

require_once __DIR__.'/PHPMailer/src/Exception.php';
require_once __DIR__.'/PHPMailer/src/PHPMailer.php';
require_once __DIR__.'/PHPMailer/src/SMTP.php';

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $fullname = $_POST['fullname'] ?? '';
    $country_code = $_POST['country_code'] ?? '';
    $phone = $_POST['phone'] ?? '';
    $email = $_POST['email'] ?? '';
    $project_type = $_POST['project_type'] ?? '';

    $mail = new PHPMailer(true);
    try {
        $mail->isSMTP();
        $mail->Host = 'smtp.yandex.ru';
        $mail->SMTPAuth = true;
        $mail->Username = 'foz1lovsherzod@yandex.ru';
        $mail->Password = 'tqayoxhqvlnsjxbi';
        $mail->SMTPSecure = 'ssl';
        $mail->Port = 465;
        $mail->setFrom('foz1lovsherzod@yandex.ru', 'EG Production');
        $mail->addAddress('fozilovsherzodbek013@gmail.com');
        $mail->isHTML(false);
        $mail->Subject = "Новая заявка с сайта";
        $mail->Body =
            "Имя: $fullname\n".
            "Телефон: $country_code$phone\n".
            "Email: $email\n".
            "Проект: $project_type\n";
        $mail->send();
        echo "Письмо отправлено!";
    } catch (Exception $e) {
        error_log("Ошибка PHPMailer: {$mail->ErrorInfo}");
        echo "Ошибка: {$mail->ErrorInfo}";
    }
}
?>
