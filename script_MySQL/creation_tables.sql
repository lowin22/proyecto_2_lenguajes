create DATABASE proyecto_2_C00490_C04408;

use proyecto_2_C00490_C04408;
--create table tb_categoria(
  --  id_categoria INT PRIMARY KEY AUTO_INCREMENT, 
   -- nombre_categoria varchar(100) not null 
--);
CREATE table tb_empresa(
    id_empresa INT PRIMARY KEY AUTO_INCREMENT,
    nombre_empresa VARCHAR(200) not null,
    direccion_fisica_empresa VARCHAR(200) not null,
    fecha_creacion_empresa date not null,
    correo_empresa VARCHAR(100) not null, 
    telefono_emresa VARCHAR(9) not null,
    password_empresa VARCHAR(100) not null
)


create table tb_cupon (
    id_cupon INT PRIMARY KEY AUTO_INCREMENT, 
    codigo_cupon varchar(10) not null, 
    descuento_cupon int not null, 
    precio_cupon int not null,
    disponible_cupon boolean not null, 
    categoria_cupon int, 
    empresa_cupon int,
    imagen_cupon varchar(100) not null,
    fecha_vencimiento_cupon datetime not null
);
alter table tb_cupon add constraint fk_categoria_cupon foreign key (categoria_cupon) references tb_categoria(id_categoria);
alter table tb_cupon add constraint fk_empresa_cupon foreign key (empresa_cupon) references tb_empresa(id_empresa);

insert into tb_categoria(nombre_categoria) values ('Comida');
insert into tb_empresa(nombre_empresa, direccion_fisica_empresa, fecha_creacion_empresa, correo_empresa, telefono_emresa, password_empresa) 
values ('McDonalds', 'Turrialba Centro', '2023-01-01', 'mcurrilaba@mc.com', '2222-2222', '1234');

SELECT * FROM tb_cupon;

CALL sp_getCupones();
SELECT 
    tb_cupon.id_cupon, 
    tb_cupon.codigo_cupon, 
    tb_cupon.descuento_cupon, 
    tb_cupon.precio_cupon, 
    tb_cupon.disponible_cupon, 
    categoria.nombre_categoria, 
    empresa.nombre_empresa, 
    tb_cupon.imagen_cupon, 
    tb_cupon.fecha_vencimiento_cupon 
FROM 
    tb_cupon 
JOIN 
   tb_categoria AS categoria 
   ON tb_cupon.categoria_cupon = categoria.id_categoria
JOIN 
    tb_empresa AS empresa 
    ON tb_cupon.empresa_cupon = empresa.id_empresa;
select * from tb_categoria;