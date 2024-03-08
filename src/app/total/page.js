'use client'

import React,{useCallback, useEffect} from 'react'
import Pasos from '@/components/Pasos'
import useQuiosco from '@/hook/useQuiosco'
import { formatearDinero } from '@/helper/Index'

const Total = () => {
  const {pedido,nombre,setNombre,colocarOrden,total} = useQuiosco()

  const comprobarpedido = useCallback(() => {
    return pedido.length === 0 || nombre === "" || nombre.length < 3;
  },[pedido,nombre]);

  useEffect(() => {

    comprobarpedido();
  },[pedido,comprobarpedido])





  return (
    <>
      <Pasos/>

      <h1 className="text-4xl font-black mt-5">Total y Confirma tu Pedido</h1>

      <p className="text-3xl my-10"> Revisa tu Pedido a Continuacion</p>   

      <form onSubmit={colocarOrden}>
        <div>
          <label 
          htmlFor="nombre"
          className='block text-slate-800 font-bold text-xl'
          >Nombre</label>
          <input 
          id='nombre'
          type="text"
          className='bg-gray-200 w-full lg:w-1/3 p-3 rounded-md mt-2'  
          value={nombre}
          onChange={(e) =>  setNombre(e.target.value) }
          />

          <div className='mt-10'>
            <p className='text-2xl'>Total a pagar: {""} <span className='font-bold'>{formatearDinero(total) }</span></p>
          </div>

          <div className='mt-5'>
              <input
              type='submit'
                className={`${comprobarpedido() ? "bg-blue-100" : "bg-blue-800 hover:bg-blue-950" } w-full lg:w-auto px-5 py-3 rounded font-bold
                text-white text-center `}
                value="Confirmar Pedido"
                disabled={comprobarpedido()}
              />
          </div>
        </div>
      </form>
    </>
  )
}

export default Total