import { getApodImagesForPeriod } from "@/service/fetchApodImage";
import { NextResponse, NextRequest } from "next/server";

export async function GET(req: NextRequest): Promise<NextResponse> {
    const { searchParams } = new URL(req.url);
    const startDate = req.nextUrl.searchParams.get('start') || '';
    const endDate = req.nextUrl.searchParams.get('end') || '';

    const galleryImages = await getApodImagesForPeriod(startDate, endDate);
    return NextResponse.json(galleryImages);

}
