import { env } from "@/env"
const API_URL = env.API_URL
interface getBlogParams {
    isFutured: boolean;
    serch: string
}
interface serviceOptions {
    cache?: RequestCache;
    revalidate?: number
}
export const blogService = {
    getBlogPost: async function (params?: getBlogParams, options?: serviceOptions) {
        try {
            const url = new URL(`${API_URL}/post`)
            if (params) {
                Object.entries(params).forEach(([keyof, value]) => {
                    if (value !== undefined && value !== null && value !== "") {
                        url.searchParams.append(keyof, value)
                    }
                })
            }
            const config: RequestInit = {}
            if (options?.cache) {
                config.cache = options.cache
            }
            if (options?.revalidate) {
                config.next = { revalidate: options.revalidate }
            }

            console.log(url.toString())
            const res = await fetch(url.toString())
            const data = await res.json()
            return { data: data, error: null }

        } catch (error: any) {
            return { date: null, error: { message: error.message } }
        }
    },
    getBlogById: async function (id: string) {
        try {
            const res = await fetch(`${API_URL}/post/${id}`)
            const data = await res.json()
            return { data: data, error: null }
        } catch (error:any) {
            return { date: null, error: { message: error.message } }
        }
    }

}