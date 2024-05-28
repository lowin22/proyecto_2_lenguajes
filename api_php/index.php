<!DOCTYPE html>
<html>
<head>

<?php
require_once 'controller/CuponController.php';
$controller = new CuponController();
$cupones = $controller->getCupones();
?>
    <title>PHP Test</title>
</head>
</html>