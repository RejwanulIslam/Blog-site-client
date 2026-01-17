"use client"
import React, { useEffect } from 'react'

export default function AboutError({ error, reset }: {error:Error,reset:()=>void}) {
    useEffect(()=>{
        console.log(error)
    },[])
    return (
        <div>
            <h1>Something is worng, plase </h1>
            <button onClick={()=>reset()}>Retry</button>
            </div>
    )
}
