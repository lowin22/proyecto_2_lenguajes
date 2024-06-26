<?php 
require_once '../controller/CuponController.php';
header('Access-Control-Allow-Origin: *');
header('Content-Type: application/json');
header('Access-Control-Allow-Methods: POST, GET, PUT, DELETE, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With');
$controller = new CuponController();
if($_SERVER['REQUEST_METHOD']==='GET' ){
    if(isset($_GET['id'])){
        $cupon = $controller->getCupon($_GET['id']);
        echo json_encode($cupon);
    }else if(isset($_GET['stateCupon'])){
        $controller->changeStateCupon($_GET['stateCupon']);
        header("HTTP/1.1 200 ok");
        echo json_encode("Cupon actualizado");
    }else if(isset($_GET['idCuponDescuento'])){
        $cuponDescuento = $controller->getCuponDescuento($_GET['idCuponDescuento']);
        echo json_encode($cuponDescuento);
    }else if(isset($_GET['descuentosCupon'])){
        $descuentos = $controller->getDescuentosByCupon($_GET['descuentosCupon']);
        echo json_encode($descuentos);
    }else if(isset($_GET['stateDescuento'])){
        $controller->changeStateDescuento($_GET['stateDescuento']);
        header("HTTP/1.1 200 ok");
        echo json_encode("Descuento actualizado");
    }else if(isset($_GET['activos'])){
        $cupones = $controller->getCuponActivos();
        echo json_encode($cupones);
    }else if(isset($_GET['categoria'])){
        $cupones = $controller->getCuponActivosByCategoria($_GET['categoria']);
        echo json_encode($cupones);
    }else{
        $cupones = $controller->getCupones();
        echo json_encode($cupones);
    }
}

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    
    if (isset($_FILES['imagen']) && $_FILES['imagen']['error'] === UPLOAD_ERR_OK) {
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
            $controller->insertCupon($_POST['codigo'], $_POST['descuento'], $_POST['precio'], $_POST['empresa'], $_POST['categoria'],$imagen, $_POST['fecha_vencimiento'], $_POST['fecha_inicio']);
            echo json_encode(["status" => "success", "message" => "File successfully uploaded", "filePath" => $uploadFile]);
        } else {
            echo json_encode(["status" => "error", "message" => "File upload failed"]);
        }
    } else {
        echo json_encode(["status" => "error", "message" => "No file uploaded or upload error"]);
    }
    
    if (isset($_POST['idCuponDescuento'])) {
        $controller->insertCuponDescuento($_POST['idCuponDescuento'], $_POST['porcentaje'], $_POST['fecha_inicio'], $_POST['fecha_fin']);
        echo json_encode("Descuento insertado");
    }
}


