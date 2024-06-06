<?php
require '../business/EmpresaBusiness.php';
class EmpresaController{
    private $empresaBusiness;
    public function __construct(){
        $this->empresaBusiness = new EmpresaBusiness();
    }
    public function getEmpresaById($id){
        return $this->empresaBusiness->getEmpresaById($id);
    }

    public function updateEmpresa($empresa){
        return $this->empresaBusiness->updateEmpresa($empresa);
    }

    public function loginUsuario($usuario){

        return $this->empresaBusiness->loginUsuario($usuario);
    }

}