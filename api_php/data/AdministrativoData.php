<?php
require_once '../config/DataBase.php';
class AdministrativoData{

    private $conn;
    public function __construct(){
        $database = new DataBase();
        $db = $database->dbConnection();
        $this->conn = $db;
    }
    public function getEmpresasActivas(){
        $stmt = $this->conn->prepare("call sp_getEmpresas()");
        $stmt->execute();
        return $stmt->fetchAll();
    }
    public function insertEmpresa($empresa) {
        $stmt = $this->conn->prepare("call sp_insertEmpresa(:nombre, :dirreccion, :fecha, :correo, :telefono, :password, :cedula)");
        $stmt->bindParam(':nombre', $empresa->nombre_empresa);
        $stmt->bindParam(':dirreccion', $empresa->direccion_empresa);
        $stmt->bindParam(':fecha', $empresa->fecha_creacion_empresa);
        $stmt->bindParam(':correo', $empresa->correo_empresa);
        $stmt->bindParam(':telefono', $empresa->telefono_empresa);
        $stmt->bindParam(':password', $empresa->password_empresa);
        $stmt->bindParam(':cedula', $empresa->cedula_empresa);
        $stmt->execute();
    }
}


?>
