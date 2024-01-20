import { getApodImage } from "@/service/fetchApodImage";
import { NextResponse } from "next/server";

export async function GET(req: Request): Promise<NextResponse> {

    const { searchParams } = new URL(req.url);
    const photoDate = searchParams.get('photoDate') || '';


    const imageForDate = await getApodImage(photoDate);
    return NextResponse.json(imageForDate);

}

export const dynamic = 'force-static'