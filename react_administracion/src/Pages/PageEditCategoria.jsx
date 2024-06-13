import axios from "axios"
import { useEffect, useState } from "react"
import CategoriaEdit from "../Components/CategoriaEdit"
import { Toaster, toast } from "sonner";
import InputRegister from "../Components/InputRegister";
import { useForm } from "react-hook-form";
import Button from "../Components/Button";

function PageEditCategoria() {
    const [categorias, setcategorias] = useState([])
    const [change, setChange] = useState(false)
    const { register: registerCategoria, handleSubmit: handleSubmitCategoria, reset: resetCategoria, formState: { errors: errorsCategoria } } = useForm();
    const registrarCategoria = handleSubmitCategoria(async (data) => {
        toast.success("Registro exitoso");
        try {
          var f = new FormData();
          f.append("nombre_categoria", data.nombre_categoria);
          f.append("METHOD", "POST")
          const response = await axios.post("http://127.0.0.1/api_php/services/AdmistrativoService.php", f);
          toast.success(response.data);
          resetCategoria();
            setChange(!change);
        } catch (error) {
          toast.error("Error al registrar la categoria");
          console.error("Error al enviar datos:", error);
        }
      });
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
      <form onSubmit={registrarCategoria} className="w-full max-w-md p-4 bg-white rounded shadow-md">
                <InputRegister
                    type="text"
                    id="nombre_categoria"
                    label="Nombre de la categoria"
                    register={registerCategoria("nombre_categoria", {
                        required: { value: true, message: "La categoria es requerida" },
                        minLength: { value: 5, message: "La categoria debe tener al menos 6 caracteres" },
                        maxLength: { value: 15, message: "Excedió el número permitido de caracteres" },
                    })}
                    error={errorsCategoria.nombre_categoria}
                />
                <Button text="Registrar Categoria" type="submit" />
            </form>
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