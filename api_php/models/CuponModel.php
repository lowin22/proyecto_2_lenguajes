<?php
class CuponModel{
    public $idCupon;
    public $codigoCupon;
    public $descuentoCupon;
    public $precioCupon;
    public $empresaNombre;
    public $categoriaCupon;
    public $imagenCupon;
    public $fechaVencimientoCupon;
    public $fecha_inicio;

        public function __construct($idCupon, $codigoCupon, $descuentoCupon, $precioCupon, $empresaNombre, $categoriaCupon, $imagenCupon, $fechaVencimientoCupon, $fecha_inicio){
            $this->idCupon = $idCupon;
            $this->codigoCupon = $codigoCupon;
            $this->descuentoCupon = $descuentoCupon;
            $this->precioCupon = $precioCupon;
            $this->empresaNombre = $empresaNombre;
            $this->categoriaCupon = $categoriaCupon;
            $this->imagenCupon = $imagenCupon;
            $this->fechaVencimientoCupon = $fechaVencimientoCupon;
            $this->fecha_inicio = $fecha_inicio;
        }

}
?>