<?php
require_once '../config/DataBase.php';
class EmpresaData{
    private $conn;
    public function __construct(){
        $database = new DataBase();
        $db = $database->dbConnection();
        $this->conn = $db;
    }
    public function getEmpresaById($empresa){
        $stmt = $this->conn->prepare("call sp_getEmpresaById(:id)");
        $stmt->bindParam(':id', $empresa->id_empresa);
        $stmt->execute();
        return $stmt->fetchAll(PDO::FETCH_ASSOC);
    }
    public function updateEmpresa($empresa) {
        $stmt = $this->conn->prepare("call sp_updateEmpresa(:id, :nombre, :dirreccion, :fecha, :correo, :telefono, :password, :cedula)");
        $stmt->bindParam(':id', $empresa->id_empresa);
        $stmt->bindParam(':nombre', $empresa->nombre_empresa);
        $stmt->bindParam(':dirreccion', $empresa->direccion_empresa);
        $stmt->bindParam(':fecha', $empresa->fecha_creacion_empresa);
        $stmt->bindParam(':correo', $empresa->correo_empresa);
        $stmt->bindParam(':telefono', $empresa->telefono_empresa);
        $stmt->bindParam(':password', $empresa->password_empresa);
        $stmt->bindParam(':cedula', $empresa->cedula_empresa);
        $result = $stmt->execute();
        return $result;
    }
    
}
?>
