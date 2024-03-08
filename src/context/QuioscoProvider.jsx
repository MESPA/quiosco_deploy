"use client";
import React,{ useState,useEffect,createContext } from 'react'
import {  toast } from 'react-toastify';
import { useRouter } from 'next/navigation';
import axios from 'axios'


 const QuioscoContext = createContext()

 export function QuioscoProvider({children}) {
    
    const [categorias, setCategorias] = useState([])
    const [categoriaActual, setCategoriaActual] = useState({})
    const [producto,setProducto] = useState({})
    const[modal,setModal] = useState(false)
    const [pedido, setPedido] = useState([]);
    const [paso,setPaso] = useState(1)
    const router = useRouter()
    const [nombre,setNombre] = useState('')
    const [total,setTotal] = useState(0)

  const onOpenModal = () => setModal(true);
  const onCloseModal = () => setModal(false);
  
  

    //CONSULTA LA BASE DE DATOS MEDIANTE API
    const obtenercategorias = async () => {
        try {
            const res = await axios.get('http://localhost:3000/api/categorias').then((resp) =>{
                setCategorias(resp.data)
            });
           // const dato = await res.json();
            //console.log(data); // Agrega este log para verificar la respuesta
           // setCategorias(dato);
        } catch (error) {
            console.error('Error al obtener categorías:', error);
        }
    }
    
//ejecuta la consulta a la funcion de la funcion que llama al api
    useEffect(() =>{
        obtenercategorias();

    },[])

//para que se seleccione una categoria por defecto
    useEffect(() =>{
        setCategoriaActual(categorias[0])

    },[categorias])

    useEffect(() => {
        const nuevoTotal = pedido.reduce((total, producto) => (producto.precio * producto.cantidad) + total , 0)
        setTotal(nuevoTotal)
    },[pedido])
    //asigna la categoria del proyecto
    const handleClickCategoria = id  => {
    
        const categoria = categorias.filter(cat => cat.id === id)
        
        setCategoriaActual(categoria[0])

        router.push("/")
    }

    //producto para ser usado en el context global
   const handleSetProducto = producto => {
    setProducto(producto)
   }

   //desactiva el modal 
   const handleSetModal = () =>{
    setModal(!modal)
   }

   //maneja el pedido
   const handleAgregarPedido = ({cantegoriaId,...productocantidad}) => {

    if(pedido.some(productoSteate => productoSteate.id === productocantidad.id))
    {
        //actualizar cantidad en el state de pedido
        const pedidoActualizado = pedido.map(productoSteate => productoSteate.id === 
            productocantidad.id ? productocantidad : productoSteate)

            setPedido(pedidoActualizado)
    }else{
        setPedido([...pedido,productocantidad])
        toast.success('Agregado al Pedido')
    }
    setModal(false)
   
   }

   //para usar un rutas
   const handleChangepaso = paso =>{
    setPaso(paso)
   }

   const handleChangeEditar = id => {

    const productoActualizar = pedido.filter(producto => producto.id === id)
    setProducto(productoActualizar[0])
    setModal(true)
   }

   const handleChangeEliminar = id =>{

        const productoActualizado = pedido.filter(producto => producto.id !== id)
        setPedido(productoActualizado)
   }

   const colocarOrden = async (e) =>{
    e.preventDefault()

   try {
     await axios.post('http://localhost:3000/api/ordenes', {pedido,nombre,total,fecha:Date.now().toString()
       
      })
     setCategoriaActual(categorias[0])
     setNombre('')
     setPedido([])
     setTotal(0);

     
    
     setTimeout(() => {
       
        router.push("/")
     }, 3000);
    
      
   } catch (error) {
    console.log(error);
   }
}

    return (
        <QuioscoContext.Provider
            value={{
                categorias,
                handleClickCategoria,
                categoriaActual,
                producto,
                handleSetProducto,
                handleSetModal,
                modal,
                onOpenModal,
                onCloseModal,
                handleAgregarPedido,
                pedido ,
                handleChangepaso,
                paso,
                handleChangeEditar,
                handleChangeEliminar,
                nombre,
                setNombre,
                colocarOrden,total      

            }}
        >
            {children}
        </QuioscoContext.Provider>
    )
}


export default QuioscoContext;