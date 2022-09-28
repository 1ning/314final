import { createContext, useState } from "react";
import React from 'react';
import { useEffect } from "react";
import { db2 } from "../utils/firebase";
import { set, ref, onValue, remove, update } from "firebase/database";
export const  ArticleContext = createContext(
    {
        staff2: [],
    }
)
//need to know how to get image
export const  ArticleProvider = ({children})=>
{
    const [staff2, setStaff] = useState([])
    useEffect(()=>{
        onValue(ref(db2), (snapshot) => {
            setStaff([]);
            const data = snapshot.val();
            if (data !== null) {
              Object.values(data).map(
                (todo) => {
                setStaff((oldArray) => [...oldArray, todo]);
              });
            }
          });
    }, [])

    const value = {staff2}
    return <ArticleContext.Provider value={value}>    
   {children}</ArticleContext.Provider>
}