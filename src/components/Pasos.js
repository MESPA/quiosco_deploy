'use client'
import { useRouter } from 'next/navigation'

import useQuiosco from '@/hook/useQuiosco'

const pasos = 
[
    {paso:1, nombre:'Menu',url:"/"},
    {paso:2, nombre:'Resumen',url:"/resumen"},
    {paso:3, nombre:'Datos y total',url:"/total"},
]

const Pasos = () => {
    const {handleChangepaso,paso} = useQuiosco()
    const router = useRouter()

    const calcularProgreso =() =>{
        // solucion 1
        // const porcentaje = (paso / 3) * 100
        // return porcentaje

        let valor ;
        if(paso  === 1){valor = 2}
        else if(paso === 2){valor =50}
        else(valor =100)
        return valor
    }
     
  return (
    <>
        <div className="flex justify-between">
            {
                pasos.map( (paso) => (
                    <button className="text-2xl font-bold"
                    key={paso.paso}
                    onClick={() => {
                        
                        router.push(paso.url)
                        handleChangepaso(paso.paso)
                    }}
                    >
                        {paso.nombre}
                    </button>
                 ) )
            }
        </div>
            {/* barra de progreso */}
        <div className="bg-gray-100 mb-10">
            <div className="rounded-full bg-blue-800 text-xs leading-none h-2 text-center text-white "
            
            style={{ width: `${calcularProgreso()}%` }}
            >

            </div>
        </div>
    </>
  )
}

export default Pasos