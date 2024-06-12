import { useLocation } from "wouter"

function Promocion({id, porcentaje, activo, fecha_inicio, fecha_fin, update}) {
  const [, setLocation] = useLocation();
  const editar = (id) => {
    setLocation(`/editardescuento/${id}`);
  }

    return (
      <div className="p-4 mb-4 border rounded-lg shadow-md">
        <h2 className="mb-2 text-xl font-bold">Promoción</h2>
        <p className="mb-1"><span className="font-semibold">Porcentaje de descuento:</span> {porcentaje}</p>
        <p className="mb-1"><span className="font-semibold">Inicio:</span> {fecha_inicio}</p>
        <p className="mb-1"><span className="font-semibold">Vencimiento:</span> {fecha_fin}</p>
        <button 
          onClick={() => update(id)}
          className={`px-4 py-2 mt-2 text-white rounded ${activo ? 'bg-red-500 hover:bg-red-600' : 'bg-green-500 hover:bg-green-600'}`}
        >
          {activo ? 'Desactivar' : 'Activar'} 
        </button>
        <button onClick={() => editar(id)} className="px-4 py-2 mt-2 text-white rounded bg-cyan-500 hover:bg-cyan-600">Editar</button>
      </div>
    )
  }
  
  export default Promocion;
  