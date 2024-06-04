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
}
?>