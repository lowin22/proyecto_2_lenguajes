<?php
require_once '../controller/AdministrativoController.php';
header('Access-Control-Allow-Origin: *');
header('Content-Type: application/json');
header('Access-Control-Allow-Methods: POST, GET, PUT, DELETE, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With');
$controller = new AdministrativoController();
if($_SERVER['REQUEST_METHOD']=='GET'){
        if(isset($_GET['idEmpresa'])){
            $empresa = $controller->getEmpresaById($_GET['idEmpresa']);
            echo json_encode($empresa);
        }else if(isset($_GET['idEmpresaCupon'])){
            $cupones = $controller->getCuponesByIdEmpresa($_GET['idEmpresaCupon']);
            echo json_encode($cupones);
        }else if(isset($_GET['categorias'])){
            $categorias = $controller->getCategorias();
            echo json_encode($categorias);
            exit();

        }else if(isset($_GET['empresas'])){
            $empresas = $controller->getEmpresasDetail();
            echo json_encode($empresas);
        }else if(isset($_GET['stateEmpresa'])){
            $controller->changeStateEmpresa($_GET['stateEmpresa']);
            header("HTTP/1.1 200 OK");
            echo json_encode("Cambio de estado exitoso");
            exit();
        }
            
            else{
            $empresas = $controller->getEmpresasActivas();
            echo json_encode($empresas);
        }
        header("HTTP/1.1 200 OK");
        exit();
}
if($_POST['METHOD']=='POST'){
    if(isset($_POST['name'])){
        unset($_POST['METHOD']);
        $controller->insertEmpresa($_POST['name'], $_POST['direccion'], $_POST['fecha'], $_POST['correo'], $_POST['telefono'], $_POST['password'], $_POST['cedula']);
        header("HTTP/1.1 200 OK");
        echo json_encode("Registro Exitoso");
        exit();
    }else if(isset($_POST['nombre_categoria'])){
        unset($_POST['METHOD']);
        $controller->insertCategoria($_POST['nombre_categoria']);
        header("HTTP/1.1 200 OK");
        echo json_encode("Registro Exitoso");
        exit();
    }else if(isset($_POST['idActualizarEmpresa'])){
        $controller->updateEmpresa($_POST['idActualizarEmpresa'], $_POST['nombre'], $_POST['direccion'], $_POST['fecha'], $_POST['correo'], $_POST['telefono'], $_POST['cedula']);
        echo json_encode("Actualizacion Exitosa");
        exit();
    }
}

?>


