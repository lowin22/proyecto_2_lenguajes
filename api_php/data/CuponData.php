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
    public function changeStateCupon($id){
        $stmt = $this->conn->prepare("call sp_change_disponibility_cupon(:id)");
        $stmt->bindParam(':id', $id);
        $stmt->execute();
    }
    public function getCuponDescuento($id){
        $stmt = $this->conn->prepare("call sp_getCuponOfertaDescuentoById(:id)");
        $stmt->bindParam(':id', $id);
        $stmt->execute();
        return $stmt->fetch();
    }
    public function getDescuentosByCupon($id){
        $stmt = $this->conn->prepare("call sp_getCuponOfertaDescuentoByCupon(:id)");
        $stmt->bindParam(':id', $id);
        $stmt->execute();
        return $stmt->fetchAll();
    }
    public function changeStateDescuento($id){
        $stmt = $this->conn->prepare("call sp_update_change_cupon_oferta(:id)");
        $stmt->bindParam(':id', $id);
        $stmt->execute();
    }
    public function insertCuponDescuento($cuponDescuento){
        $stmt = $this->conn->prepare("call sp_insertCuponOferta(:id_cupon, :porcentaje_reabaja, :fecha_inicio_cupon_oferta, :fecha_fin_cupon_oferta)");
        $stmt->bindParam(':id_cupon', $cuponDescuento->idCupon);
        $stmt->bindParam(':porcentaje_reabaja', $cuponDescuento->porcentajeDescuento);
        $stmt->bindParam(':fecha_inicio_cupon_oferta', $cuponDescuento->fechaInicioDescuento);
        $stmt->bindParam(':fecha_fin_cupon_oferta', $cuponDescuento->fechaFinDescuento);
        $stmt->execute();
    }
    public function getCuponActivos(){
        $stmt = $this->conn->prepare("call sp_getCuponActivos()");
        $stmt->execute();
        return $stmt->fetchAll();
    }
    public function getCuponActivosByCategoria($categoria){
        $stmt = $this->conn->prepare("call sp_getCuponActivosByCategoria(:categoria_)");
        $stmt->bindParam(':categoria_', $categoria);
        $stmt->execute();
        return $stmt->fetchAll();
    }
}