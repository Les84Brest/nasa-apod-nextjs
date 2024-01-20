'use client'

import { useEffect, useState } from 'react';
import { IDailyPhoto } from '@/types/types';
import axios from 'axios';

type FetchPhotoReturn = {
  isLoading: boolean,
  photo: IDailyPhoto | null
}

export default function useFetchPhoto(photoDate: string = ''): FetchPhotoReturn {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [photo, setPhoto] = useState<IDailyPhoto | null>(null);

  useEffect(() => {    
    const fetchPhotoData = async (photoDate: string) => {
      setIsLoading(true);

      const url = photoDate ? `${window.location.href}/api/image?photoDate=${photoDate}` : `${window.location.href}/api/image`;
      const response = await axios.get(url);
      if (response.status === 200 ){        
        return setPhoto(response.data);
      }
    }

    fetchPhotoData(photoDate);
    
    setIsLoading(false);

  }, [photoDate])

  return { isLoading, photo };
}