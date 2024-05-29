<?php
require_once '../data/CuponData.php';
require_once '../models/CuponModel.php';
class CuponBusiness{
    private $cuponData;
    public function __construct(){
        $this->cuponData = new CuponData();
    }
    public function getCupones(){
        return $this->cuponData->getCupones();
    }
    public function getCupon($id){
        return $this->cuponData->getCupon($id);
    }
    public function insertCupon($codigo, $descuento, $precio, $disponible, $empresa, $categoria, $imagen, $fechaVencimiento){
        $cupon = new CuponModel(0, $codigo, $descuento, $precio, $disponible, $empresa, $categoria, $imagen, $fechaVencimiento);
        return $this->cuponData->insertCupon($cupon);
    }
}
?>