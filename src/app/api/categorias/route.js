import {prisma} from "@/lib/prisma";
import {NextResponse} from 'next/server'

export async function GET(req ,res){


    const categorias = await prisma.categoria.findMany({
        include:{
            productos:true
        }
    })
    
    return NextResponse.json(categorias)

}