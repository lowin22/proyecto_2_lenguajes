import { useLocation } from "wouter"
function CupunDetail({codigo, descuento, precio, disponible, categoria, empresa, vencimiento, porcentaje, total, id, update}) {
  const [, setLocation] = useLocation();
  const editar = (id) => {
    setLocation(`/editarcupon/${id}`);
  }
    return (
      <div className="p-4 mb-4 border rounded-lg shadow-md">
        <h2 className="mb-2 text-xl font-bold">{codigo}</h2>
        <p className="mb-1"><span className="font-semibold">Descuento:</span> {descuento}</p>
        <p className="mb-1"><span className="font-semibold">Precio:</span> {precio}</p>
        <p className="mb-1"><span className="font-semibold">Disponible:</span> {disponible}</p>
        <p className="mb-1"><span className="font-semibold">Categoría:</span> {categoria}</p>
        <p className="mb-1"><span className="font-semibold">Empresa:</span> {empresa}</p>
        <p className="mb-1"><span className="font-semibold">Porcentaje de promociones:</span> {porcentaje}</p>
        <p className="mb-1"><span className="font-semibold">Total de descuento:</span> {total}</p>
        <p className="mb-1"><span className="font-semibold">Vencimiento:</span> {vencimiento}</p>
        <button 
          onClick={() => update(id)}
          className={`px-4 py-2 mt-2 text-white rounded ${disponible ? 'bg-red-500 hover:bg-red-600' : 'bg-green-500 hover:bg-green-600'}`}
        >
          {disponible ? 'Desactivar' : 'Activar'} 
        </button>
        <button onClick={() => editar(id)} className="px-4 py-2 mt-2 text-white bg-blue-500 rounded hover:bg-blue-600">Editar</button>
      </div>
    )
  }
  
  export default CupunDetail;
  