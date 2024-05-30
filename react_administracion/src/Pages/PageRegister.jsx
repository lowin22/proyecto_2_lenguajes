
import { useForm } from "react-hook-form";
import { Toaster, toast } from "sonner";
import InputRegister from "../Components/InputRegister";
import Button from "../Components/Button";
import axios from "axios";

function PageRegister() {
  axios.defaults.baseURL = "http://127.0.0.1/api_php/services";
axios.defaults.headers.post["Content-Type"] = "application/json";
  const { register, handleSubmit, watch, reset, formState: { errors } } = useForm();
  const onSubmit = handleSubmit((data) => {
    async function postData() {
      try {
        const response = await axios.post("/AdmistrativoService.php", data);
  
        if (response.status !== 200) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
  
        const result = response.data;
        console.log(result);
        toast.success("Registro exitoso!");
        reset();
      } catch (error) {
        console.error("Error:", error);
        toast.error("Error en el registro");
      }
    }
  
    postData();
  });
  

  return (
    <div className="flex justify-center min-h-screen">
      <form onSubmit={onSubmit} className="w-full max-w-md p-4 bg-white rounded shadow-md">
        <h2 className="mb-4 text-2xl font-bold">Registro</h2>
        {/* espacio para recolecar el nombre*/}
        <InputRegister
          type="text"
          id="name"
          label="Nombre de la empresa"
          register={register("name", {
            required: { value: true, message: "El nombre es requerido" },
            minLength: { value: 4, message: "El nombre debe tener al menos 4 caracteres" },
            maxLength: { value: 50, message: "Excedió el número permitido de caracteres" },
          })}
          error={errors.name}
        />
        {/* espacio para recolecar el apellido*/}
        <InputRegister
          type="date"
          id="fecha"
          label="Fecha de creación"
          register={register("fecha", {
            required: { value: true, message: "La fecha es requerido" },
            validate: (value) => new Date(value) <= new Date() || "La fecha no puede ser mayor a la fecha actual",
            minLength: { value: 10, message: "La fecha debe tener al menos 10 caracteres" },
            maxLength: { value: 10, message: "Excedió el número permitido de caracteres" },

          })}
          error={errors.fecha}
        />
        {/* espacio para recolecar el cedula*/}
        <InputRegister
          type="text"
          id="card"
          label="Cedula física o jurídica"
          register={register("card", {
            required: { value: true, message: "La cedula es requerido" },
            minLength: { value: 12, message: "La cedula debe tener al menos 12 caracteres" },
            maxLength: { value: 14, message: "Excedió el número permitido de caracteres" },
            validate: (value) =>
              /^\d{2}-\d{4}-\d{4}$/.test(value) || /^\d{2}-\d{3}-\d{6}$/.test(value) || "La cedula no es valida (formato invalido).",
          })}
          error={errors.card}
        />
           <InputRegister
          type="text"
          id="telefono"
          label="Teléfono"
          register={register("telefono", {
            required: { value: true, message: "El telefono es requerido" },
            minLength: { value: 9, message: "El telefono debe tener al menos 9 caracteres" },
            maxLength: { value: 14, message: "Excedió el número permitido de caracteres" },
            validate: (value) =>
              /^\d{4}-\d{4}$/.test(value) || /^\d{3}-\d{3}-\d{6}$/.test(value) || "El formato del telefono no es valida (formato invalido).",
          })}
          error={errors.telefono}
        />
       
        {/* espacio para recolecar la direccion*/}
        <InputRegister
          type="text"
          id="direccion"
          label="Dirección física"
          register={register("direccion", {
            required: { value: true, message: "La dirreccion es requerido" },
            minLength: { value: 20, message: "La dirreccion debe tener al menos 20 caracteres" },
            maxLength: { value: 100, message: "Excedió el número permitido de caracteres" },
          })}
          error={errors.direccion}
        />
        {/* espacio para recolecar el correo*/}
        <InputRegister
          type="email"
          id="email"
          label="Correo Electrónico"
          register={register("email", {
            required: { value: true, message: "el correo es necesario" },
            minLength: { value: 10, message: "La dirreccion debe tener al menos 12 caracteres" },
            maxLength: { value: 30, message: "Excedió el número permitido de caracteres" },
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
            minLength: { value: 8, message: "La contrasenia debe tener al menos 8 caracteres" },
            maxLength: { value: 12, message: "La contresenia excedió el número permitido de caracteres" },
            pattern: { value: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*]).{8,}$/, message: "La contrasenia no es valida",
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
            minLength: { value: 8, message: "La contrasenia debe tener al menos 8 caracteres" },
            maxLength: { value: 12, message: "La contresenia excedió el número permitido de caracteres" },
            validate: (value) =>
            value == watch("password") || "las contrasenas no coinciden",
            pattern: { value: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*]).{8,}$/, message: "La contrasenia no es valida",
            },
          })}
          error={errors.confirm}
        />
      
        
    
       <Button text="Registrar" type={"submit"}/>
      </form>
      <Toaster 
      theme="dark"
      position="top-right"
      duration={4000}
      visibleToasts={2}
      />

    </div>
  );
}

export default PageRegister;