import React from "react";
import Image from "next/image";
import { formatearDinero } from "@/helper/Index";
import useQuiosco from "@/hook/useQuiosco";

const ResumenProducto = ({ producto }) => {
    const {handleChangeEditar,handleChangeEliminar} = useQuiosco()
  return (
    <div className="shadow p-5 mb-5 flex gap-10 items-center">
      <div className="md:w-1/6">
        <Image
          width={300}
          height={400}
          src={`/assets/img/${producto.imagen}.jpg`}
          alt="Imagen"
        />
      </div>
      <div className="md:w-4/6">
        <p className=" text-3xl font-bold"> {producto.nombre}</p>
        <p className=" text-xl font-bold mt-2">
          {" "}
          Cantidad: {producto.cantidad}
        </p>
        <p className=" text-3xl font-bold text-blue-800">
          Precio: {formatearDinero(producto.precio)}
        </p>
        <p className=" text-xl font-bold text-gray-800">
          SubTotal: {formatearDinero(producto.precio * producto.cantidad)}
        </p>
      </div>

      <div>
        <button className="text-white px-5 py-2  rounded-md bg-sky-400 mb-5 font-bold w-full text-center flex gap-2"
          onClick={() =>  handleChangeEditar(producto.id)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L6.832 19.82a4.5 4.5 0 0 1-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 0 1 1.13-1.897L16.863 4.487Zm0 0L19.5 7.125"
            />
          </svg>
          Editar
        </button>

        <button className="text-white px-5 py-2  rounded-md bg-red-400 mb-5 font-bold w-full text-center flex gap-2"
        onClick={() => {
            handleChangeEliminar(producto.id)
        }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
            />
          </svg>
          Eliminar
        </button>
      </div>
    </div>
  );
};

export default ResumenProducto;
