'use client'
import Images from "next/image"
import useQuiosco from "@/hook/useQuiosco"


const Categoria = ({categoria}) => {
    const {id,nombre,icono}= categoria
    const{categoriaActual,handleClickCategoria}= useQuiosco()
  return (
    <div className={`${categoriaActual?.id === id ? "bg-blue-800 text-white"  : "" } 
    flex items-center gap-5 w-full border p-5 hover:bg-blue-800 "`}>
        <Images
            width={70}
            height={70}
            alt="Imagen Icono"
            src={`/assets/img/icono_${icono}.svg`}
            style={{
                width: 'auto0',
                height: 'auto',
              }}
           
        />

        <button 
        type='button'
        className="text-2xl font-bold hover:cursor-pointer"
        onClick={() => handleClickCategoria(id)}
        >
            {nombre}
        </button>
    </div>
  )
}

export default Categoria