'use client'

import { useEffect, useState } from 'react';
import { IDailyPhoto } from '@/types/types';
import axios from 'axios';

type FetchGalleryReturn = {
  isLoading: boolean,
  photoGallery: IDailyPhoto[] | null
}

export default function useFetchGallery(start: string, end: string): FetchGalleryReturn {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [photoGallery, setPhoto] = useState<IDailyPhoto[] | null>(null);

  useEffect(() => {
    const fetchPhotoData = async () => {
      setIsLoading(true);

      // const url = new URL('api/gallery', window.location.origin);
      // url.searchParams.append('start',start);
      // url.searchParams.append('end', end);

      const url = `${window.location.origin}/api/gallery?start=${start}&end=${end}`;
      console.log(url.toString());


      const response = await axios.get(url.toString());
      console.log('%cresponse', 'padding: 5px; background: hotpink; color: black;', response);
      if (response.status === 200) {
        return setPhoto(response.data);
      }
    }

    fetchPhotoData();

    setIsLoading(false);

  }, [start, end])

  return { isLoading, photoGallery };
}