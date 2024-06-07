import { useState } from "react"
import { Link, useLocation, useRoute } from "wouter";
function NavBar() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [,setLocation] = useLocation();
    const [matchLogin] = useRoute("/login");

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    const cerrarSesion = () => {

        sessionStorage.removeItem("usuarioLogin");
        setLocation("/login");
    }
    
  return (
    <nav className="flex flex-col justify-center bg-gray-800 text-white py-4">
        <div  className="flex items-center justify-between w-full max-w-7xl px-4">

       

        <div className="flex items-center">
       
                    <svg className="w-8 h-8 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                    </svg>
                    <span className="font-semibold text-xl">CoponFree</span>
                </div>
                {!matchLogin && (
                <div className="mt-4 hidden lg:flex"> 
                <Link href="/" className="block px-4 py-2 text-white hover:bg-gray-700">
                    Home
                </Link>

                <Link href="/login" className="block px-4 py-2 text-white hover:bg-gray-700">
                    Login
                </Link>
                
                <Link href="/actualizarEmpresa" className="block px-4 py-2 text-white hover:bg-gray-700">

                    Actualizar Empresa
                
                </Link>    
                
                <input type="button" value={"Cerrar sesión"} className="block px-4 py-2 text-white hover:bg-gray-700 cursor-pointer" onClick={() => cerrarSesion()}/>

                </div>
                )}
                <button className="block lg:hidden" onClick={toggleMenu}>
                    {menuOpen ? (
                        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    ) : (
                        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                        </svg>
                    )}
                </button>
                
        </div>
                
        {menuOpen && !matchLogin && (
                <div className="mt-4">
                   <Link href="/" className="block px-4 py-2 text-white hover:bg-gray-700">
                    Home
                     </Link>
                     <Link href="/login" className="block px-4 py-2 text-white hover:bg-gray-700">
                    Login
                     </Link>
                     <Link href="/actualizarEmpresa" className="block px-4 py-2 text-white hover:bg-gray-700">
                        Actualizar Empresa
                    </Link> 
                    <input type="button" value={"Cerrar sesión"} className="block px-4 py-2 text-white hover:bg-gray-700 cursor-pointer" onClick={() => cerrarSesion()}/>
                
                </div>
            )}

    </nav>
  )
}

export default NavBar