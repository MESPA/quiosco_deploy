'use client'
import { useContext } from "react";
import QuioscoContext from "@/context/QuioscoProvider";

const useQuiosco = () =>{

    const context = useContext(QuioscoContext) || {};
    return context
}

export default useQuiosco