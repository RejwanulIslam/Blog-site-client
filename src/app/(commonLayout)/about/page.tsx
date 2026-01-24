"use client"
import { getBlog } from "@/actions/blog.actions"
import { useEffect, useState } from "react"

// export const dynamic='force-dynamic' 
export default function AboutPage() {
const [data,setData]=useState()

useEffect(()=>{
(async()=>{
const {data}=await getBlog()
setData(data)
})()

},[])
console.log(data)

  // await new Promise(resolv=> setTimeout(resolv,4000))
  // throw new Error("halllooo")
  return (
    <div>AboutPage</div>
  )
}
