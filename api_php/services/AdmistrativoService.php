<?php
require_once '../controller/AdministrativoController.php';  
$controller = new AdministrativoController();
if(isset($_GET['id'])){
    
    echo json_encode("hola");
}else{
    $empresas = $controller->getEmpresasActivas();
    echo json_encode($empresas);
}
if(isset($_POST['nombre'])){
    $controller->insertEmpresa($_POST['nombre'], $_POST['direccion'], $_POST['fecha'], $_POST['correo'], $_POST['telefono'], $_POST['password'], $_POST['cedula']);
}