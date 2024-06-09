<?php
require_once '../data/CuponData.php';
require_once '../models/CuponModel.php';
require_once '../models/CuponDescuentoModel.php';
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
    public function insertCupon($codigo, $descuento, $precio, $empresa, $categoria, $imagen, $fechaVencimiento, $fecha_inicio){
        $cupon = new CuponModel(0, $codigo, $descuento, $precio, $empresa, $categoria, $imagen, $fechaVencimiento, $fecha_inicio);
        return $this->cuponData->insertCupon($cupon);
    }
    public function changeStateCupon($id){
        return $this->cuponData->changeStateCupon($id);
    }
    public function getCuponDescuento($id){
        return $this->cuponData->getCuponDescuento($id);
    }
    public function getDescuentosByCupon($id){
        return $this->cuponData->getDescuentosByCupon($id);
    }
    public function changeStateDescuento($id){
        return $this->cuponData->changeStateDescuento($id);
    }
    public function insertCuponDescuento($idCupon, $porcentaje, $fecha_inicio, $fecha_fin){
        $cuponDescuento = new CuponDescuentoModel($idCupon, $porcentaje, $fecha_inicio, $fecha_fin);
        return $this->cuponData->insertCuponDescuento($cuponDescuento);
    }
    public function getCuponActivos(){
        return $this->cuponData->getCuponActivos();
    }
    public function getCuponActivosByCategoria($categoria){
        return $this->cuponData->getCuponActivosByCategoria($categoria);
    }
}
?>