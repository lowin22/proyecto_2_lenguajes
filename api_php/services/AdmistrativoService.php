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
        }else if(isset($_GET['descuentoID'])){
            $descuento = $controller->descuentoById($_GET['descuentoID']);
            echo json_encode($descuento);
        }else if(isset($_GET['allCategorias'])){
            $categorias = $controller->getAllCategorias();
            echo json_encode($categorias);
        }else if(isset($_GET['idCategoriaChangeDisponibilidad'])){
            $controller->changeDisponibilidadCategoria($_GET['idCategoriaChangeDisponibilidad']);
            echo json_encode("Cambio de disponibilidad exitoso");
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
    }else if(isset($_POST['idActualizarCupon'])){
        $uploadDir = 'uploads/';
        $nombreCupon = $_POST['codigo'];
        $nombreEmpresa = $_POST['empresa'];
        $idCupon = $_POST['categoria'];
        $nombreCupon = preg_replace('/[^A-Za-z0-9_\-]/', '_', $nombreCupon);
        $nombreEmpresa = preg_replace('/[^A-Za-z0-9_\-]/', '_', $nombreEmpresa);
        $fileExtension = pathinfo($_FILES['imagen']['name'], PATHINFO_EXTENSION);
        $uniqueName = $nombreCupon . '_' . $nombreEmpresa . '_' . $idCupon . '.' . $fileExtension;
        $uploadFile = $uploadDir . $uniqueName;
        if (!is_dir($uploadDir)) {
            mkdir($uploadDir, 0777, true);
        }
        if (move_uploaded_file($_FILES['imagen']['tmp_name'], $uploadFile)) {
            $imagen = $uniqueName;
            $controller->updateCupon($_POST['idActualizarCupon'], $_POST['codigo'], $_POST['descuento'], $_POST['precio'], $_POST['empresa'], $_POST['categoria'], $imagen, $_POST['fecha_vencimiento'], $_POST['fecha_inicio']);
            echo json_encode(["status" => "success", "message" => "File successfully uploaded", "filePath" => $uploadFile]);
        exit();
        } else {
            echo json_encode(["status" => "error", "message" => "File upload failed"]);
        }
    } else if(isset($_POST['idActualizarPromocion'])){
        $controller->updatePromocion($_POST['idActualizarPromocion'], $_POST['descuento'], $_POST['fecha_inicio'], $_POST['fecha_vencimiento']);
        echo json_encode("Actualizacion Exitosa");
        exit(); 
    } else if(isset($_POST['idActualizarCategoria'])){
        $controller->updateCategoria($_POST['idActualizarCategoria'], $_POST['nombre']);
        echo json_encode("Actualizacion Exitosa");
        exit();
    }
}

?>


