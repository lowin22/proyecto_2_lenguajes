--creacion de los procedimientos almacenados
use proyecto_2_C00490_C04408;
create PROCEDURE sp_getCupones()
BEGIN
    SELECT 
    id_cupon, 
    codigo_cupon, 
    descuento_cupon, 
    precio_cupon, 
    disponible_cupon, 
    categoria.nombre_categoria, 
    empresa.nombre_empresa, 
    imagen_cupon, 
    fecha_vencimiento_cupon 
FROM 
    tb_cupon 
JOIN 
    tb_categoria AS categoria 
    ON tb_cupon.categoria_cupon = categoria.id_categoria
JOIN 
    tb_empresa AS empresa 
    ON tb_cupon.empresa_cupon = empresa.id_empresa;
END
CREATE PROCEDURE sp_getCupon(IN id_cupon_in INT)
BEGIN
   SELECT 
    id_cupon, 
    codigo_cupon, 
    descuento_cupon, 
    precio_cupon, 
    disponible_cupon, 
    categoria.nombre_categoria, 
    empresa.nombre_empresa, 
    imagen_cupon, 
    fecha_vencimiento_cupon 
FROM 
    tb_cupon 
JOIN 
    tb_categoria AS categoria 
    ON tb_cupon.categoria_cupon = categoria.id_categoria
JOIN 
    tb_empresa AS empresa 
    ON tb_cupon.empresa_cupon = empresa.id_empresa
WHERE 
    id_cupon = id_cupon_in;
END 
create PROCEDURE sp_insertCupon(IN codigo_cupon varchar(10), IN descuento_cupon int, IN precio_cupon int, IN disponible_cupon boolean, IN categoria_cupon int, IN empresa_cupon int, IN imagen_cupon varchar(100), IN fecha_vencimiento_cupon datetime)
BEGIN
    INSERT INTO tb_cupon(codigo_cupon, descuento_cupon, precio_cupon, disponible_cupon, categoria_cupon, empresa_cupon, imagen_cupon, fecha_vencimiento_cupon) VALUES (codigo_cupon, descuento_cupon, precio_cupon, disponible_cupon, categoria_cupon, empresa_cupon, imagen_cupon, fecha_vencimiento_cupon);
END

call sp_insertCupon('CUPON1', 10, 100, 1, 1, 1, 'imagen1', '2021-12-31');

call sp_getCupones();
call sp_getCupon(1);
```