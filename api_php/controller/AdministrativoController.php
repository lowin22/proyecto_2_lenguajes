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
}