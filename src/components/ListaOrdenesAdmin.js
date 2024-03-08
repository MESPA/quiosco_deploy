import React from "react";
import Image from 'next/image'
import { formatearDinero } from "@/helper/Index";
import axios from 'axios'

const ListaOrdenesAdmin = ({ orden }) => {
  const {id, nombre, fecha, total, pedido } = orden;

    const CompletarOrden = async () => {
        console.log("Mas Poder" , id);

        try {
            await axios.post(`http://localhost:3000/api/ordenes/${id}`)
        } catch (error) {
            console.log(error);
        }
    }
  return (
    <div className='border p-10 space-y-5'>
      <h3 className="text-2xl font-bold">Orden:{id}</h3>

      <p className="text-lg font-bol"> Cliente: {nombre}</p>

      <div>
            {pedido.map(platillo => (
                <div key={platillo.id} className='py-3 flex border-b last-of-type:border-0 items-center' >
                    <div className='w-32'>
                            <Image
                                width={400}
                                height={500}
                                src={`/assets/img/${platillo.imagen}.jpg`}
                                alt={`Imagen platillo ${platillo.nombre}`}
                            />
                    </div>
                    <div className='p-5 space-y-2 '>
                        <div className='text-xl font-bold text-blue-500'>
                            {platillo.nombre}
                        </div>
                        <div className='font-bold text-lg'>
                            Cantidad: {platillo.cantidad}
                        </div>
                    </div>
                </div>
            ))}
      </div>
                <div className='md:flex md:items-center md:justify-between my-10'>
                    <p className='mt-5 font-black text-4xl text-blue-500'>
                       Total a pagar: {formatearDinero(total)}
                    </p>
                    <button className="bg-blue-500 px-5 py-2 m-5 font-bold  text-white rounded"
                    type="button"
                    onClick={() => CompletarOrden()}
                    >
                        Completar Orden
                    </button>
                </div>

                
      
    </div>
  );
};

export default ListaOrdenesAdmin;
