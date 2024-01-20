import { getApodImagesForPeriod } from "@/service/fetchApodImage";
import { NextResponse } from "next/server";

export async function GET(req: Request): Promise<NextResponse> {
        
    const {searchParams} = new URL(req.url);
    const startDate = searchParams.get('start') || '';
    const endDate = searchParams.get('end') || '';

    try {
        const galleryImages = await getApodImagesForPeriod(startDate, endDate);
        return NextResponse.json(galleryImages);
    } catch (error) {
        return NextResponse.json({ error })
    }
}