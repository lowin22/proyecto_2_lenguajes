<?php
require '../business/AdministrativoBusiness.php';
class AdministrativoController{
    private $administrativoBusiness;
    public function __construct(){
        $this->administrativoBusiness = new AdministrativoBusiness();
    }
    public function getEmpresasActivas(){
        return $this->administrativoBusiness->getEmpresasActivas();
    }
    public function getEmpresaById($id){
        return $this->administrativoBusiness->getEmpresaById($id);
    }
    public function getCuponesByIdEmpresa($id){
        return $this->administrativoBusiness->getCuponesByIdEmpresa($id);
    }
    public function insertEmpresa($nombre, $direccion, $fecha, $correo, $telefono, $password, $cedula){
        return $this->administrativoBusiness->insertEmpresa($nombre, $direccion, $fecha, $correo, $telefono, $password, $cedula);
    }
    public function insertCategoria($nombre){
        return $this->administrativoBusiness->insertCategoria($nombre);
    }
    public function getCategorias(){
        return $this->administrativoBusiness->getCategorias();
    }
    public function getEmpresasDetail(){
        return $this->administrativoBusiness->getEmpresaDetail();
    }
    public function changeStateEmpresa($id){
        return $this->administrativoBusiness->changeStateEmpresa($id);
    }
    public function updateEmpresa($id, $nombre, $direccion, $fecha, $correo, $telefono, $cedula){
        return $this->administrativoBusiness->updateEmpresa($id, $nombre, $direccion, $fecha, $correo, $telefono, $cedula);
    }
    public function updateCupon($id, $codigo, $descuento, $precio, $empresa, $categoria, $imagen, $fechaVencimiento, $fecha_inicio){
        return $this->administrativoBusiness->updateCupon($id, $codigo, $descuento, $precio, $empresa, $categoria, $imagen, $fechaVencimiento, $fecha_inicio);

    }
    public function updatePromocion($id, $descuento, $fecha_inicio, $fecha_vencimiento){
        return $this->administrativoBusiness->updatePromocion($id, $descuento, $fecha_inicio, $fecha_vencimiento);
    }
    public function descuentoById($id){
        return $this->administrativoBusiness->descuentoById($id);
    }
    public function getAllCategorias(){
        return $this->administrativoBusiness->getAllCategorias();
    }
    public function updateCategoria($id, $nombre){
        return $this->administrativoBusiness->updateCategoria($id, $nombre);
    }
    public function changeDisponibilidadCategoria($id){
        return $this->administrativoBusiness->changeDisponibilidadCategoria($id);
    }

}