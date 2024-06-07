import { useLocation } from "wouter"

function EmpresaView({idEmpresa, nombre, direccion, cedula, fecha, correo, telefono}) {
  const [, setLocation] = useLocation();
  
  const handleOnClick = (id) => {
    setLocation(`/empresa/${id}`);
  };

  const handleOnClickEdit = (id) => {
    setLocation(`/editarempresa/${id}`);
  }

  
  return (
    <div className="p-4 mb-4 border rounded-lg shadow-md">
      <h2 className="mb-2 text-xl font-bold">{nombre}</h2>
      <p className="mb-1"><span className="font-semibold">Dirección:</span> {direccion}</p>
      <p className="mb-1"><span className="font-semibold">Cédula:</span> {cedula}</p>
      <p className="mb-1"><span className="font-semibold">Fecha de Creación:</span> {fecha}</p>
      <p className="mb-1"><span className="font-semibold">Correo:</span> {correo}</p>
      <p className="mb-1"><span className="font-semibold">Teléfono:</span> {telefono}</p>
      <button  onClick={()=>handleOnClick(idEmpresa)} className="px-4 py-2 mt-2 text-white bg-blue-500 rounded hover:bg-blue-600">Ver Detalles {idEmpresa} </button>
      <button  onClick={()=>handleOnClickEdit(idEmpresa)} className="px-4 py-2 mt-2 text-white bg-blue-500 rounded hover:bg-blue-600">Editar Informacion {idEmpresa} </button>
    </div>
  )
}

export default EmpresaView