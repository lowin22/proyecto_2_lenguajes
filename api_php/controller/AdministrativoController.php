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

}