
<?php
$kapcsolat = new mysqli(
    $hostname = "127.0.0.1",
    $username = "root",
    $password = "",
    $database = "mage_io",
    $port = 3306);
$kapcsolat->query("set names utf8");
?>