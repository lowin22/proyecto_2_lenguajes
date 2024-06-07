<?php
require_once '../config/DataBase.php';
class AdministrativoData{

    private $conn;
    public function __construct(){
        $database = new DataBase();
        $db = $database->dbConnection();
        $this->conn = $db;
    }
    public function getEmpresaById($id){
        $stmt = $this->conn->prepare("call sp_getEmpresaById(:id)");
        $stmt->bindParam(':id', $id);
        $stmt->execute();
        return $stmt->fetch();
    }
    public function getCuponesByIdEmpresa($id){
        $stmt = $this->conn->prepare("call sp_getCuponIdEmpresa(:id)");
        $stmt->bindParam(':id', $id);
        $stmt->execute();
        return $stmt->fetchAll();
    }
    public function getEmpresasActivas(){
        $stmt = $this->conn->prepare("call getEmpresas()");
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
    public function insertCategoria($nombre){
        $stmt = $this->conn->prepare("call sp_insertCategoria(:nombre)");
        $stmt->bindParam(':nombre', $nombre);
        $stmt->execute();
    }
    public function getCategorias(){
        $stmt = $this->conn->prepare("call sp_selectCategoria()");
        $stmt->execute();
        return $stmt->fetchAll();
    }
    public function getEmpresaDetail(){
        $stmt = $this->conn->prepare("call sp_getEmpresaDetail()");
        $stmt->execute();
        return $stmt->fetchAll();
    }
    public function changeStateEmpresa($id){
        $stmt = $this->conn->prepare("call sp_update_change_empresa(:id)");
        $stmt->bindParam(':id', $id);
        $stmt->execute();
    }
    public function updateEmpresa($empresa){
        $stmt = $this->conn->prepare("call sp_updateEmpresaAdmin(:id, :nombre, :dirreccion, :fecha, :correo, :telefono, :cedula)");
        $stmt->bindParam(':id', $empresa->id_empresa);
        $stmt->bindParam(':nombre', $empresa->nombre_empresa);
        $stmt->bindParam(':dirreccion', $empresa->direccion_empresa);
        $stmt->bindParam(':fecha', $empresa->fecha_creacion_empresa);
        $stmt->bindParam(':correo', $empresa->correo_empresa);
        $stmt->bindParam(':telefono', $empresa->telefono_empresa);
        $stmt->bindParam(':cedula', $empresa->cedula_empresa);
        $stmt->execute();
    }
}


?>
