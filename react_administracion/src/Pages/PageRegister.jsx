
import { useForm } from "react-hook-form";
import { Toaster, toast } from "sonner";
import InputRegister from "../Components/InputRegister";
import Button from "../Components/Button";
import  axios  from "axios";

function PageRegister() {
  const { register, handleSubmit, watch, reset, formState: { errors } } = useForm();
<<<<<<< Updated upstream
  const onSubmit = handleSubmit((data) => {
    console.log(data);
    toast.success("Registro exitoso");
    toast.error("Error al registrar");

    reset();
=======
  const onSubmit = handleSubmit( async (data) => {
    var f = new FormData();
    f.append("name", data.name);
    f.append("direccion", data.direccion);
    f.append("fecha", data.fecha);
    f.append("correo", data.email);
    f.append("telefono", data.telefono);
    f.append("password", data.password);
    f.append("cedula", data.card);
    f.append("METHOD", "POST")
    try {
    
      const response = await axios.post("http://127.0.0.1/api_php/services/AdmistrativoService.php",f);

      console.log("Respuesta del servidor:", response.data);
      toast.success("Registro exitoso");
      reset();
    } catch (error) {
      toast.error("Error al registrar la empresa");
      console.error("Error al enviar datos:", error);
    }
>>>>>>> Stashed changes
  });

  return (
    <div className="flex justify-center min-h-screen">
      <form onSubmit={onSubmit} className="max-w-md w-full p-4 bg-white rounded shadow-md">
        <h2 className="text-2xl font-bold mb-4">Registro</h2>
        {/* espacio para recolecar el nombre*/}
        <InputRegister
          type="text"
          id="name"
          label="Nombre"
          register={register("name", {
            required: { value: true, message: "Nombre es requerido" },
            minLength: { value: 2, message: "Nombre debe tener al menos 2 caracteres" },
            maxLength: { value: 15, message: "Excedió el número permitido de caracteres" },
          })}
          error={errors.name}
        />
        {/* espacio para recolecar el apellido*/}
        <InputRegister
          type="text"
          id="lastname"
          label="Apellido"
          register={register("lastname", {
            required: { value: true, message: "El apellido es requerido" },
            minLength: { value: 2, message: "El Apellido debe tener al menos 2 caracteres" },
            maxLength: { value: 15, message: "Excedió el número permitido de caracteres" },
          })}
          error={errors.lastname}
        />
        {/* espacio para recolecar el cedula*/}
        <InputRegister
          type="text"
          id="card"
          label="Cedula"
          register={register("card", {
            required: { value: true, message: "La cedula es requerido" },
            minLength: { value: 2, message: "La cedula debe tener al menos 2 caracteres" },
            maxLength: { value: 12, message: "Excedió el número permitido de caracteres" },
            pattern: { value: /^\d{2}-\d{4}-\d{4}$/, message: "La cedula no es valida (formato invalido)." },
          })}
          error={errors.card}
        />
       
        {/* espacio para recolecar la direccion*/}
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
        />
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

export default PageRegister;