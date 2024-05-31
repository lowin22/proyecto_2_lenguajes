import { useEffect,useState } from "react"
import EmpresaView from "../Components/EmpresaView"
function PagePrincipal() {
const [data, setData] = useState([])
useEffect(() => {
   async function fetchData() {
       const response = await fetch('http://127.0.0.1/api_php/services/AdmistrativoService.php')
       const data = await response.json()
       setData(data)
    }
    fetchData()
}, [])
  return (
    <div className="container px-4 mx-auto">
    <h1 className="mb-6 text-3xl font-bold">Lista de Empresas</h1>
    {data.map((item) => (
      <EmpresaView
        key={item.id_empresa}
        idEmpresa={item.id_empresa}
        nombre={item.nombre_empresa}
        direccion={item.direccion_fisica_empresa}
        cedula={item.cedula_empresa}
        fecha={item.fecha_creacion_empresa}
        correo={item.correo_empresa}
        telefono={item.telefono_empresa}
      />
    ))}
  </div>
)
}

export default PagePrincipal