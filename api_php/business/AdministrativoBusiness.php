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
    public function insertEmpresa($nombre, $direccion, $fecha, $correo, $telefono, $password, $cedula){
        $empresa = new AdministrativoModel(0, $nombre, $direccion, $fecha, $correo, $telefono, $password, $cedula);
        return $this->administrativoData->insertEmpresa($empresa);
    }
}

