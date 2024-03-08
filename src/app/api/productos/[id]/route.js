import {prisma} from "@/lib/prisma";
import {NextResponse} from 'next/server'

export async function GET(request ,{params}){

    const productos = await prisma.producto.findMany()
    console.log(productos);
    return NextResponse.json("metodo get" + params.id)

}

export function POST(request ,{params}){
    return NextResponse.json("Actualizando" + params.id)

}

