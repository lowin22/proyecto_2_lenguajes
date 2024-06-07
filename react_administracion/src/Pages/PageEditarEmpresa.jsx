import { useEffect } from 'react';
import { useForm } from "react-hook-form";
import { Toaster, toast } from "sonner";
import InputRegister from "../Components/InputRegister";
import Button from "../Components/Button";
import axios from 'axios';
import { useRoute, useLocation } from "wouter";
function PageEditarEmpresa() {

    const { register, handleSubmit, watch, reset, setValue, formState: { errors } } = useForm();
    const [match, params] = useRoute("/editarempresa/:id");
    const [, setLocation] = useLocation();
    useEffect(() => {
        
      const fetchData = async () => {
        try {
          const response = await fetch(`http://127.0.0.1/api_php/services/EmpresaService.php?id=${params.id}&route=getEmpresaById`); 
          const data = await response.json();
          const empresa = data[0];
          
          console.log('data', data);
          
          setValue('nombre', empresa.nombre_empresa);
          setValue('direccion', empresa.direccion_fisica_empresa);
          setValue('cedula', empresa.cedula_empresa);
          setValue('date', empresa.fecha_creacion_empresa);
          setValue('email', empresa.correo_empresa);
          setValue('telefono', empresa.telefono_empresa);
        } catch (error) {
          console.error('Error al obtener datos de la API:', error);
          toast.error('Error al obtener datos de la API');
        }
      };
  
      fetchData();
    }, [setValue]);

    const handleUpdate = async (data) => {
        var f = new FormData();
        f.append('nombre', data.nombre);
        f.append('direccion', data.direccion);
        f.append('cedula', data.cedula);
        f.append('fecha', data.date);
        f.append('correo', data.email);
        f.append('telefono', data.telefono);
        f.append('idActualizarEmpresa', params.id);
        f.append("METHOD", "POST")
    try {
      const response = await axios.post(`http://127.0.0.1/api_php/services/AdmistrativoService.php`, f);
        console.log('response', response);
        toast.success(response.data);
    }
    catch (error) {
      console.error('Error al actualizar empresa:', error);
      toast.error('Error al actualizar empresa');
    }

  };

  const onSubmit = handleSubmit((data) => {

    delete data.confirmPassword;

    console.log(data);

    handleUpdate(data);
   // reset();
  });
  if (!match) setLocation(`/home`);
  return (
    <div className="flex justify-center min-h-screen">
    <form onSubmit={onSubmit} className="w-full max-w-md p-4 bg-white rounded shadow-md">
      <h2 className="mb-4 text-2xl font-bold">Actualizar información empresa</h2>
      {/* espacio para recolecar el nombre*/}
      <InputRegister
        type="text"
        id="nombre"
        label="Nombre Empresa"
        register={register("nombre", {
          required: { value: true, message: "Nombre es requerido" },
          minLength: { value: 2, message: "Nombre debe tener al menos 2 caracteres" },
          maxLength: { value: 200, message: "Excedió el número permitido de caracteres" },
        })}
        error={errors.nombre}
      />
      {/* espacio para recolecar la direccion*/}
      <InputRegister
        type="text"
        id="direccion"
        label="Dirección física"
        register={register("direccion", {
          required: { value: true, message: "Dirección es requerida" },
          minLength: { value: 10, message: "La dirección debe tener al menos 10 caracteres" },
          maxLength: { value: 200, message: "Excedió el número permitido de caracteres" },
        })}
        error={errors.direccion}
      />
      {/* espacio para recolecar el cedula*/}
      <InputRegister
        type="text"
        id="cedula"
        label="Cédula física o jurídica"
        register={register("cedula", {
          required: { value: true, message: "La cedula es requerido" },
          minLength: { value: 2, message: "La cedula debe tener al menos 2 caracteres" },
          maxLength: { value: 13, message: "Excedió el número permitido de caracteres" },
          pattern: { value: /^(\d{2}-\d{4}-\d{4}||\d{2}-\d{3}-\d{6})$/, message: "La cedula no es valida (formato invalido)." },
        
        })}
        error={errors.cedula}
      />

    <InputRegister
        type="date"
        id="date"
        label="Fecha de creación"
        register={register("date", {
          required: { value: true, message: "La fecha es necesaria" },
          validate: (value) => {
            const date = new Date(value);
            const now = new Date();
            return date <= now || "Introduzca una fecha válida";
          },
        })}
        error={errors.date}
      />

      {/* espacio para recolecar el correo*/}
      <InputRegister
        type="email"
        id="email"
        label="Correo Electrónico"
        register={register("email", {
          required: { value: true, message: "El correo es necesario" },
          minLength: { value: 10, message: "La dirreccion debe tener al menos 10 caracteres" },
          maxLength: { value: 100, message: "Excedió el número permitido de caracteres" },
          pattern: { value: /^[a-z0-9._]+@[a-z0-9·-]+\.[a-z]{2,4}$/, message: "correo no es valido",
          },
        })}
        error={errors.email}
      />
      
      <InputRegister
        type="text"
        id="telefono"
        label="Teléfono"
        register={register("telefono", {
          required: { value: true, message: "El teléfono es requerido" },
          minLength: { value: 9, message: "El teléfono debe tener al menos 9 caracteres" },
          maxLength: { value: 10, message: "Excedió el número permitido de caracteres" },
          pattern: { value: /^(\d{4}-\d{4}||\d{4} \d{4})$/, message: "El teléfono no es válido (formato inválido)." },
        
        })}
        error={errors.telefono}
      />
      <Button text="Actualizar" />
      <pre className="mt-4">{JSON.stringify(watch(), null, 2)}</pre>
    </form>
    <Toaster 
    theme="dark"
    position="top-right"
    duration={2000}
    visibleToasts={2}
    />

  </div>
  )
}

export default PageEditarEmpresa