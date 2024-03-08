import {NextResponse} from 'next/server'
import { prisma } from '@/lib/prisma';


export async function POST(req)
{
    const body = await req.json()
    const {nombre,fecha,pedido,total} = body
    const newPedido = await prisma.orden.create({
        data:{
            nombre,
            total,
            pedido,
            fecha,


        }
    })
    return NextResponse.json({newPedido}) ;
    //return NextResponse.json( {bod}) ;
    // const {pedido,nombre,total} = await req.json();
    // const newPedido = await prisma.orden.create({
    //     data:{
    //         pedido,nombre,total
    //     }
    // })
    // console.log(NextResponse.json(newPedido));
    //return NextResponse.json({})
}

export async function GET()
{

    const ordenes = await prisma.orden.findMany({
        where: {
            estado:false
        }
    })

    return NextResponse.json(ordenes)
}