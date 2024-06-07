import { useEffect } from 'react';
import { useForm } from "react-hook-form";
import { Toaster, toast } from "sonner";
import InputRegister from "../Components/InputRegister";
import Button from "../Components/Button";
import { useLocation } from "wouter"
import axios from 'axios';

function PageLogin() {
  const { register, handleSubmit, watch, reset, setValue, formState: { errors } } = useForm();
  const [, setLocation] = useLocation();

  useEffect(() => {

    sessionStorage.removeItem("usuarioLogin");

  }, []);

  const handleLogin = async (data) => {
    
    try {
      const response = await fetch(`http://127.0.0.1/proyecto_2_lenguajes/api_php/services/EmpresaService.php?route=loginUsuario&email=${data.email}&password=${data.password}`);
      
      const result = await response.json();
      const usuario = result[0];
      console.log('result',result);
      // console.log('usuario_empresa', usuario.empresa_nueva);

      if(result.length === 0 || usuario.valido === 0){
        toast.error("Error al realizar el login");
        return;
      }

      if(usuario.activa_empresa === 0){

        toast.error("La empresa no esta activa");
        return;

      }

      if(usuario.valido){

        //si se valido el correo y el pasword
        //almacenar el id de la empresa en el sessionStorage

        sessionStorage.setItem("usuarioLogin", usuario.id_empresa);
        
        if(usuario.empresa_nueva){

          setLocation("/actualizarEmpresa");

        }else{

          setLocation("/home");

        }

      }
      
      console.log(result);
    } catch (error) {
      console.error('Error:', error);
    }
    
  };

  const onSubmit = handleSubmit((data) => {

    console.log(data);

    handleLogin(data);
    //reset();
  });
    
    return (
      
      <div className="flex justify-center min-h-screen">
      <form onSubmit={onSubmit} className="max-w-md w-full p-4 bg-white rounded shadow-md">
      <h2 className="text-2xl font-bold mb-4">Inicio de sesión</h2>
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
        
        {/* espacio para recolecar la contrase;a*/}
        <InputRegister
          type="password"
          id="password"
          label="Contraseña"
          register={register("password", {
            required: { value: true, message: "La contraseña es necesaria" },
            minLength: { value: 8, message: "La contraseña debe tener al menos 8 caracteres" },
            maxLength: { value: 25, message: "La contreseña excedió el número permitido de caracteres" },
            pattern: { value: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^*]).{8,}$/, message: "La contrasenia no es valida",
            },
          })}
          error={errors.password}
        />

        <Button text="Iniciar sesión" />
        
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

export default PageLogin