import { createContext, useState } from "react";
import React from 'react';
export const  ControlContext = createContext(
    {
        currentControl:null,
        setcurrentControl:()=>null
    }
)


export const ControlProvider = ({children})=>
{
    const [currentControl,setcurrentControl]=useState(null)
    const value= { currentControl,setcurrentControl}
    return <ControlContext.Provider value={value}>{children}</ControlContext.Provider>
}