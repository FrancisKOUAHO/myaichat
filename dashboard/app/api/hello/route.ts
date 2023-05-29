import { NextResponse } from 'next/server';
import { CookieValueTypes, getCookie } from "cookies-next";

export async function GET(request: Request) {
    const userId: CookieValueTypes = getCookie('userId');

    return NextResponse.json({ userId: userId });
}