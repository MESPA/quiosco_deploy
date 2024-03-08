'use client'
import Image from 'next/image'
//import { prisma } from "@/lib/prisma"
import Categoria from './Categoria'
import useQuiosco from '../hook/useQuiosco';

// const obtenercategorias = async () =>{
//   const data = await prisma.categoria.findMany()

//  return data;


//}
// const obtenercategoria = async () =>{
//   const res = await fetch('http://localhost:3000/api/categorias')
// const data = await res.json()

//  return data;


// }




const Sidebar =  ()  => {
  const {categorias} = useQuiosco()
  if (!Array.isArray(categorias)) {
    // Puedes manejar el caso en el que categorias no es un array
    return null;
}
 
// const dats =  await obtenercategorias();
//const categorias = await obtenercategoria();
    return (

    <>
    <div className="items-center">
    <Image
        width={200}
        height={100}
        src="/assets/img/Fresh.jpg"
        alt="imagen logotipo"


      />
    </div>
    
      <nav className="mt-10">
        {categorias.map((categoria) => (
         <Categoria
         key={categoria.id}
         categoria={categoria}
         />
        ))}
      </nav>
    </>
    );

    };

export default Sidebar