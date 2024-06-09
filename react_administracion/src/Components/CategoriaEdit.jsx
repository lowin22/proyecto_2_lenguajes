import { useState } from "react";

function CategoriaEdit({id, name,disponible,  actualizar, update}) {
    const [currentName, setCurrentName] = useState(name);
  return (
    <div className="flex gap-3 align-middle">

        <input type="text" value={currentName} onChange={(e) => setCurrentName(e.target.value)}/>

        <button className="px-4 py-2 mt-2 text-white bg-blue-500 rounded hover:bg-blue-700" onClick={() => actualizar(id, currentName)}>
            actualizar
        </button>
        <button 
        onClick={()=>update(id)}
        className={`px-4 py-2 mt-2 text-white rounded ${disponible ? 'bg-red-500 hover:bg-red-600' : 'bg-green-500 hover:bg-green-600'}`}
      >
        {disponible ? 'Desactivar' : 'Activar'} 
      </button>
    </div>
  )
}

export default CategoriaEdit