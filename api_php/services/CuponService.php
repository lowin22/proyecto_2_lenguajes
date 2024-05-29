<?php 
require_once '../controller/CuponController.php';
$controller = new CuponController();
if(isset($_GET['id'])){
    $cupon = $controller->getCupon($_GET['id']);
    echo json_encode($cupon);
}else{
    $cupones = $controller->getCupones();
    echo json_encode($cupones);
}
if(isset($_POST['codigo'])){
    $controller->insertCupon($_POST['codigo'], $_POST['descuento'], $_POST['precio'], $_POST['disponible'], $_POST['empresa'], $_POST['categoria'], $_POST['imagen'], $_POST['fechaVencimiento']);
}
?>