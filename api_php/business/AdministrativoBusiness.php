<?php 
require_once '../data/AdministrativoData.php';
require_once '../models/AdministrativoModel.php';
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
}

