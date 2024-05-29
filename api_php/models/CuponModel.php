<?php
class CuponModel{
    public $idCupon;
    public $codigoCupon;
    public $descuentoCupon;
    public $precioCupon;
    public $disponibleCupon;
    public $empresaNombre;
    public $categoriaCupon;
    public $imagenCupon;
    public $fechaVencimientoCupon;

        public function __construct($idCupon, $codigoCupon, $descuentoCupon, $precioCupon, $disponibleCupon, $empresaNombre, $categoriaCupon, $imagenCupon, $fechaVencimientoCupon){
            $this->idCupon = $idCupon;
            $this->codigoCupon = $codigoCupon;
            $this->descuentoCupon = $descuentoCupon;
            $this->precioCupon = $precioCupon;
            $this->disponibleCupon = $disponibleCupon;
            $this->empresaNombre = $empresaNombre;
            $this->categoriaCupon = $categoriaCupon;
            $this->imagenCupon = $imagenCupon;
            $this->fechaVencimientoCupon = $fechaVencimientoCupon;
        }

}
?>