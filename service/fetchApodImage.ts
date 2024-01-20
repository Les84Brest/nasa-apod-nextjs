export const getApodImage  = async (date: string = '') => {
    const baseUrl = `${process.env.NASA_APOD_URL!}?api_key=${process.env.NASA_APOD_KEY!}`;
    const queryUrl = date ? `${baseUrl}&date=${date}` : baseUrl;
       
    const resp: Response = await fetch(queryUrl);

    if(!resp.ok) throw new Error("Unable to get image of the day");

    return resp.json();
}

export async function getApodImagesForPeriod(start: string, end: string){
    const baseUrl = `${process.env.NASA_APOD_URL!}?api_key=${process.env.NASA_APOD_KEY!}`;
    const queryUrl = `${baseUrl}&start_date=${start}&end_date=${end}`;
    console.log('query url???',queryUrl);
    
    const resp: Response = await fetch(queryUrl);
    if(!resp.ok) throw new Error("Unable to get images");
    return resp.json();
}
