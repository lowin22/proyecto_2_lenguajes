<?php 
class AdministrativoModel{
public $id_empresa;
public $nombre_empresa;
public $direccion_empresa;
public $fecha_creacion_empresa;
public $correo_empresa;
public $telefono_empresa;
public $password_empresa;
public $cedula_empresa;

public function __construct($id_empresa, $nombre_empresa, $direccion_empresa, $fecha_creacion_empresa, $correo_empresa, $telefono_empresa, $password_empresa, $cedula_empresa){
    $this->id_empresa = $id_empresa;
    $this->nombre_empresa = $nombre_empresa;
    $this->direccion_empresa = $direccion_empresa;
    $this->fecha_creacion_empresa = $fecha_creacion_empresa;
    $this->correo_empresa = $correo_empresa;
    $this->telefono_empresa = $telefono_empresa;
    $this->password_empresa = $password_empresa;
    $this->cedula_empresa = $cedula_empresa;
}
}
?>