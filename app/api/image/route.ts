import { getApodImage } from "@/service/fetchApodImage";
import { NextResponse } from "next/server";

export async function GET(req: Request): Promise<NextResponse> {
    try {
        const imageForDate = await getApodImage();
        return NextResponse.json(imageForDate);
    } catch (error) {
        return NextResponse.json({ error })
    }
}