'use client'
import AdminLayout from "./layout"
import useSWR from 'swr'
import axios  from "axios"
import ListaOrdenesAdmin from "@/components/ListaOrdenesAdmin"

 const Admin = () => {

  const fetcher =() => axios.get('http://localhost:3000/api/ordenes').then(datos => datos.data)
  const { data, error, isLoading } = useSWR('http://localhost:3000/api/ordenes', fetcher)

  // console.log(data);
  // console.log(error);
  // console.log(isLoading);

  return (
    <AdminLayout className="container md:w-full ">
      <h1 className="text-4xl font-black mt-5">Panel de Administracion</h1>

<p className="text-3xl my-10"> Administra tus Ordenes</p>  

      {
        data && data.length 
        ?
        data.map(orden => 
          <ListaOrdenesAdmin
          key={orden.id}
          orden={orden}
          />
          )
        :  <p>NO hay ordenes pendientes</p>
      }
    </AdminLayout>
  )
}

export default Admin