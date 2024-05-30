

function CuponView(id,codigo, descuento, precio,disponible,categoria,empresa,imagen,venciemiento ) {

    const handleButtonClick = () => {
        if (disponible === 1) {
          // Action for available coupon
          console.log(`Editing coupon ${id}`);
        } else {
          // Action for unavailable coupon
          console.log(`Coupon ${id} is not available`);
        }
      };
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
        onClick={handleButtonClick}
        className={`px-4 py-2 mt-2 text-white rounded ${disponible ? 'bg-green-500 hover:bg-green-600' : 'bg-red-500 hover:bg-red-600'}`}
      >
        {disponible ? 'Editar' : 'No disponible'} {id}
      </button>
    </div>
 

   
  )
}

export default CuponView