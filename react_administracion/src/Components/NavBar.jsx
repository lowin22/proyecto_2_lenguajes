import { useState } from "react"
import { Link } from "wouter";
function NavBar() {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };
  return (
    <nav className="flex flex-col justify-center py-4 text-white bg-gray-800">
        <div  className="flex items-center justify-between w-full px-4 max-w-7xl">

        <div className="flex items-center">
                    <svg className="w-8 h-8 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                    </svg>
                    <span className="text-xl font-semibold">CoponFree</span>
                </div>
                <div className="hidden mt-4 lg:flex"> 
                <Link href="/" className="block px-4 py-2 text-white hover:bg-gray-700">
                    Home
                     </Link>
                     <Link href="/login" className="block px-4 py-2 text-white hover:bg-gray-700">
                    Login
                     </Link>
                     <Link href="/register" className="block px-4 py-2 text-white hover:bg-gray-700">
                    Register
                     </Link>
                     <Link href="/registrarcupon" className="block px-4 py-2 text-white hover:bg-gray-700">
                    Register Cupon
                     </Link>
                </div>
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
        
        {menuOpen && (
                <div className="mt-4">
                   <Link href="/" className="block px-4 py-2 text-white hover:bg-gray-700">
                    Home
                     </Link>
                     <Link href="/login" className="block px-4 py-2 text-white hover:bg-gray-700">
                    Login
                     </Link>
                     <Link href="/register" className="block px-4 py-2 text-white hover:bg-gray-700">
                    Register
                     </Link>
                     <Link href="/registrarcupon" className="block px-4 py-2 text-white hover:bg-gray-700">
                    Register Cupon
                     </Link>
                </div>
            )}

    </nav>
  )
}

export default NavBar