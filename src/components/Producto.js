import Image from 'next/image'
import { formatearDinero } from '@/helper/Index'
import useQuiosco from '@/hook/useQuiosco'


const Producto = ({producto}) => {

    const{handleSetProducto,onOpenModal}=useQuiosco()
    const{imagen,nombre,precio}=producto

    return(
        <div className='border p-3'>
       <Image
       src={`/assets/img/${imagen}.jpg`}
       alt={`Imagen Platillo ${nombre}`}
       width={400}
            height={500}
       
       />
       <div className="p-5">
        <h3 className="text-2xl font-bold">{nombre}</h3>
        <p className="mt-5 font-black text-4xl text-blue-800">
            {
                formatearDinero(precio)
            }
        </p>
       </div>

       <button className="bg-blue-800 hover:bg-blue-800 text-white 
       w-full mt-5 p-3 font-bold"
       onClick={() => {
        //mandamos a llamar al modal
        onOpenModal()
        handleSetProducto(producto)
    }}
       >
        Agregar
       </button>

         
    </div>
    )
    
}

export default Producto