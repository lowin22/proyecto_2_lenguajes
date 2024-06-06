<?php 
require_once '../data/EmpresaData.php';
require_once '../models/EmpresaModel.php';
class EmpresaBusiness{
    private $empresaData;
    public function __construct(){
        $this->empresaData = new EmpresaData();
    }
    public function getEmpresaById($id){
        $empresa = new EmpresaModel($id);
        return $this->empresaData->getEmpresaById($empresa);
    }
    public function updateEmpresa($empresa){
        
        return $this->empresaData->updateEmpresa($empresa);

    }
    public function loginUsuario($usuario){
        return $this->empresaData->loginUsuario($usuario);
    }

}