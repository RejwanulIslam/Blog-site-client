import { env } from "@/env"
import { date } from "better-auth"
import { error } from "console"

const API_URL = env.API_URL

export const blogService = {
    getBlogPost: async function () {
        try {
            const res = await fetch(`${API_URL}/post`)
            const data=await res.json()
            return {data:data,error:null}

        } catch (error:any) {
         return{date:null,error:{message:error.message}}
        }
    }

}