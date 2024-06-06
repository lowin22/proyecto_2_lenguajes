<?php

class CuponDescuentoModel{
public $idCupon;
public $porcentajeDescuento;
public $fechaInicioDescuento;
public $fechaFinDescuento;

public function __construct($idCupon, $porcentajeDescuento, $fechaInicioDescuento, $fechaFinDescuento){
    $this->idCupon = $idCupon;
    $this->porcentajeDescuento = $porcentajeDescuento;
    $this->fechaInicioDescuento = $fechaInicioDescuento;
    $this->fechaFinDescuento = $fechaFinDescuento;
}
}
?>