'use client'
import React from 'react'
import Pasos from '@/components/Pasos'
import useQuiosco from '@/hook/useQuiosco'
import ResumenProducto from '@/components/ResumenProducto'
import Modal from '@/components/Modal'
import ModalMostrarDetalleProd from '@/components/ModalMostrarDetalleProd'

const Resumen = () => {
  const {pedido,modal,onCloseModal} = useQuiosco()
  return (
    <>
    <Pasos/>

    <h1 className="text-4xl font-black mt-5">Resumen</h1>

    <p className="text-3xl my-10"> Revisa tu Pedido</p>  

    {
      pedido.lenght === 0 
      ? (<p className='text-center text-2xl'> No ha elementos en tu Pedido</p>) 
      : (pedido.map(producto => (
        <ResumenProducto
          key={producto.id}
          producto={producto}
        />
      )))
    }

    {modal &&
      <Modal isOpen={modal} onClose={onCloseModal}
          style={{
              content: {
                top: '50%',
                left: '50%',
                right: 'auto',
                bottom: 'auto',
                marginRight: '-50%',
                transform: 'translate(-50%, -50%)',
              },
            }}
          
      >

       <ModalMostrarDetalleProd/>
      </Modal>
    }    
    </>
  )
}

export default Resumen