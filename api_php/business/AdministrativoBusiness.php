<?php 
require_once '../data/AdministrativoData.php';
require_once '../models/AdministrativoModel.php';
require_once '../models/CuponModel.php';
require_once '../models/CuponDescuentoModel.php';
class AdministrativoBusiness{
    private $administrativoData;
    public function __construct(){
        $this->administrativoData = new AdministrativoData();
    }
    public function getEmpresasActivas(){
        return $this->administrativoData->getEmpresasActivas();
    }
    public function getEmpresaById($id){
        return $this->administrativoData->getEmpresaById($id);
    }
    public function getCuponesByIdEmpresa($id){
        return $this->administrativoData->getCuponesByIdEmpresa($id);
    }
    public function insertEmpresa($nombre, $direccion, $fecha, $correo, $telefono, $password, $cedula){
        $empresa = new AdministrativoModel(0, $nombre, $direccion, $fecha, $correo, $telefono, $password, $cedula);
        return $this->administrativoData->insertEmpresa($empresa);
    }
    public function insertCategoria($nombre){
        return $this->administrativoData->insertCategoria($nombre);
    }

    public function getCategorias(){
        return $this->administrativoData->getCategorias();
    }
    public function getEmpresaDetail(){
        return $this->administrativoData->getEmpresaDetail();
    }
    public function changeStateEmpresa($id){
        return $this->administrativoData->changeStateEmpresa($id);
    }

    public function updateEmpresa($id, $nombre, $direccion, $fecha, $correo, $telefono, $cedula){
        $empresa = new AdministrativoModel($id, $nombre, $direccion, $fecha, $correo, $telefono, "", $cedula);
        return $this->administrativoData->updateEmpresa($empresa);
    }
    public function updateCupon($id, $codigo, $descuento, $precio, $empresa, $categoria, $imagen, $fechaVencimiento, $fecha_inicio){
        $cupon = new CuponModel($id, $codigo, $descuento, $precio, $empresa, $categoria, $imagen, $fechaVencimiento, $fecha_inicio);
        return $this->administrativoData->updateCupon($cupon);
    }
    public function updatePromocion($id, $descuento, $fecha_inicio, $fecha_vencimiento){
        $descuento = new CuponDescuentoModel($id, $descuento, $fecha_inicio, $fecha_vencimiento);
        return $this->administrativoData->updatePromocion($descuento);
    }
    public function descuentoById($id){
        return $this->administrativoData->getDescuentoById($id);
    }
    public function getAllCategorias(){
        return $this->administrativoData->getAllCategorias();
    }
    public function updateCategoria($id, $nombre){
        return $this->administrativoData->updateCategoria($id, $nombre);
    }
    public function changeDisponibilidadCategoria($id){
        return $this->administrativoData->changeDisponibilidadCategoria($id);
    }
}

