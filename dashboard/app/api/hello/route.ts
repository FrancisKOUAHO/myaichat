import { NextResponse, } from 'next/server';
import { cookies } from "next/headers";


export async function GET(req: Request) {

	let Cookie;

	Cookie = cookies().get('userId')?.value

	return NextResponse.json({
		myCookie: parseInt(<string>Cookie)
	});

}