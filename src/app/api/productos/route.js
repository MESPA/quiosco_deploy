import {prisma} from "@/lib/prisma";
import {NextResponse} from 'next/server'

export async function GET(request ,{params}){

    const productos = await prisma.producto.findMany()
    console.log(productos);
    return NextResponse.json("consulta" + params.id)

}

export function PUT(request ,{params}){
    return NextResponse.json("Actualizando" + params.id)

}
export function DELETE(request ,{params}){
    return NextResponse.json("ELIMINANDO" + params.id)

}
