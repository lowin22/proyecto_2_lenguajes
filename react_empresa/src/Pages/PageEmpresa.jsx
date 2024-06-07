import { useEffect } from "react"
import { useRoute } from "wouter"
import { useLocation } from "wouter"
import { useState } from "react"
import CuponView from "../Components/CuponView"
import EmpresaGestio from "../Components/EmpresaGestio"
import { Toaster, toast } from "sonner";
import axios from "axios";

function PageEmpresa() {
  const [cupones, setCupones] = useState([])
  const[empresa, setEmpresa] = useState()
  const [change, setChange] = useState(false)
  const [,setLocation] = useLocation()
  useEffect(() => {

    const validarSesion = () => {

      if(sessionStorage.getItem("usuarioLogin") === null){
        setLocation("/login");
        return false;
      }

      return true;
    }

        if(!validarSesion()) return;

        async function getDataEmpresa() {
          const response = await fetch(`http://127.0.0.1/proyecto_2_lenguajes/api_php/services/AdmistrativoService.php?idEmpresa=${sessionStorage.getItem("usuarioLogin")}`)
          const data = await response.json()
          setEmpresa(data)
          console.log(data)
        }
    
        async function getCuponesEmpresa(){
          const response = await fetch(`http://127.0.0.1/proyecto_2_lenguajes/api_php/services/AdmistrativoService.php?idEmpresaCupon=${sessionStorage.getItem("usuarioLogin")}`
          )
          const data = await response.json()
          setCupones(data)   
          console.log(data)
        }
        getDataEmpresa()
         getCuponesEmpresa()
      }
      , [change, setLocation])
      const handleButtonClick = async (id) => {
        try {
          const response = await axios.get(
            `http://127.0.0.1/proyecto_2_lenguajes/api_php/services/cuponservice.php?stateCupon=${id}` );
            
        
          toast.success(response.data);
          setChange(!change);
        } catch (error) {
          toast.error("Error al actualizar el cupón");
          console.error("Error al enviar datos:", error);
        }
      };
      const handleStateEmpresa = async (id) => {
        try {
          const response = await axios.get(
            `http://127.0.0.1/proyecto_2_lenguajes/api_php/services/AdmistrativoService.php?stateEmpresa=${id}`);
          toast.success(response.data);
          setChange(!change);
        } catch (error) {
          toast.error("Error al actualizar la empresa");
          console.error("Error al enviar datos:", error);
        }
      }
 
    return (
      <>
      <h1 className="mb-6 text-3xl font-bold">Empresa</h1>
      

      {empresa && (
  <EmpresaGestio
    key={empresa.id_empresa}
    idEmpresa={empresa.id_empresa}
    nombre={empresa.nombre_empresa}
    direccion={empresa.direccion_fisica_empresa}
    cedula={empresa.cedula_empresa}
    fecha={empresa.fecha_creacion_empresa}
    correo={empresa.correo_empresa}
    telefono={empresa.telefono_empresa}
    stateEmpresa={handleStateEmpresa}
    disponible={empresa.activa_empresa}
  />
)}
     
     {cupones.map((item) => (
  <CuponView
    key={item.id_cupon}
    id={item.id_cupon}
    codigo={item.codigo_cupon}
    descuento={item.porcentaje_cupon}
    precio={item.precio_cupon}
    disponible={item.disponible_cupon}
    categoria={item.nombre_categoria}
    empresa={item.nombre_empresa}
    imagen={item.imagen_cupon}
    venciemiento={item.fecha_vencimiento_cupon}
    update={handleButtonClick}
  />
))}
   <Toaster 
      theme="dark"
      position="top-right"
      duration={4000}
      visibleToasts={2}
      />
      
      </>
      
    )
}

export default PageEmpresa