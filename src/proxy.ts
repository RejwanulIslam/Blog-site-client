import { NextRequest, NextResponse } from "next/server";
import { userServices } from "./services/user.service";
import { Role } from "./constants/role";

export async function proxy(request: NextRequest) {
    const pathname = request.nextUrl.pathname
    let isAuthenticated = false
    let isAdmin = false
    const { data } = await userServices.getseation()
    if (data) {
        isAuthenticated = true
        isAdmin = data.user.role === Role.admin
    }
    // user is not authenticated at all
    if (!isAuthenticated) {
        return NextResponse.rewrite(new URL("/login", request.url))
    }

    // user is authenticated and role===admin
    //  user can not visit user dashboard
    if (isAdmin && pathname.startsWith("/dashboard")) {
        return NextResponse.redirect(new URL("/admin-dashboard", request.url))
    }

    // user is authenticated and role===user
    //  user can not visit admin dashboard
    if (!isAdmin && pathname.startsWith("/admin-dashboard")) {
        return NextResponse.redirect(new URL("/dashboard", request.url))
    }

    console.log(data)
    return NextResponse.next()
}

export const config = {
    matcher: [
        "/dashboard",
        "/dashboard/:path*",
        "/admin-dashboard",
        "/admin-dashboard/:path*"
    ]
}