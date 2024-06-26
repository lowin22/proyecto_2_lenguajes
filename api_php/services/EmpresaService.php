<?php 
header('Access-Control-Allow-Origin: *');
header('Content-Type: application/json');
header('Access-Control-Allow-Methods: POST, GET, PUT, DELETE, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With');
require_once '../controller/EmpresaController.php';
$controller = new EmpresaController();
if ($_SERVER['REQUEST_METHOD'] === 'GET' && $_GET['route']==='getEmpresaById') {
    $empresa = $controller->getEmpresaById($_GET['id']);
    http_response_code(200);
    echo json_encode($empresa);
}

if($_SERVER['REQUEST_METHOD'] === 'GET' && $_GET['route']==='loginUsuario'){

    $usuario = new EmpresaModel(0,0,0,0,$_GET['email'],0, $_GET['password']);
    $resultado = $controller->loginUsuario($usuario);
    http_response_code(200);
    echo json_encode($resultado);

}

if ($_SERVER['REQUEST_METHOD'] === 'PUT' && $_GET['route']==='updateEmpresa') {
    $input = file_get_contents("php://input");
    $data = json_decode($input, true);

    $empresa = new EmpresaModel($_GET['id'], $data['nombre'], $data['direccion'], $data['date'], $data['email'], $data['telefono'], $data['password'], $data['cedula']);

    $resultado = $controller->updateEmpresa($empresa);
    http_response_code(200);
    echo json_encode($resultado);
}

?>