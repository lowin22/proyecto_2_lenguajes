<?php
header("Access-Control-Allow-Origin: *");
require_once '../controller/AdministrativoController.php';  
$controller = new AdministrativoController();
if(isset($_GET['idEmpresa'])){
    $empresa = $controller->getEmpresaById($_GET['idEmpresa']);
    echo json_encode($empresa);
}else if(isset($_GET['idEmpresaCupon'])){
    $cupones = $controller->getCuponesByIdEmpresa($_GET['idEmpresaCupon']);
    echo json_encode($cupones);
}else{
    $empresas = $controller->getEmpresasActivas();
    echo json_encode($empresas);
}
if(isset($_POST['nombre'])){
    $controller->insertEmpresa($_POST['nombre'], $_POST['direccion'], $_POST['fecha'], $_POST['correo'], $_POST['telefono'], $_POST['password'], $_POST['cedula']);
}