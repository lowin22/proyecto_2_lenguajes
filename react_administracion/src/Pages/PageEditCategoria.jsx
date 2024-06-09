import axios from "axios"
import { useEffect, useState } from "react"
import CategoriaEdit from "../Components/CategoriaEdit"
import { Toaster, toast } from "sonner";


function PageEditCategoria() {
    const [categorias, setcategorias] = useState([])
    const [change, setChange] = useState(false)

useEffect(() => {
    const getCategorias = async () => {
    axios.get('http://127.0.0.1/api_php/services/AdmistrativoService.php?allCategorias')
    .then((response) => {
        setcategorias(response.data)
    })
    .catch((error) => {
        console.error('Error al obtener los datos:', error)
    })
}
getCategorias()
} , [change])


    const update = (id) => {
     axios.get(`http://127.0.0.1/api_php/services/AdmistrativoService.php?idCategoriaChangeDisponibilidad=${id}`)
        .then((response) => {
            toast.success(response.data)
            setChange(!change)
        })
        .catch((error) => {
            console.error('Error al obtener los datos:', error)
        })
       

    }
    const actualizar = (id, name) => {
        var f = new FormData()
        f.append('idActualizarCategoria', id)
        f.append('nombre', name)
           f.append('METHOD', 'POST')
              try {
                axios.post("http://127.0.0.1/api_php/services/AdmistrativoService.php", f)
                .then((response) => {
                    toast.success(response.data)
                    setChange(!change)

                    console.log(response.data)
                })
                .catch((error) => {
                    console.error('Error al enviar datos:', error)
                })
                }
                catch (error) {
                    console.error('Error al enviar datos:', error)
                }

        console.log('actualizar', id, name)
    }
  return (
    <div>
        <h1>Editar Categorias</h1>
        {categorias.map((categoria) => (
            <CategoriaEdit
            key={categoria.id_categoria}
            id={categoria.id_categoria}
            name={categoria.nombre_categoria}
            disponible={categoria.activa_categoria}
            actualizar={actualizar}
            update={update}
            />
        ))}

<Toaster
        theme="dark"
        position="top-right"
        duration={4000}
        visibleToasts={2}
      />
    </div>
  )
}

export default PageEditCategoria