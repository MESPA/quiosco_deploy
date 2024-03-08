'use client'

import React from 'react'
import Imagen from 'next/image'
import useQuiosco from '@/hook/useQuiosco'
import { formatearDinero } from '@/helper/Index'
import { useState, useEffect } from 'react'

const ModalMostrarDetalleProd = () => {

  const {producto,handleSetModal,handleAgregarPedido,pedido} = useQuiosco();
  const [cantidad,setCantidad] = useState(1);
  const [edicion,setEdicion] = useState(false)

  //actualizar la cantidad producto en el modal
useEffect(() =>{
  if (pedido.some((pedidoState) => pedidoState.id === producto.id)) {
    const productoedicion = pedido.find(
      (pedidoState) => pedidoState.id === producto.id
    );
    setEdicion(true)
    setCantidad(productoedicion.cantidad)
  }
},[producto,pedido])

  return (
    <div className="md:flex gap-10">
       <div className="md:w1/3">
        <Imagen
          width={300}
          height={400}
          alt={`Imagen Producto ${producto.nombre}`}
          src={`/assets/img/${producto.imagen}.jpg`}
        />
       </div>
       <div className='md:w-2/3'>
        <div className="flex justify-end">
          <button onClick={handleSetModal}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" /></svg>

          </button>
        </div>
          <h1 className="text-3xl font-bold mt-5">{producto.nombre}</h1>
          <p className="mt-5 font-black text-5xl text-blue-800">
            {formatearDinero(producto.precio)}
          </p>
          <div className="flex gap-4 mt-5">
            <button  
            type="button"
            onClick={() =>{
              if(cantidad <= 1) return
              setCantidad(cantidad - 1) 
            }}
            >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} 
            stroke="currentColor" className="w-8 h-8">
  <path strokeLinecap="round" strokeLinejoin="round" d="M15 12H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
</svg>

            </button>
            <p>{cantidad}</p>

            <button
            type="button"
             onClick={() => {
              if(cantidad >= 10) return
              setCantidad(cantidad+1)}}
            >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} 
            stroke="currentColor" className="w-8 h-8">
  <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
</svg>

            </button>
          </div>

          <button  className="bg-blue-800 text-white border mt-5 p-5 rounded-md font-bold"
          onClick={()=>{
            handleAgregarPedido({...producto,cantidad})
          }}
          >{edicion ? 'Guardar Pedido': 'Agragar Pedido' }</button>
       </div>
    </div>
  )
}



export default ModalMostrarDetalleProd