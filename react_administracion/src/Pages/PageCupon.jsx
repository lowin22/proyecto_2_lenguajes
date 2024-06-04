import { useForm } from "react-hook-form";
import { Toaster, toast } from "sonner";
import InputRegister from "../Components/InputRegister";
import Button from "../Components/Button";
import DatalistRegister from "../Components/DatalistRegister";
import axios from "axios";
import { useEffect, useState } from "react";
import { useRoute,useLocation } from "wouter"

function PageCupon() {
  const { register: registerCategoria, handleSubmit: handleSubmitCategoria, reset: resetCategoria, formState: { errors: errorsCategoria } } = useForm();
  const { register: registerCupon, handleSubmit: handleSubmitCupon, reset: resetCupon, formState: { errors: errorsCupon }, setValue } = useForm();
  const [categorias, setCategorias] = useState([]);
  const [match, params] = useRoute("/cupon/:id")
  const [, setLocation] = useLocation()
  const [categoriaActualizada, setCategoriaActualizada] = useState(false)


  useEffect(() => {
    const obtenerCategorias = async () => {
      try {
        const response = await axios.get("http://127.0.0.1/api_php/services/AdmistrativoService.php?categorias");
        setCategorias(response.data.map(c => ({ id: c.id_categoria, name: c.nombre_categoria })));
      } catch (error) {
        toast.error("Error al obtener las categorias");
        console.error("Error al enviar datos:", error);
      }
    };
    obtenerCategorias();
  }, [categoriaActualizada]);

  const registrarCategoria = handleSubmitCategoria(async (data) => {
    toast.success("Registro exitoso");
    try {
      var f = new FormData();
      f.append("nombre_categoria", data.nombre_categoria);
      f.append("METHOD", "POST")
      const response = await axios.post("http://127.0.0.1/api_php/services/AdmistrativoService.php", f);
      toast.success(response.data);
      resetCategoria();
      setCategoriaActualizada(prev => !prev)
    } catch (error) {
      toast.error("Error al registrar la categoria");
      console.error("Error al enviar datos:", error);
    }
  });

  const registrarCupon = handleSubmitCupon(async (data) => {
    try {
        var f = new FormData();
        f.append("categoria", data.categoria);
    f.append("empresa", params.id);
    f.append("codigo", data.codigo);
    f.append("descuento", data.descuento);
    f.append("precio", data.precio);
    f.append("imagen", data.imagen[0]);
    f.append("fecha_vencimiento", data.vencimiento);
    f.append("fecha_inicio", data.fechainicio);
      
        f.append("METHOD", "POST")
      const response = await axios.post("http://127.0.0.1/api_php/services/CuponService.php",f);
      toast.success(response.data);
      console.log(response.data);
      resetCupon();
    } catch (error) {
      toast.error("Error al registrar la empresa");
      console.error("Error al enviar datos:", error);
    }
  });
  if (!match) setLocation(`/home`);
  
  return (
    <>
      <form onSubmit={registrarCategoria} className="w-full max-w-md p-4 bg-white rounded shadow-md">
        <InputRegister
          type="text"
          id="nombre_categoria"
          label="Nombre de la categoria"
          register={registerCategoria("nombre_categoria", {
            required: { value: true, message: "La categoria es requerida" },
            minLength: { value: 6, message: "La categoria debe tener al menos 6 caracteres" },
            maxLength: { value: 15, message: "Excedió el número permitido de caracteres" },
          })}
          error={errorsCategoria.nombre_categoria}
        />
        <Button text="Registrar Categoria" type="submit" />
      </form>

      <form onSubmit={registrarCupon} className="w-full max-w-md p-4 bg-white rounded shadow-md">
        <InputRegister
          type="text"
          id="codigo"
          label="Código"
          register={registerCupon("codigo", {
            required: { value: true, message: "El código es requerido" },
            minLength: { value: 6, message: "El código debe tener al menos 6 caracteres" },
            maxLength: { value: 15, message: "Excedió el número permitido de caracteres" },
          })}
          error={errorsCupon.codigo}
        />
     <InputRegister
  type="text"
  id="descuento"
  label="Descuento"
  register={registerCupon("descuento", {
    required: { value: true, message: "El descuento es requerido" },
    minLength: { value: 2, message: "El descuento debe tener al menos 2 caracteres" },
    maxLength: { value: 15, message: "Excedió el número permitido de caracteres" },
    validate: {
      isNumber: value => !isNaN(value) || "El descuento debe ser un valor numérico"
    }
  })}
  error={errorsCupon.descuento}
/>
<InputRegister
  type="text"
  id="precio"
  label="Precio"
  register={registerCupon("precio", {
    required: { value: true, message: "El precio es requerido" },
    minLength: { value: 2, message: "El precio debe tener al menos 2 caracteres" },
    maxLength: { value: 15, message: "Excedió el número permitido de caracteres" },
    validate: {
      isNumber: value => !isNaN(value) || "El precio debe ser un valor numérico"
    }
  })}
  error={errorsCupon.precio}
/>
<InputRegister
  type="datetime-local"
  id="fechainicio"
  label="Fecha de inicio"
  register={registerCupon("fechainicio", {
    required: { value: true, message: "La fecha es requerida" },
  })}
  error={errorsCupon.fechainicio}
/>

<InputRegister
  type="datetime-local"
  id="vencimiento"
  label="Vencimiento"
  register={registerCupon("vencimiento", {
    required: { value: true, message: "El vencimiento es requerido" },
    validate: {
      futureDate: (value, allValues) => {
        const startDate = new Date(allValues["fechainicio"]);
        const endDate = new Date(value);

        if (startDate.getTime() >= endDate.getTime()) {
          return "La fecha de vencimiento debe ser posterior a la fecha de inicio";
        }

        return true;
      },
      differentDates: (value, allValues) => {
        const startDate = new Date(allValues["fechainicio"]);
        const endDate = new Date(value);

        if (startDate.getTime() === endDate.getTime()) {
          return "Las fechas de inicio y vencimiento no pueden ser iguales";
        }

        return true;
      }
    }
  })}
  error={errorsCupon.vencimiento}
/>

        <InputRegister
          type="file"
          id="imagen"
          label="Imagen"
          register={registerCupon("imagen", {
            required: { value: true, message: "La imagen es requerida" }
          })}
          error={errorsCupon.imagen}
        />
        <DatalistRegister
          id="categoria"
          label="Categoria"
          register={registerCupon("categoria", {
            required: { value: true, message: "La categoria es requerida" },
          })}
          error={errorsCupon.categoria}
          options={categorias}
          setValue={setValue}
        />
        <Button text="Registrar" type="submit" />
      </form>

      <Toaster
        theme="dark"
        position="top-right"
        duration={4000}
        visibleToasts={2}
      />
    </>
  );
}

export default PageCupon;
