<meta charset='UTF-8'>
<?php
$host = "localhost";
$user = "eunjin9639"; 
$pwd = "dmswls0212!";
$dbname = "eunjin9639";

$connect = mysqli_connect($host,$user,$pwd) or die("데이터베이스 접속오류!!");
mysqli_select_db($connect,$dbname);
?>
<!-- $host = "localhost";
$user = "mijisky"; 
$pwd = "qq900202!";
$dbname = "mijisky"; -->