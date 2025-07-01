<?php
error_reporting(E_ALL);
ini_set('display_errors', 0);
ini_set('log_errors', 1);
ini_set('error_log', __DIR__.'/php-errors.log');


if(empty($_POST['fullname']) || empty($_POST['phone'])) {
    die("Пожалуйста, заполните обязательные поля");
}
if (!filter_var($_POST['email'], FILTER_VALIDATE_EMAIL)) {
    die("Укажите корректный email");
}
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "eg_production";

$fullname = $_POST['fullname'] ?? '';
$country_code = $_POST['country_code'] ?? '';
$phone = $_POST['phone'] ?? '';
$email = $_POST['email'] ?? '';
$project_type = $_POST['project_type'] ?? '';

$conn = new mysqli($servername, $username, $password, $dbname);
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

$sql = "INSERT INTO project_requests 
        (fullname, country_code, phone, email, project_type)
        VALUES (?, ?, ?, ?, ?)";

$stmt = $conn->prepare($sql);
$stmt->bind_param("sssss", $fullname, $country_code, $phone, $email, $project_type);
$stmt->execute();
$stmt->close();
$conn->close();

$to = "fozilovsherzodbek013@gmail.com"; 
$subject = "Новая заявка с сайта";
$message = "
Имя: $fullname
Телефон: $country_code$phone
Email: $email
Проект: $project_type
";
$headers = "From: no-reply@eg-production.ru";
ini_set("SMTP", "smtp.timeweb.ru");
ini_set("smtp_port", "25");
ini_set("sendmail_from", "noreply@eg-production.ru");
mail($to, $subject, $message, $headers);

$botToken = "8180041366:AAHGqkRpz6tJkHbHmw-nxKi5EvQP6Tq6_64";
$chatId = "-4849085047";
$telegramMessage = urlencode("
 Новая заявка:
├ Имя: $fullname
├ Телефон: $country_code$phone
├ Email: $email
└ Проект: $project_type
");
$telegramUrl = "https://api.telegram.org/bot$botToken/sendMessage?chat_id=$chatId&text=$telegramMessage";
file_get_contents($telegramUrl);

echo "Спасибо! Ваша заявка принята. Мы свяжемся с вами в ближайшее время";
?>