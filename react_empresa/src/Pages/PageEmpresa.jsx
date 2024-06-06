import { useEffect } from "react"
import { useRoute } from "wouter"
import { useLocation } from "wouter"
import { useState } from "react"
import CuponView from "../Components/CuponView"
import EmpresaGestio from "../Components/EmpresaGestio"

function PageEmpresa() {
  const [cupones, setCupones] = useState([])
  const[empresa, setEmpresa] = useState()
  useEffect(() => {

    const validarSesion = () => {

      if(sessionStorage.getItem("usuarioLogin") === null){
        setLocation("/login");
        return false;
      }

      return true;
    }

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
      
      //verificar la sesion primero
      if(!validarSesion()) return;

      getDataEmpresa()
      getCuponesEmpresa()

    }
    , [])

    // const [match, params] = useRoute("/empresa/:id")
    const [, setLocation] = useLocation()
    // if (!match) return  setLocation(`/home`)
 
    return (
      <>
      {/* <h3 className="mb-6 text-3xl font-bold mx-auto max-w-md">Empresa</h3>
       */}

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
  />
))}

      
      </>
      
    )
}

export default PageEmpresa