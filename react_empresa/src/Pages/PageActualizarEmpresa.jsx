import { useForm } from "react-hook-form";
import { Toaster, toast } from "sonner";
import InputRegister from "../Components/InputRegister";
import Button from "../Components/Button";


function PageActualizarEmpresa(){  

    const { register, handleSubmit, watch, reset, formState: { errors } } = useForm();
    const onSubmit = handleSubmit((data) => {
      console.log(data);
      toast.success("Registro exitoso");
      toast.error("Error al registrar");
  
      reset();
    });

    return (

        <div className="flex justify-center min-h-screen">
        <form onSubmit={onSubmit} className="max-w-md w-full p-4 bg-white rounded shadow-md">
          <h2 className="text-2xl font-bold mb-4">Actualizar información empresa</h2>
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
              minLength: { value: 20, message: "La dirección debe tener al menos 2 caracteres" },
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
              maxLength: { value: 12, message: "Excedió el número permitido de caracteres" },
              pattern: { value: /^(\d{2}-\d{4}-\d{4}|\d{2}-\d{3}-\d{6})$/, message: "La cedula no es valida (formato invalido)." },
            
            })}
            error={errors.cedula}
          />
         
          {/* espacio para recolecar la direccion
          <InputRegister
            type="text"
            id="direccion"
            label="Direccion"
            register={register("direccion", {
              required: { value: true, message: "La dirreccion es requerido" },
              minLength: { value: 20, message: "La dirreccion debe tener al menos 2 caracteres" },
              maxLength: { value: 100, message: "Excedió el número permitido de caracteres" },
            })}
            error={errors.direccion}
          /> */}
          {/* espacio para recolecar el correo*/}
          <InputRegister
            type="email"
            id="email"
            label="Correo"
            register={register("email", {
              required: { value: true, message: "el correo es necesario" },
              minLength: { value: 20, message: "La dirreccion debe tener al menos 2 caracteres" },
              maxLength: { value: 100, message: "Excedió el número permitido de caracteres" },
              pattern: { value: /^[a-z0-9._]+@[a-z0-9·-]+\.[a-z]{2,4}$/, message: "correo no es valido",
              },
            })}
            error={errors.email}
          />
         
          {/* espacio para recolecar la contrase;a*/}
          <InputRegister
            type="password"
            id="password"
            label="Contrasenia"
            register={register("password", {
              required: { value: true, message: "La contrasenia es necesaria" },
              minLength: { value: 20, message: "La contrasenia debe tener al menos 10 caracteres" },
              maxLength: { value: 25, message: "La contresenia excedió el número permitido de caracteres" },
              pattern: { value: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^*]).{8,}$/, message: "La contrasenia no es valida",
              },
            })}
            error={errors.password}
          />
          
          {/* espacio para recolecar el nombre*/}
          <InputRegister
            type="password"
            id="confirm"
            label="Confirme la Contrasenia"
            register={register("confirm", {
              required: { value: true, message: "La contrasenia es necesaria" },
              minLength: { value: 20, message: "La contrasenia debe tener al menos 10 caracteres" },
              maxLength: { value: 25, message: "La contresenia excedió el número permitido de caracteres" },
              validate: (value) =>
              value == watch("password") || "las contrasenas no coinciden",
              pattern: { value: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^*]).{8,}$/, message: "La contrasenia no es valida",
              },
            })}
            error={errors.confirm}
          />
        
          {/* espacio para recolecar el nombre*/}
          <InputRegister
            type="date"
            id="date"
            label="Fecha de nacimiento"
            register={register("date", {
              required: { value: true, message: "La contrasenia es necesaria" },
              validate: (value) => {
                const date = new Date(value);
                const now = new Date();
                const diff = now.getFullYear() - date.getFullYear();
                return diff >= 18 || "debe ser mayor de edad";
              },
            })}
            error={errors.confirm}
          />
        
          {/* espacio para recolecar el los terminos y condiciones*/}
          <InputRegister
            type="checkbox"
            id="term"
            label="Terminos y condiciones"
            {...register("term", {
              required: { value: true, message: "Acepte los terminos y condiciones" },
            })}
            error={errors.term}
          />
         <Button text="Registrar" />
          <pre className="mt-4">{JSON.stringify(watch(), null, 2)}</pre>
        </form>
        <Toaster 
        theme="dark"
        position="top-right"
        duration={2000}
        visibleToasts={2}
        />
  
      </div>
    );

}

export default PageActualizarEmpresa;