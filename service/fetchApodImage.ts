export const getApodImage  = async (date: string = '') => {
    const baseUrl = `${process.env.NASA_APOD_URL!}?api_key=${process.env.NASA_APOD_KEY!}`;
    const queryUrl = date ? `${baseUrl}&date=${date}` : baseUrl;
       
    const resp: Response = await fetch(queryUrl);

    if(!resp.ok) throw new Error("Unable to get imaget of the day");

    return resp.json();
}
