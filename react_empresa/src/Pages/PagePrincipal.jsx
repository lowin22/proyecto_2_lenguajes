import { useEffect } from 'react';
import { useLocation } from "wouter"
import { Toaster, toast } from "sonner";
import axios from "axios";
import CuponView from "../Components/CuponView"
import EmpresaGestio from "../Components/EmpresaGestio"

function PagePrincipal() {

  const [, setLocation] = useLocation();

  useEffect(() => {
      
    const validarSesion = () => {

      if(sessionStorage.getItem("usuarioLogin") === null){
        setLocation("/login");
        return false;
      }

      return true;
    }

    validarSesion();

  }, [setLocation]);

  return (
    <div className="flex justify-center min-h-screen">
      <h1>Mostrar todos los cupones (inhabilitados y activos)</h1>

      <Toaster 
      theme="dark"
      position="top-right"
      duration={2000}
      visibleToasts={2}
      />

    </div>
  );

}

export default PagePrincipal