
'use client'

import useQuiosco from "@/hook/useQuiosco"
import Producto from "@/components/Producto"
//import Modal from '@/components/Modal'
import Modal from "@/components/Modal"
import ModalMostrarDetalleProd from '@/components/ModalMostrarDetalleProd'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Pasos from '@/components/Pasos'
   function Home() {
    const{categoriaActual,modal,onCloseModal}= useQuiosco()
  
  return (
 
   <div>
    <Pasos/>
    <h1 className="font-bold text-4xl mt-5">{categoriaActual?.nombre}</h1>
    <p className="text-2xl my-10">
      Elige y Personaliza tu pedido a continuacion
    </p>
    <div className="grid gap-4 grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">
    {
      categoriaActual?.productos?.map(producto =>(
        <Producto
        key={producto.id} producto={producto}
        />
      ))
    }
    </div>
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
    <ToastContainer />
   </div>
 
  )
}

export default Home;

