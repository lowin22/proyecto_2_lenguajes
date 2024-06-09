<?php
require_once '../config/DataBase.php';
class AdministrativoData{

    private $conn;
    public function __construct(){
        $database = new DataBase();
        $db = $database->dbConnection();
        $this->conn = $db;
    }
    public function getEmpresaById($id){
        $stmt = $this->conn->prepare("call sp_getEmpresaById(:id)");
        $stmt->bindParam(':id', $id);
        $stmt->execute();
        return $stmt->fetch();
    }
    public function getCuponesByIdEmpresa($id){
        $stmt = $this->conn->prepare("call sp_getCuponIdEmpresa(:id)");
        $stmt->bindParam(':id', $id);
        $stmt->execute();
        return $stmt->fetchAll();
    }
    public function getEmpresasActivas(){
        $stmt = $this->conn->prepare("call getEmpresas()");
        $stmt->execute();
        return $stmt->fetchAll();
    }
    public function insertEmpresa($empresa) {
        $stmt = $this->conn->prepare("call sp_insertEmpresa(:nombre, :dirreccion, :fecha, :correo, :telefono, :password, :cedula)");
        $stmt->bindParam(':nombre', $empresa->nombre_empresa);
        $stmt->bindParam(':dirreccion', $empresa->direccion_empresa);
        $stmt->bindParam(':fecha', $empresa->fecha_creacion_empresa);
        $stmt->bindParam(':correo', $empresa->correo_empresa);
        $stmt->bindParam(':telefono', $empresa->telefono_empresa);
        $stmt->bindParam(':password', $empresa->password_empresa);
        $stmt->bindParam(':cedula', $empresa->cedula_empresa);
        $stmt->execute();
    }
    public function insertCategoria($nombre){
        $stmt = $this->conn->prepare("call sp_insertCategoria(:nombre)");
        $stmt->bindParam(':nombre', $nombre);
        $stmt->execute();
    }
    public function getCategorias(){
        $stmt = $this->conn->prepare("call sp_selectCategoria()");
        $stmt->execute();
        return $stmt->fetchAll();
    }
    public function getEmpresaDetail(){
        $stmt = $this->conn->prepare("call sp_getEmpresaDetail()");
        $stmt->execute();
        return $stmt->fetchAll();
    }
    public function changeStateEmpresa($id){
        $stmt = $this->conn->prepare("call sp_update_change_empresa(:id)");
        $stmt->bindParam(':id', $id);
        $stmt->execute();
    }
    public function updateEmpresa($empresa){
        $stmt = $this->conn->prepare("call sp_updateEmpresaAdmin(:id, :nombre, :dirreccion, :fecha, :correo, :telefono, :cedula)");
        $stmt->bindParam(':id', $empresa->id_empresa);
        $stmt->bindParam(':nombre', $empresa->nombre_empresa);
        $stmt->bindParam(':dirreccion', $empresa->direccion_empresa);
        $stmt->bindParam(':fecha', $empresa->fecha_creacion_empresa);
        $stmt->bindParam(':correo', $empresa->correo_empresa);
        $stmt->bindParam(':telefono', $empresa->telefono_empresa);
        $stmt->bindParam(':cedula', $empresa->cedula_empresa);
        $stmt->execute();
    }
    public function updateCupon($cupon){
        $stmt = $this->conn->prepare("call sp_update_cupon(:id_cupon_, :codigo, :porcentaje, :precio, :categoria,:empresa ,:imagen, :fecha_inicio, :fecha_vencimiento)");
        $stmt->bindParam(':id_cupon_', $cupon->idCupon);
        $stmt->bindParam(':codigo', $cupon->codigoCupon);
        $stmt->bindParam(':porcentaje', $cupon->descuentoCupon);
        $stmt->bindParam(':precio', $cupon->precioCupon);
        $stmt->bindParam(':categoria', $cupon->categoriaCupon);
        $stmt->bindParam(':empresa', $cupon->empresaNombre);
        $stmt->bindParam(':imagen', $cupon->imagenCupon);
        $stmt->bindParam(':fecha_inicio', $cupon->fecha_inicio);
        $stmt->bindParam(':fecha_vencimiento', $cupon->fechaVencimientoCupon);
       
        $stmt->execute();
    }
    public function updatePromocion($promocion){
        $stmt = $this->conn->prepare("call sp_update_cupon_oferta(:id_cupon_oferta_, :porcentaje_reabaja_, :fecha_inicio_cupon_oferta, :fecha_fin_cupon_oferta)");
        $stmt->bindParam(':id_cupon_oferta_', $promocion->idCupon);
        $stmt->bindParam(':porcentaje_reabaja_', $promocion->porcentajeDescuento);
        $stmt->bindParam(':fecha_inicio_cupon_oferta', $promocion->fechaInicioDescuento);
        $stmt->bindParam(':fecha_fin_cupon_oferta', $promocion->fechaFinDescuento);
        $stmt->execute();
    }
    public function getDescuentoByid($id){
        $stmt = $this->conn->prepare("call sp_getOfertaDescuentoByIdPromocion(:id_promocion)");
        $stmt->bindParam(':id_promocion', $id);
        $stmt->execute();
        return $stmt->fetch();
    }

    public function getAllCategorias(){
        $stmt = $this->conn->prepare("call sp_selecAllCategoria()");
        $stmt->execute();
        return $stmt->fetchAll();
    }
    public function updateCategoria($id, $nombre){
        $stmt = $this->conn->prepare("call sp_update_categoria(:id_categoria_, :nombre_)");
        $stmt->bindParam(':id_categoria_', $id);
        $stmt->bindParam(':nombre_', $nombre);
        $stmt->execute();
    }
    public function changeDisponibilidadCategoria($id){
        $stmt = $this->conn->prepare("call sp_change_disponibility_categoria(:id_categoria_)");
        $stmt->bindParam(':id_categoria_', $id);
        $stmt->execute();
    }
}


?>
