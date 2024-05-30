import { useEffect } from "react"
import { useRoute } from "wouter"
import { useLocation } from "wouter"
import { useState } from "react"
import EmpresaEdit from "../Components/EmpresaEdit"
import CuponView from "../Components/CuponView"

function PageEmpresa() {
  const [cupones, setCupones] = useState([])
  const[empresa, setEmpresa] = useState()
  useEffect(() => {
        async function getDataEmpresa() {
          const response = await fetch(`http://127.0.0.1/api_php/services/AdmistrativoService.php?idEmpresa=${params.id}`)
          const data = await response.json()
          setEmpresa(data)
          console.log(data)
        }
    
        async function getCuponesEmpresa(){
          const response = await fetch(`http://127.0.0.1/api_php/services/AdmistrativoService.php?idEmpresaCupon=${params.id}`
          )
          const data = await response.json()
          setCupones(data)   
          console.log(data)
        }
        getDataEmpresa()
         getCuponesEmpresa()
      }
      , [])

    const [match, params] = useRoute("/empresa/:id")
    const [, setLocation] = useLocation()
    if (!match) return  setLocation(`/home`)
 
    return (
      <>
      <h1 className="mb-6 text-3xl font-bold">Lista de Empresas {params.id}</h1>
      

      {empresa && (
  <EmpresaEdit
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
    descuento={item.descuento_cupon}
    precio={item.precio_cupon}
    disponible={item.disponible_cupon}
    categoria={item.nombre_categoria}
    empresa={item.nombre_empresa}
    imagen={item.imagen_cupon}
    vencimiento={item.fecha_vencimiento_cupon}
  />
))}

      
      </>
      
    )
}

export default PageEmpresa