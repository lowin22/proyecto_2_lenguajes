import { Toaster, toast } from "sonner";
import axios from "axios";
import { useRoute, useLocation } from "wouter";
import { useEffect, useState } from "react";
import CupunDetail from "../Components/CupunDetail";
import Promocion from "../Components/Promocion";

function PageCuponDetail() {
  const [match, params] = useRoute("/viewpromotion/:id");
  const [, setLocation] = useLocation();
  const [cupon, setCupon] = useState(null);  
  const [promociones, setPromociones] = useState([]);
  const [change, setChange] = useState(false);

  useEffect(() => {
    const obtenerCupon = async () => {
      try {
        const response = await axios.get(`http://127.0.0.1/api_php/services/cuponservice.php?idCuponDescuento=${params.id}`);
        setCupon(response.data);
        console.log('Cupon:', response.data);
      } catch (error) {
        toast.error("Error al obtener el cupón");
        console.error("Error al enviar datos:", error);
      }
    };

    const obtenerPromociones = async () => {
      try {
        const response = await axios.get(`http://127.0.0.1/api_php/services/cuponservice.php?descuentosCupon=${params.id}`);
        setPromociones(response.data);
        console.log('Promociones:', response.data);
      } catch (error) {
        toast.error("Error al obtener las promociones");
        console.error("Error al enviar datos:", error);
      }
    };

    obtenerCupon();
    obtenerPromociones();
  }, [params.id, change]);  // Ensure the effect runs when `params.id` or `change` changes

  const handleButtonClick = async (id) => {
    try {
      const response = await axios.get(`http://127.0.0.1/api_php/services/cuponservice.php?stateCupon=${id}`);
      toast.success(response.data);
      setChange(!change);
    } catch (error) {
      toast.error("Error al actualizar el cupón");
      console.error("Error al enviar datos:", error);
    }
  };

  const handlePromocion = async (id) => {
    try {
      const response = await axios.get(`http://127.0.0.1/api_php/services/cuponservice.php?stateDescuento=${id}`);
      toast.success(response.data);
      setChange(!change);
    } catch (error) {
      toast.error("Error al actualizar el descuento");
      console.error("Error al enviar datos:", error);
    }
  };

  if (!match) setLocation(`/home`);
  
  if (!cupon) {
    return <div>Cargando...</div>;  // Add loading state
  }

  return (
    <div>
      <h1>Detalle de cupón</h1>
      <CupunDetail 
        codigo={cupon.codigo_cupon}
        descuento={cupon.porcentaje_cupon}
        precio={cupon.precio_cupon}
        disponible={cupon.disponible_cupon}
        categoria={cupon.nombre_categoria}
        empresa={cupon.nombre_empresa}
        vencimiento={cupon.fecha_vencimiento_cupon}
        porcentaje={cupon.porcentaje_reabaja}
        total={cupon.total_porcentaje}
        id={cupon.id_cupon}
        update={handleButtonClick} 
      />
      <h2>Lista de promociones</h2>
      {promociones.map((promocion) => (
        <Promocion
          key={promocion.id_cupon_oferta}
          id={promocion.id_cupon_oferta}
          porcentaje={promocion.porcentaje_reabaja}
          activo={promocion.activo_cupon_oferta}
          fecha_inicio={promocion.fecha_inicio_cupon_oferta}
          fecha_fin={promocion.fecha_fin_cupon_oferta}
          update={handlePromocion}
        />
      ))}

      <Toaster
        theme="dark"
        position="top-right"
        duration={4000}
        visibleToasts={2}
      />
    </div>
  );
}

export default PageCuponDetail;
