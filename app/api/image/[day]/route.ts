import { getApodImage } from "@/service/fetchApodImage";
import { NextResponse } from "next/server";

export async function GET(req: Request, { params: { day } }: { params: { day: string } }): Promise<NextResponse> {
    
    const imageForDate = await getApodImage(day);
    return NextResponse.json(imageForDate);

}
