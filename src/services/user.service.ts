import { env } from "@/env";
import { cookies } from "next/headers";
const AUTH_URL=env.AUTH_URL
export const userServices = {
    getseation: async function () {
        try {
            const cookieStore = await cookies()
            const res = await fetch(`${AUTH_URL}/get-session`, {
                headers: {
                    Cookie: cookieStore.toString()
                },
                cache: "no-store"
            })
            const seation = await res.json()
            if (seation === null) {
                return { data: null, error: { message: "seation is missing" } };

            }
            return { data: seation, error: null };
        } catch (error) {
            return { data: null, error: { message: "Some thing is worng" } };

        }
    }
}