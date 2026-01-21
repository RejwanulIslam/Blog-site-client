import { cookies } from "next/headers";

export const userServices = {
    getseation: async function () {
        try {
            const cookieStore = await cookies()
            const res = await fetch("http://localhost:5000/api/auth/get-session", {
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

            console.log(error)

        }
    }
}