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
        $stmt = $this->conn->prepare("call sp_insertCupon(:codigo, :descuento, :precio, :disponible, :empresa, :categoria, :imagen)");
        $stmt->bindParam(':codigo', $cupon->codigoCupon);
        $stmt->bindParam(':descuento', $cupon->descuentoCupon);
        $stmt->bindParam(':precio', $cupon->precioCupon);
        $stmt->bindParam(':disponible', $cupon->disponibleCupon);
        $stmt->bindParam(':empresa', $cupon->empresaNombre);
        $stmt->bindParam(':categoria', $cupon->categoriaCupon);
        $stmt->bindParam(':imagen', $cupon->imagenCupon);
        $stmt->execute();
    }
}