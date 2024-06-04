<?php 
require_once '../config/DataBase.php';
class CuponData{
    private $conn;
    public function __construct(){
        $database = new DataBase();
        $db = $database->dbConnection();
        $this->conn = $db;
    }
    public function getCupones(){
        $stmt = $this->conn->prepare("call sp_getCupones()");
        $stmt->execute();
        return $stmt->fetchAll();
    }
    public function getCupon($id){
        $stmt = $this->conn->prepare("call sp_getCupon(:id)");
        $stmt->bindParam(':id', $id);
        $stmt->execute();
        return $stmt->fetch();
    }
    public function insertCupon($cupon) {
        $stmt = $this->conn->prepare("call sp_insertCupon(:codigo, :porcentaje, :precio, :categoria, :empresa , :imagen, :fecha_vencimiento,:fecha_inicio)");
        $stmt->bindParam(':codigo', $cupon->codigoCupon);
        $stmt->bindParam(':porcentaje', $cupon->descuentoCupon);
        $stmt->bindParam(':precio', $cupon->precioCupon);
        $stmt->bindParam(':categoria', $cupon->categoriaCupon);
        $stmt->bindParam(':empresa', $cupon->empresaNombre);
        $stmt->bindParam(':imagen', $cupon->imagenCupon);
        $stmt->bindParam(':fecha_vencimiento', $cupon->fechaVencimientoCupon);
        $stmt->bindParam(':fecha_inicio', $cupon->fecha_inicio);
        $stmt->execute();
    }
}