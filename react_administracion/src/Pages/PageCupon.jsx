
import { useForm } from "react-hook-form";
import { Toaster, toast } from "sonner";
import InputRegister from "../Components/InputRegister";
import Button from "../Components/Button";
import  axios  from "axios";

function PageCupon() {
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const onSubmit = handleSubmit( async (data) => {
       toast.success("Registro exitoso");
       console.log(data);
       reset();
      });
      const registrarCupon= handleSubmit( async (data) => {
        var f = new FormData();
        f.append("categoria", data.categoria);
        f.append("METHOD", "POST")
        try {
          const response = await axios.post("http://api_php/services/CuponService.php",f);
            console.log("Respuesta del servidor:", response.data);
            toast.success("Registro exitoso");
            reset();
        } catch (error) {
            toast.error("Error al registrar la empresa");
            console.error("Error al enviar datos:", error);
        }
      });
  return (
    <>
    <form onSubmit={registrarCupon} className="w-full max-w-md p-4 bg-white rounded shadow-md">

    <InputRegister
          type="text"
          id="categoria"
          label="Nombre de la categoria"
          register={register("categoria", {
            required: { value: true, message: "La categoria es requerido" },
            minLength: { value: 6, message: "La categoria debe tener al menos 6 caracteres" },
            maxLength: { value: 15, message: "Excedió el número permitido de caracteres" },
          })}
          error={errors.categoria}
        />
         <Button text="Registrar" type={"submit"}/>
    </form>

    <form onSubmit={onSubmit} className="w-full max-w-md p-4 bg-white rounded shadow-md">

            <InputRegister
                type="text"
                id="codigo"
                label="Nombre de la categoria"
                register={register("codigo", {
                    required: { value: true, message: "La codigo es requerido" },
                    minLength: { value: 6, message: "La categoria debe tener al menos 6 caracteres" },
                    maxLength: { value: 15, message: "Excedió el número permitido de caracteres" },
                })}
                error={errors.codigo}
            />
            <InputRegister
                type="text"
                id="descuento"
                label="Descuento"
                register={register("descuento", {
                    required: { value: true, message: "El descuento es requerido" },
                    minLength: { value: 6, message: "El descuento debe tener al menos 6 caracteres" },
                    maxLength: { value: 15, message: "Excedió el número permitido de caracteres" },
                })}
                error={errors.descuento}
            />
            <InputRegister
                type="text"
                id="precio"
                label="Precio"
                register={register("precio", {
                    required: { value: true, message: "El precio es requerido" },
                    minLength: { value: 6, message: "El precio debe tener al menos 6 caracteres" },
                    maxLength: { value: 15, message: "Excedió el número permitido de caracteres" },
                })}
                error={errors.precio}
            />
            <InputRegister
                type="text"
                id="disponible"
                label="Disponible"
                register={register("disponible", {
                    required: { value: true, message: "El disponible es requerido" },
                    minLength: { value: 6, message: "El disponible debe tener al menos 6 caracteres" },
                    maxLength: { value: 15, message: "Excedió el número permitido de caracteres" },
                })}
                error={errors.disponible}
            />
            <InputRegister
                type="text"
                id="imagen"
                label="Imagen"
                register={register("imagen", {
                    required: { value: true, message: "La imagen es requerido" },
                    minLength: { value: 6, message: "La imagen debe tener al menos 6 caracteres" },
                    maxLength: { value: 15, message: "Excedió el número permitido de caracteres" },
                })}
                error={errors.imagen}
            />
            <InputRegister
                type="text"
                id="vencimiento"
                label="Vencimiento"
                register={register("vencimiento", {
                    required: { value: true, message: "El vencimiento es requerido" },
                    minLength: { value: 6, message: "El vencimiento debe tener al menos 6 caracteres" },
                    maxLength: { value: 15, message: "Excedió el número permitido de caracteres" },
                })}
                error={errors.vencimiento}
            />
            <InputRegister
                type="text"
                id="empresa"
                label="Empresa"
                register={register("empresa", {
                    required: { value: true, message: "La empresa es requerido" },
                    minLength: { value: 6, message: "La empresa debe tener al menos 6 caracteres" },
                    maxLength: { value: 15, message: "Excedió el número permitido de caracteres" },
                })}
                error={errors.empresa}
            />
            <InputRegister
                type="text"
                id="categoria"
                label="Categoria"
                register={register("categoria", {
                    required: { value: true, message: "La categoria es requerido" },
                    minLength: { value: 6, message: "La categoria debe tener al menos 6 caracteres" },
                    maxLength: { value: 15, message: "Excedió el número permitido de caracteres" },
                })}
                error={errors.categoria}
            />
            

     <Button text="Registrar" type={"submit"}/>
</form> 
<Toaster 
      theme="dark"
      position="top-right"
      duration={4000}
      visibleToasts={2}
      />
    </>
    
  )
}


export default PageCupon