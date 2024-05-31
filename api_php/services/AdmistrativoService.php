<?php
require_once '../controller/AdministrativoController.php';  
header('Access-Control-Allow-Origin: *');
$controller = new AdministrativoController();
if($_SERVER['REQUEST_METHOD']=='GET'){
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
        header("HTTP/1.1 200 OK");
        exit();
}
if($_POST['METHOD']=='POST'){
    unset($_POST['METHOD']);
    $controller->insertEmpresa($_POST['name'], $_POST['direccion'], $_POST['fecha'], $_POST['correo'], $_POST['telefono'], $_POST['password'], $_POST['cedula']);
    header("HTTP/1.1 200 OK");
    echo json_encode("Registro Exitoso");
    exit();
}
header('HTTP/1.1 400 Bad Request');
?>

