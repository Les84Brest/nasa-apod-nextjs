import { getApodImagesForPeriod } from "@/service/fetchApodImage";
import { NextResponse } from "next/server";

export async function GET(req: Request): Promise<NextResponse> {

    const { searchParams } = new URL(req.url);
    const startDate = searchParams.get('start') || '';
    const endDate = searchParams.get('end') || '';

    const galleryImages = await getApodImagesForPeriod(startDate, endDate);
    return NextResponse.json(galleryImages);

}
export const dynamic = 'force-static'