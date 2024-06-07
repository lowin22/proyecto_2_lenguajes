import { useLocation } from "wouter"

function CuponView({id,codigo, descuento, precio,disponible,categoria,empresa,imagen,venciemiento,update } ) {
  const [, setLocation] = useLocation();
  const agregarPromocion = (id) => {
    setLocation(`/registerpromotion/${id}`);
  }
  const verDetalles = (id) => {
    setLocation(`/viewpromotion/${id}`);
  }
  
  return (
    <div className="p-4 mb-4 border rounded-lg shadow-md">

        <h2 className="mb-2 text-xl font-bold">{codigo}</h2>
        <p className="mb-1"><span className="font-semibold">Descuento:</span> {descuento}</p>
        <p className="mb-1"><span className="font-semibold">Precio:</span> {precio}</p>
        <p className="mb-1"><span className="font-semibold">Disponible:</span> {disponible}</p>
        <p className="mb-1"><span className="font-semibold">Categoria:</span> {categoria}</p>
        <p className="mb-1"><span className="font-semibold">Empresa:</span> {empresa}</p>
        <p className="mb-1"><span className="font-semibold">Imagen:</span> {imagen}</p>
        <p className="mb-1"><span className="font-semibold">Vencimiento:</span> {venciemiento}</p>
        <button 
        onClick={()=>update(id)}
        className={`px-4 py-2 mt-2 text-white rounded ${disponible ? 'bg-red-500 hover:bg-red-600' : 'bg-green-500 hover:bg-green-600'}`}
      >
        {disponible ? 'Desactivar' : 'Activar'} 
      </button>
      <button onClick={()=>agregarPromocion(id)} className="px-4 py-2 mt-2 text-white bg-blue-500 rounded hover:bg-blue-600">Agregar Promocion</button>
      <button onClick={()=>verDetalles(id)} className="px-4 py-2 mt-2 text-white rounded bg-sky-400 hover:bg-sky-600">ver detalles</button>
    </div>
  )
}

export default CuponView