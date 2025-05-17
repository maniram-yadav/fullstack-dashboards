import {  NextResponse} from "next/server";
import type {  NextRequest} from "next/server";

export function middleware(request:NextRequest) {
    
    const path = request.nextUrl.pathname;
    const isPublicPath = path==='/login' || path==='/register';
    const token = request.cookies.get('user')?.value || '';
    console.log(path,isPublicPath,token);
    if (!isPublicPath && !token){
        return NextResponse.redirect(new URL('/login',request.nextUrl));
    }
    if(isPublicPath && token) {
        return NextResponse.next();
    }
    return NextResponse.next();
}

export const config = {
    matcher:[
           '/',
    '/account',
    '/dashboard',
    '/login',
    '/register',
    ]
}