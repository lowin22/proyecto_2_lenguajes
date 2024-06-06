<?php 
require_once '../business/CuponBusiness.php';
class CuponController{
    private $cuponBusiness;
    public function __construct(){
        $this->cuponBusiness = new CuponBusiness();
    }
    public function getCupones(){
        return $this->cuponBusiness->getCupones();
    }
    public function getCupon($id){
        return $this->cuponBusiness->getCupon($id);
    }
    public function insertCupon($codigo, $descuento, $precio, $empresa, $categoria, $imagen, $fechaVencimiento, $fecha_inicio){
        return $this->cuponBusiness->insertCupon($codigo, $descuento, $precio, $empresa, $categoria, $imagen, $fechaVencimiento, $fecha_inicio);
    }
    public function changeStateCupon($id){
        return $this->cuponBusiness->changeStateCupon($id);
    }
    public function getCuponDescuento($id){
        return $this->cuponBusiness->getCuponDescuento($id);
    }
    public function getDescuentosByCupon($id){
        return $this->cuponBusiness->getDescuentosByCupon($id);
    }
    public function changeStateDescuento($id){
        return $this->cuponBusiness->changeStateDescuento($id);
    }
    public function insertCuponDescuento($idCupon, $porcentaje, $fecha_inicio, $fecha_fin){
        return $this->cuponBusiness->insertCuponDescuento($idCupon, $porcentaje, $fecha_inicio, $fecha_fin);
    }
}
?>